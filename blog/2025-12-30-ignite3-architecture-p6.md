---
title: "Distributed Consistency Under Load: When High-Velocity Meets High-Availability"
authors: [maglietti]
date: 2025-12-30
tags: [architecture, technical, ignite3]
---

# Apache Ignite 3 Architecture Series: Part 6 — Distributed Consistency Under Load: When High-Velocity Meets High-Availability

Distributed systems traditionally force a choice between consistency and speed. Apache Ignite's RAFT implementation delivers both: strong guarantees that protect your business without the coordination penalties that limit throughput.

<!-- truncate -->

---

_Part 6 of 8 in the Apache Ignite 3 Architecture Series_

---

When network partitions split your cluster, duplicate payments happen. Apache Ignite prevents this through automatic coordination that maintains consistency without performance penalties.

**Business scenario:** Your payment processing system handles 10,000 transactions per second across 5 nodes. Network issues isolate 2 nodes from the remaining 3 nodes. Both groups continue processing payments. Customer payment gets charged twice.

**The solution:** Automatic consensus ensures only one group can process payments during network splits. Your application code stays simple while the platform handles distributed coordination automatically.

**Performance guarantee:** Consensus happens in the background without blocking transaction processing.

## Business Problems from Inconsistent Data

### Duplicate Payment Scenario

Network partitions create business-critical consistency problems:

**What happens during network partition without proper coordination:**

```java
// Network partition splits payment cluster
// Both partitions continue processing payments independently
// Partition A (3 nodes) processes payment:
PaymentResult resultA = processPayment(payment); // SUCCESS: Balance updated to $500
// Partition B (2 nodes) processes same payment:
PaymentResult resultB = processPayment(payment); // SUCCESS: Balance updated to $500
// When network heals: customer charged twice, balance corrupted
// Expected: $500 final balance
// Actual: $0 final balance (double charge)
```

**Business impact of consistency failures:**

- **Customer complaints**: Duplicate charges from partition processing
- **Financial exposure**: Regulatory penalties for transaction sequence errors
- **System downtime**: Manual reconciliation required when partitions heal
- **Business risk**: Revenue loss during extended partition scenarios

### Why Traditional Solutions Fail

**Performance penalty:** Traditional consensus adds 20-50ms to every transaction through multiple network round-trips. At 10,000 payments per second, this creates a 200-500 second processing backlog.

**Failure problems:**

- **Network delays**: Every transaction requires multiple round-trips to all nodes
- **Processing blocks**: All nodes wait for slowest participant
- **Failure stops processing**: Single node failure blocks all transactions
- **Partition stops everything**: Network partition stops all processing

## Apache Ignite Automatic Coordination Solution

### Zero-Code Consistency for Normal Operations

**Your application code stays simple. Apache Ignite handles distributed coordination automatically.**

```java
// Your application code - simple and clean
public PaymentResult processPayment(PaymentRequest payment) {
    return ignite.transactions().runInTransaction(tx -> {
        Table accounts = ignite.tables().table("accounts");

        // Standard database operations
        Tuple account = accounts.recordView().get(tx,
            Tuple.create().set("account_id", payment.accountId));

        if (account.decimalValue("balance").compareTo(payment.amount) < 0) {
            return PaymentResult.INSUFFICIENT_FUNDS;
        }

        // Update account balance
        accounts.recordView().upsert(tx, Tuple.create()
            .set("account_id", payment.accountId)
            .set("balance", account.decimalValue("balance").subtract(payment.amount)));

        return PaymentResult.SUCCESS;
    });
    // Apache Ignite handles all distributed coordination automatically:
    // - Prevents duplicate processing during network partitions
    // - Ensures balance consistency across all nodes
    // - Maintains transaction ordering for compliance
    // - Provides automatic failure recovery
}
```

**Automatic coordination benefits:**

