---
title: "Eliminating Data Movement: The Hidden Cost of Distributed Event Processing"
authors: [maglietti]
date: 2025-12-23
tags: [architecture, technical, ignite, ignite3]
---

# Apache Ignite 3 Architecture Series: Part 5 — Eliminating Data Movement: The Hidden Cost of Distributed Event Processing

Your high-velocity application processes events fast enough until it doesn't. The bottleneck isn't CPU or memory. It's data movement. Every time event processing requires data from another node, network latency adds milliseconds that compound into seconds of delay under load.

<!-- truncate -->

---

_Part 5 of 8 in the Apache Ignite 3 Architecture Series_

---

Consider a financial trading system processing peak loads of 10,000 trades per second. Each trade requires risk calculations against a customer's portfolio. If portfolio data lives on different nodes than the processing logic, network round-trips create an impossible performance equation: 10,000 trades × 2ms network latency = 20 seconds of network delay per second of wall clock time.

Apache Ignite eliminates this constraint through data collocation. Related data and processing live on the same nodes, transforming distributed operations into local memory operations.

**The result: distributed system performance without distributed system overhead.**

## The Data Movement Tax on High-Velocity Applications

### Network Latency Arithmetic

At scale, network latency creates mathematical impossibilities:

**Here's what distributed processing costs in practice:**

```java
// Traditional distributed processing (data on different nodes)
long startTime = System.nanoTime();
// 1. Fetch event data (potentially remote: 0.5-2 ms)
EventData event = eventService.getEvent(eventId);                       // Network: 0.5-2 ms
// 2. Fetch related customer data (potentially remote: 0.5-2 ms)
CustomerData customer = customerService.getCustomer(event.customerId);  // Network: 0.5-2 ms
// 3. Fetch processing rules (potentially remote: 0.5-2 ms)
ProcessingRules rules = rulesService.getRules(customer.segment);        // Network: 0.5-2 ms
// 4. Execute processing logic (local: 0.1 ms)
ProcessingResult result = processEvent(event, customer, rules);         // CPU: 0.1 ms
// 5. Store results (potentially remote: 0.5-2 ms)
resultService.storeResult(eventId, result);                             // Network: 0.5-2 ms
long totalTime = System.nanoTime() - startTime;
// Total: 2.6-10.1 ms per event (90%+ network overhead)
```

**At Scale:**

- 1,000 events/sec × 5 ms average = 5 seconds processing time per second (impossible)
- 10,000 events/sec × 5 ms average = 50 seconds processing time per second (catastrophic)

### The Compound Effect of Distribution

Real applications don't just move data once per event. They move data multiple times:

**Here's how the cascade effect compounds:**

```java
// Multi-hop data movement for single order
OrderEvent order = getOrder(orderId);                                    // Network hop 1: 1 ms
CustomerData customer = getCustomer(order.customerId);                   // Network hop 2: 1 ms
InventoryData inventory = getInventory(order.productId);                 // Network hop 3: 1 ms
PricingData pricing = getPricing(order.productId, customer.segment);     // Network hop 4: 1 ms
PaymentData payment = processPayment(order.amount, customer.paymentId);  // Network hop 5: 2 ms
ShippingData shipping = calculateShipping(order, customer.address);      // Network hop 6: 1 ms
PromotionData promotions = applyPromotions(order, customer);             // Network hop 7: 1 ms
// Total network overhead: 8ms per order (before any business logic)
```

**The cascade effect**: Each data dependency creates another network round-trip. Complex event processing can require 10+ network operations per event.

## Strategic Data Placement Through Collocation

### Apache Ignite Collocation Architecture

Apache Ignite uses deterministic hash distribution to ensure related data lands on the same nodes. The platform automatically generates consistent hash values for collocation keys, ensuring all data with the same collocation key always lands on the same node. This deterministic placement means that once data is collocated, subsequent access patterns benefit from data locality without manual coordination.

### Table Design for Event Processing Collocation

```sql
-- Create distribution zone for customer-based collocation
CREATE ZONE customer_zone WITH
    partitions=64,
    replicas=3;

-- Orders table using customer-based distribution zone
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY,
    customer_id BIGINT,
    product_id BIGINT,
    amount DECIMAL(10,2),
    order_date TIMESTAMP
) WITH ZONE='customer_zone';

-- Customer data using same distribution zone for collocation
CREATE TABLE customers (
    customer_id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    segment VARCHAR(20),
    payment_method VARCHAR(50)
) WITH ZONE='customer_zone';

-- Customer pricing using same zone for collocation
CREATE TABLE customer_pricing (
    customer_id BIGINT,
    product_id BIGINT,
    price DECIMAL(10,2),
    discount_rate DECIMAL(5,2),
    PRIMARY KEY (customer_id, product_id)
) WITH ZONE='customer_zone';
```