- **No coordination code**: Write business logic, Ignite handles distributed consistency
- **No duplicate processing**: Network partitions cannot create duplicate payments
- **No configuration needed**: Consistency works automatically without setup
- **No performance penalty**: Coordination happens in the background without blocking operations

## Advanced Features: Manual Coordination Control

For specialized use cases, Apache Ignite provides manual control over distributed coordination. Most applications never need this.

### When Manual Control Matters

- Custom distributed workflows with specific ordering requirements
- Multi-step operations requiring atomic coordination across steps
- Application-specific conflict resolution logic
- Performance-critical operations needing direct coordination control

```java
// Advanced RAFT control for custom distributed algorithms
public class CustomPaymentWorkflowRaft {

    private final RaftGroupService paymentRaftGroup;
    private final ClusterService clusterService;

    public CompletableFuture<PaymentResult> processCustomPaymentWorkflow(PaymentRequest payment) {
        // Custom multi-step payment workflow requiring specific consensus behavior
        CustomPaymentCommand paymentCommand = new CustomPaymentCommand(payment);

        // Direct RAFT group control for specialized workflow
        return paymentRaftGroup.run(paymentCommand)
            .thenApply(result -> {
                // Custom workflow processed with specialized consensus logic
                return (PaymentResult) result;
            });
    }

    // Custom command for specialized payment workflows
    public static class CustomPaymentCommand implements Command {
        private final PaymentRequest payment;

        public CustomPaymentCommand(PaymentRequest payment) {
            this.payment = payment;
        }

        public PaymentRequest getPayment() {
            return payment;
        }
    }

    // Custom RAFT group listener for specialized processing
    public class CustomPaymentRaftGroupListener implements RaftGroupListener {

        @Override
        public void onWrite(Iterator<CommandClosure<WriteCommand>> iterator) {
            while (iterator.hasNext()) {
                CommandClosure<WriteCommand> closure = iterator.next();

                if (closure.command() instanceof CustomPaymentCommand) {
                    CustomPaymentCommand cmd = (CustomPaymentCommand) closure.command();
                    PaymentResult result = processCustomPaymentWorkflow(cmd.getPayment());
                    closure.result(result);
                }
            }
        }

        private PaymentResult processCustomPaymentWorkflow(PaymentRequest payment) {
            // Custom distributed workflow requiring specific consensus behavior
            // This would implement specialized logic not available through standard transactions
            return new PaymentResult();
        }
    }
}
```

**Advanced Control Use Cases:**

- Custom distributed state machines
- Specialized ordering requirements
- Performance-critical consensus operations
- Application-specific replication logic

**RAFT Performance Advantages:**

- **Leader-based**: Single node processes operations, eliminating coordination overhead
- **Pipeline efficiency**: Leaders process operations without blocking
- **Majority consensus**: Only majority nodes required (faster than unanimous)
- **Log-based replication**: Efficient state machine replication

### RAFT Group Configuration

RAFT groups are created and managed through RaftManager for specialized processing requirements:

```java
// RAFT group configuration for specialized processing
public class CustomRaftConfiguration {

    private final RaftManager raftManager;
    private final ClusterService clusterService;
    private final String groupId = "custom-processing-group";

    public RaftGroupService createCustomRaftGroup() {
        ClusterNode localNode = clusterService.topologyService().localMember();
        RaftNodeId nodeId = new RaftNodeId(groupId, localNode);
        PeersAndLearners configuration = selectProcessingNodes();

        CustomRaftGroupListener listener = new CustomRaftGroupListener();
        RaftGroupEventsListener eventsListener = new CustomRaftGroupEventsListener();

        return raftManager.startRaftGroupNode(
            nodeId,
            configuration,
            listener,
            eventsListener,
            RaftGroupService::new,
            createRaftOptionsConfigurer()
        );
    }

    private PeersAndLearners selectProcessingNodes() {
        // Select available cluster nodes for RAFT group
        List<Peer> peers = clusterService.topologyService().allMembers().stream()
            .limit(5) // Optimal RAFT group size for consensus
            .map(node -> new Peer(node.name()))
            .collect(Collectors.toList());

        // Create learners list (can be empty for basic setup)
        List<Peer> learners = List.of();

        return PeersAndLearners.fromPeers(peers, learners);
    }

    private RaftGroupOptionsConfigurer createRaftOptionsConfigurer() {
        return options -> {
            // Configure RAFT group options for specialized processing
            RaftGroupOptions groupOptions = (RaftGroupOptions) options;
            groupOptions.serverDataPath(Paths.get("/path/to/raft/data"));
        };
    }
}
```

## Consensus Performance Under High-Velocity Load

### RAFT Consensus Performance Impact

**Standard Transaction Performance:**

```java
@Benchmark
public class StandardTransactionPerformance {

    @Benchmark
    public PaymentResult processStandardPayment() {
        long startTime = System.nanoTime();

        // Standard transaction - RAFT consensus handled automatically
        PaymentResult result = ignite.transactions().runInTransaction(tx - {
            // Business logic - Ignite handles distributed consistency
            return processPaymentLogic(paymentRequest, tx);
        });

        long processingTime = System.nanoTime() - startTime;
        // Performance includes automatic RAFT consensus overhead

        return result;
    }
}
```

**Standard Operation Performance:**

- **Transaction processing**: Milliseconds range depending on cluster configuration
- **Automatic consensus**: Ignite optimizes RAFT for table operations
- **Developer simplicity**: No consensus code required
- **Throughput**: Scales with cluster capacity

**Advanced RAFT Performance** (when using direct control):

- **Custom processing**: Microseconds for specialized logic
- **Direct consensus**: Application controls consensus behavior
- **Specialized optimization**: Custom performance tuning possible
- **Complex workflows**: Multi-step distributed operations

### Handling Network Partitions During High Load

**Partition Tolerance in Distributed Processing:**

```java
public class RaftPartitionHandling {

    private final RaftGroupService raftGroupService;
    private final ClusterService clusterService;

    public CompletableFuture<String> handleOperationDuringPartition(String operationData) {
        // RAFT automatically handles network partitions through leader-based consensus
        Peer currentLeader = raftGroupService.leader();

        if (currentLeader != null && isNodeInCluster()) {
            // This node can communicate with cluster - process operation
            CustomCommand command = new CustomCommand(operationData);
            return raftGroupService.run(command)
                .thenApply(result -> "Operation completed: " + result);
        } else {
            // This node is isolated or no leader available - reject operation
            return CompletableFuture.completedFuture("Operation temporarily unavailable");
        }
    }

    private boolean isNodeInCluster() {
        // Check if this node is still part of the active cluster topology
        ClusterNode localNode = clusterService.topologyService().localMember();
        Collection<ClusterNode> allMembers = clusterService.topologyService().allMembers();

        return allMembers.contains(localNode);
    }

    // Custom command implementation for RAFT processing
    public static class CustomCommand implements Command {
        private final String data;

        public CustomCommand(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }
}
```

**Partition Behavior:**

- **Majority partition**: Continues processing operations with full consistency
- **Minority partition**: Stops processing to prevent split-brain scenarios
- **Recovery**: Partitions automatically reconcile when network heals
- **Data safety**: No data loss or duplication across partitions

### Leader Election Performance

**Fast Leader Election for Business Continuity:**

```java
public class RaftLeaderElection {

    public void handleLeaderFailureDuringPeakLoad() {
        // RAFT leader election for distributed processing
        long electionStart = System.currentTimeMillis();

        raftGroup.refreshLeader().thenAccept(newLeader -> {
            long electionTime = System.currentTimeMillis() - electionStart;

            // Election time depends on network conditions and RAFT configuration
            log.info("Leader election completed in {}ms", electionTime);

            // Resume processing immediately
            resumeProcessing(newLeader);
        });
    }

    private void resumeProcessing(Peer newLeader) {
        // New leader immediately continues from RAFT log state
        // No data loss or inconsistency during leadership change
        log.info("Processing resumed under new leader: {}", newLeader.consistentId());
    }
}
```