**Result**: All tables using the same distribution zone share the same partitioning strategy. Data for customer 12345 distributes to the same partition across all tables, enabling local processing without network communication.

### Compute Collocation for Event Processing

**Processing Moves to Where Data Lives:**

Instead of moving data to processing logic, compute jobs execute on the nodes where related data already exists. For customer order processing, the compute job runs on the node containing the customer's data, orders, and pricing information. All data access becomes local memory operations rather than network calls.

**Simple Collocation Example:**

```java
// Execute processing where customer data lives
Tuple customerKey = Tuple.create().set("customer_id", customerId);
CompletableFuture<OrderResult> future = client.compute().executeAsync(
    JobTarget.colocated("customers", customerKey),  // Run on node with customer data
    OrderProcessingJob.class,
    customerId
);
```

**Performance Impact**: 8ms distributed processing becomes sub-millisecond collocated processing through data locality.

## Real-World Collocation Performance Impact

### Financial Risk Calculation Example

**Problem**: Trading system needs real-time portfolio risk calculation for each trade.

**Here's what the distributed approach costs:**

Traditional risk calculations require multiple network calls: fetch trade details (1ms), retrieve portfolio data (2ms), get current market prices (1ms), and load risk rules (1ms). The actual risk calculation takes 0.2ms, but network overhead dominates at 5.2ms total. At 10,000 trades per second, this creates 52 seconds of processing time per second. This is mathematically impossible.

**Collocated Risk Processing:**

When account portfolios, trade histories, and risk rules collocate by account ID, risk calculations become local operations. All required data lives on the same node where the processing executes. Network overhead disappears, transforming 5.2ms distributed operations into sub-millisecond local calculations.

**Business Impact:**

- **Trading velocity**: Process 10,000+ trades per second with real-time risk assessment
- **Risk accuracy**: Use complete portfolio context without stale data
- **Regulatory compliance**: Meet sub-second risk calculation requirements

### IoT Event Processing Example

**Problem**: Manufacturing system processes sensor events requiring contextual data for anomaly detection.

**Collocated Design**:

```sql
-- Create distribution zone for equipment-based collocation
CREATE ZONE equipment_zone WITH
    partitions=32,
    replicas=2;

-- Sensor data using equipment-based distribution zone
CREATE TABLE sensor_readings (
    sensor_id BIGINT,
    equipment_id BIGINT,
    timestamp TIMESTAMP,
    temperature DECIMAL(5,2),
    pressure DECIMAL(8,2),
    vibration DECIMAL(6,3),
    PRIMARY KEY (sensor_id, timestamp)
) WITH ZONE='equipment_zone';

-- Equipment specifications using same zone for collocation
CREATE TABLE equipment_specs (
    equipment_id BIGINT PRIMARY KEY,
    max_temperature DECIMAL(5,2),
    max_pressure DECIMAL(8,2),
    max_vibration DECIMAL(6,3),
    maintenance_schedule VARCHAR(50)
) WITH ZONE='equipment_zone';
```

**Processing Performance:**

Anomaly detection jobs execute on the nodes containing the equipment data they analyze. Current sensor readings, historical patterns, and equipment specifications all reside locally. The processing accesses recent sensor data, compares against equipment tolerances, and detects anomalies without any network calls.

**Performance Outcome**: Sub-millisecond anomaly detection vs multi-millisecond distributed processing. Single cluster processes tens of thousands of sensor readings per second with real-time anomaly detection.

## Collocation Strategy Selection

### Event-Driven Collocation Patterns

**Customer-Centric Applications**:

```sql
-- Customer-focused distribution zone
CREATE ZONE customer_zone WITH partitions=64;
CREATE TABLE orders (...) WITH ZONE='customer_zone';
```

- Orders, payments, preferences, history distributed by customer key
- Customer service queries access data from same partition
- Personalization engines process complete customer context locally

**Time-Series Event Processing**:

```sql
-- Time-based distribution zone
CREATE ZONE hourly_zone WITH partitions=24;
CREATE TABLE events (...) WITH ZONE='hourly_zone';
```

- Recent events distribute based on time windows
- Historical analysis accesses time-coherent partitions
- Event correlation happens without cross-node communication

**Geographic Distribution**:

```sql
-- Region-based distribution zone
CREATE ZONE regional_zone WITH partitions=16;
CREATE TABLE locations (...) WITH ZONE='regional_zone';
```

- Regional data partitions to regional node groups
- Location-aware services access local partition data
- Geographic analytics minimize cross-region data movement

### Automatic Query Optimization Through Collocation

**When related data lives together, query performance transforms:**

```sql
-- Before collocation: expensive cross-node JOINs
SELECT c.name, o.order_total, p.amount
FROM customers c
  JOIN orders o ON c.customer_id = o.customer_id
  JOIN payments p ON o.order_id = p.order_id
WHERE c.customer_id = 12345;
-- Network overhead: 3 tables × potential cross-node fetches = high latency

-- After collocation: local memory JOINs
-- Same query, but all customer 12345 data lives on same node
-- Result: JOIN operations become local memory operations
```

**Complex Analytics Become Local Operations:**

```java
// Complex analytical query becomes local operation
ResultSet<SqlRow> customerAnalysis = client.sql().execute(tx, """
    SELECT
        c.segment,
        COUNT(o.order_id) as order_count,
        SUM(o.amount) as total_spent,
        AVG(p.processing_time) as avg_payment_time
    FROM customers c
      JOIN orders o ON c.customer_id = o.customer_id
      JOIN payments p ON o.order_id = p.order_id
    WHERE c.registration_date >= ?
    GROUP BY c.segment
    HAVING total_spent > 10000
""", lastMonth);
// When all three tables share the same distribution zone:
// - Multi-table JOINs execute locally per partition
// - No network overhead for related data access
// - Query performance scales with CPU, not network bandwidth
```

**Query Performance Transformation:**

- **JOIN operations**: Cross-node network calls → local memory operations
- **Complex analytics**: Network-bound → CPU-bound (much faster)
- **Query planning**: Distributed execution → local partition execution
- **Performance scaling**: Limited by network → limited by CPU/memory

**The performance transformation**: Query optimization through data placement. When related data lives together, complex queries become simple local operations, fundamentally changing performance characteristics.

### Performance Validation

**Collocation Effectiveness Monitoring:**

Apache Ignite provides built-in metrics to monitor collocation effectiveness: query response times, network traffic patterns, and CPU utilization versus network wait time. Effective collocation strategies achieve specific performance indicators that demonstrate data locality success.

**Success Indicators:**

- **Local execution**: 95%+ of queries execute locally without network hops
- **Memory-speed access**: Average query latency under 1 ms for collocated data
- **CPU utilization**: 80%+ processing time versus network waiting
- **Predictable performance**: Consistent response times independent of cluster size

## The Business Impact of Eliminating Data Movement

### Cost Reduction

- **Network Infrastructure**: 10x reduction in inter-node bandwidth requirements
- **Hardware Efficiency**: Higher CPU/memory utilization vs network-bound systems
- **Operational Complexity**: Fewer moving parts in event processing pipelines

### Performance Gains

- **Response Time**: 10-50x improvement in event processing latency
- **Throughput**: 5-10x higher event processing capacity with same hardware
- **Predictability**: Consistent performance independent of network conditions

### Application Capabilities

- **Real-Time Analytics**: Sub-millisecond analytics on live transactional event streams
- **Complex Event Processing**: Multi-step event processing without coordination overhead
- **Interactive Applications**: User-facing features with database-backed logic at cache speeds

## The Architectural Evolution

Traditional distributed systems accept network overhead as inevitable. Apache Ignite eliminates it through intelligent data placement.

Your high-velocity application doesn't need to choose between distributed scale and local performance. Collocation provides both: the data capacity and fault tolerance of distributed systems with the performance characteristics of single-node processing.

**The principle**: Collocate related data, localize dependent processing.

Every network hop you eliminate returns performance to your application's processing budget. At high event volumes, those performance gains determine whether your architecture scales with your business success or becomes the constraint that limits it.

---

*Return next Tuesday for Part 6 to discover how distributed consensus maintains data consistency during high-frequency operations. We'll explore how to preserve the performance gains from collocation while ensuring your high-velocity applications remain both fast and reliable.*