**Leader Election Characteristics:**

- **Election time**: Configurable based on network conditions and RAFT settings
- **Service continuity**: Processing resumes immediately after election
- **Data consistency**: All committed operations preserved across leader changes
- **Automatic recovery**: No manual intervention required

## Real-World Consensus Scenarios

### Bank Payment Processing Under Load

**Daily Payment Volume**: 1 million payments across 24 hours

**Standard Bank Payment Processing:**

```java
// Bank payment processing - Ignite handles RAFT automatically
@Service
public class BankPaymentProcessor {

    public PaymentResult processInterBankTransfer(TransferRequest transfer) {
        // Standard transaction processing with automatic consistency
        return ignite.transactions().runInTransaction(tx -> {
            Table senderAccounts = ignite.tables().table("sender_accounts");
            Table receiverAccounts = ignite.tables().table("receiver_accounts");
            Table auditLog = ignite.tables().table("audit_log");

            // Atomic transfer with automatic RAFT consensus
            Tuple senderKey = Tuple.create().set("account_id", transfer.senderAccountId);
            Tuple senderAccount = senderAccounts.recordView().get(tx, senderKey);

            if (senderAccount.decimalValue("balance").compareTo(transfer.amount) < 0) {
                return PaymentResult.INSUFFICIENT_FUNDS;
            }

            // Update both accounts atomically with automatic consensus
            BigDecimal newSenderBalance = senderAccount.decimalValue("balance").subtract(transfer.amount);
            senderAccounts.recordView().upsert(tx,
                Tuple.create()
                    .set("account_id", transfer.senderAccountId)
                    .set("balance", newSenderBalance));

            receiverAccounts.recordView().upsert(tx,
                Tuple.create()
                    .set("account_id", transfer.receiverAccountId)
                    .set("balance", transfer.amount));

            // Audit logging with automatic replication
            auditLog.recordView().insert(tx, createAuditRecord(transfer));

            return PaymentResult.SUCCESS;
        });
    }
}
```

**For Complex Multi-Bank Workflows** (advanced scenarios):

```java
// Custom consensus for specialized inter-bank protocols
public class AdvancedInterBankProcessor {

    public PaymentResult processComplexInterBankWorkflow(TransferRequest transfer) {
        // Specialized workflow requiring custom consensus behavior
        InterBankWorkflowCommand command = new InterBankWorkflowCommand(transfer);

        return paymentRaftGroup.run(command)
            .thenApply(result -> {
                // Custom workflow with specialized consistency requirements
                return (PaymentResult) result;
            });
    }
}
```

**Performance Under Peak Load:**

- **Peak hour volume**: 100,000 payments/hour (27/second average, 200/second peak)
- **Consensus latency**: Depends on network and storage configuration
- **System availability**: High availability through RAFT consensus and automatic failover
- **Regulatory compliance**: Guaranteed transaction ordering accuracy

### E-commerce Order Processing

**Flash Sale Event**: 50,000 orders in 1 hour

**Standard Order Processing:**

```java
// E-commerce order processing - automatic consistency
public class FlashSaleOrderProcessor {

    public OrderResult processFlashSaleOrder(OrderRequest order) {
        // Standard transaction handling flash sale inventory
        return ignite.transactions().runInTransaction(tx -> {
            Table inventory = ignite.tables().table("inventory");
            Table orders = ignite.tables().table("orders");
            Table payments = ignite.tables().table("payments");

            // Inventory check with automatic consistency
            Tuple productKey = Tuple.create().set("product_id", order.productId);
            Tuple product = inventory.recordView().get(tx, productKey);

            int availableQuantity = product.intValue("quantity");
            if (availableQuantity < order.quantity) {
                return OrderResult.OUT_OF_STOCK;
            }

            // Atomic inventory update, order creation, payment processing
            inventory.recordView().upsert(tx,
                Tuple.create()
                    .set("product_id", order.productId)
                    .set("quantity", availableQuantity - order.quantity));

            orders.recordView().insert(tx, createOrderRecord(order));
            payments.recordView().insert(tx, createPaymentRecord(order.payment));

            return OrderResult.SUCCESS;
        });
    }
}
```

**For Specialized Inventory Algorithms** (advanced scenarios):

```java
// Custom consensus for complex inventory management
public class AdvancedInventoryProcessor {

    public OrderResult processWithCustomInventoryLogic(OrderRequest order) {
        // Specialized inventory workflow requiring custom consensus
        CustomInventoryCommand command = new CustomInventoryCommand(order);
        return inventoryRaftGroup.run(command)
            .thenApply(result -> (OrderResult) result);
    }
}
```

**Flash Sale Performance:**

- **Order processing rate**: Scales with cluster capacity and configuration
- **Inventory consistency**: Maintained through RAFT consensus (prevents overselling)
- **Payment consistency**: Guaranteed through RAFT consensus (prevents duplicate charges)
- **Customer experience**: Response time depends on network and processing configuration

## Business Impact of Distributed Consistency

### Risk Mitigation

**Financial Risk Reduction:**

- **Payment accuracy**: Eliminates duplicate payments and lost transactions
- **Regulatory compliance**: Guaranteed transaction ordering for audit trails
- **System reliability**: Automatic failover maintains business continuity
- **Data protection**: Strong consistency prevents data corruption

**Operational Risk Reduction:**

- **Manual intervention**: Consensus automation reduces human error
- **System recovery**: Automatic partition healing reduces downtime
- **Capacity planning**: Predictable consensus behavior enables accurate sizing
- **Incident response**: Built-in fault tolerance reduces emergency responses

### Revenue Protection

**Payment Processing Firm Benefits:**

- **Transaction volume**: Supports high-volume payment processing
- **System availability**: RAFT consensus provides automatic failover
- **Consistency guarantees**: Eliminates payment errors that damage customer trust
- **Scalability**: Horizontal scaling through RAFT group partitioning

**E-commerce Platform Benefits:**

- **Peak load handling**: Flash sales process high volumes without consistency issues
- **Customer trust**: Zero payment errors maintain customer confidence
- **Competitive advantage**: Reliable order processing during high-demand events
- **Revenue capture**: Consistent order processing vs eventual consistency risks

### Operational Efficiency

**Development Team Benefits:**

- **Simplified architecture**: Single consistency model across all operations
- **Reduced debugging**: Strong consistency eliminates race condition bugs
- **Faster deployment**: Consensus handles failure scenarios automatically
- **Predictable behavior**: Deterministic failure modes simplify testing

**Operations Team Benefits:**

- **Automated failover**: RAFT consensus reduces manual intervention requirements
- **Consistent monitoring**: Single consistency model simplifies observability
- **Predictable recovery**: Automated partition healing reduces incident response time
- **Scalable operations**: Consensus scales with cluster size

## The Consistency-Performance Balance

Traditional distributed systems force trade-offs between consistency and performance. Strong consistency requires coordination overhead. Eventual consistency risks business-critical errors.

Apache Ignite's RAFT implementation optimizes for both consistency and performance. Strong consistency guarantees protect business operations while consensus performance supports high-velocity application requirements.

**The principle: Consistency should enable performance, not limit it.**

When your distributed system maintains strong consistency without significant performance penalties, you eliminate the architectural compromises that force trade-offs between business safety and operational speed.

High-velocity applications need both consistency guarantees and performance characteristics. RAFT consensus provides the distributed coordination foundation that enables both requirements simultaneously.

*Return next Tuesday for Part 7, that examines how MVCC transactions build on the RAFT consensus foundation to provide ACID guarantees optimized for high-frequency operations. This ensures that distributed consistency enables rather than constrains transaction processing performance.*
