---
title: "Getting to Know Apache Ignite 3"
authors: [maglietti]
date: 2025-11-12
tags: [technical, ignite, ignite3, featured]
---

# Getting to Know Apache Ignite 3: A Schema-Driven Distributed Computing Platform

Apache Ignite 3 is a memory-first distributed SQL database platform that consolidates transactions, analytics, and compute workloads previously requiring separate systems. Built from the ground up over four years of development, it represents a complete departure from traditional caching solutions toward a unified distributed computing platform with microsecond latencies and collocated processing capabilities.

<!-- truncate -->

**Forget everything you knew about Apache Ignite.** Version 3.0 is a complete architectural rewrite that transforms Ignite from a caching platform into a memory-first distributed computing platform with microsecond latencies and collocated processing.

## Architectural Foundation: Schema-Driven Design

The core architectural shift in Ignite 3 is that your schema becomes the foundation for data placement, query optimization, and compute job scheduling. Instead of managing separate systems with different data models, you define your schema once and it drives everything.

```java
// Unified platform connection
IgniteClient ignite = IgniteClient.builder()
    .addresses("node1:10800", "node2:10800", "node3:10800")
    .build();
```

Schema definitions use Java annotations to specify colocation strategies, storage profiles, and indexing:

> **Schema Creation**: Ignite 3 supports three approaches for schema creation:
> 
> 1. **SQL DDL** - Traditional `CREATE TABLE` statements
> 2. **Java Annotations API** - POJO markup with `@Table`, `@Column`, etc.
> 3. **Java Builder API** - Programmatic `TableDefinition.builder()` approach
>
> We use the Java Annotations API in this blog for their compile-time type safety and clear colocation syntax.

```java
@Table(zone = @Zone(value = "MusicStore", storageProfiles = "default"))
public class Artist {
    @Id
    private Integer ArtistId;

    @Column(value = "Name", length = 120, nullable = false)
    private String Name;

    // Constructors, getters, setters...
}

@Table(
    zone = @Zone(value = "MusicStore", storageProfiles = "default"),
    colocateBy = @ColumnRef("ArtistId"),
    indexes = @Index(value = "IFK_AlbumArtistId", columns = { 
        @ColumnRef("ArtistId") })
)
public class Album {
    @Id
    private Integer AlbumId;

    @Id
    private Integer ArtistId;

    @Column(value = "Title", length = 160, nullable = false)
    private String Title;

    // Constructors, getters, setters...
}
```

The `colocateBy` annotation ensures that albums are stored on the same nodes as their corresponding artists, eliminating distributed join overhead and enabling local processing.

## Multiple APIs, Single Schema

Ignite 3 provides different API views into the same schema, eliminating impedance mismatch between operational and analytical workloads:

```java
// RecordView for structured operations
RecordView<Artist> artists = ignite.tables()
    .table("Artist")
    .recordView(Artist.class);

// KeyValueView for high-performance access patterns
KeyValueView<Long, Album> albums = ignite.tables()
    .table("Album")
    .keyValueView(Long.class, Album.class);

// SQL for analytics using Apache Calcite engine
SqlStatement analytics = ignite.sql()
    .statementBuilder()
    .query("SELECT a.Name, COUNT(al.AlbumId) as AlbumCount " +
            "FROM Artist a JOIN Album al ON a.ArtistId = al.ArtistId " +
            "GROUP BY a.Name");

// Collocated compute jobs
ComputeJob<String> job = ComputeJob.colocated("Artist", 42,
    RecommendationJob.class);
JobExecution<String> recommendation = ignite.compute()
    .submit(ignite.clusterNodes(), job, "rock");
```

This approach eliminates the typical data serialization and movement overhead between different systems while maintaining type safety and schema evolution capabilities.

> This represents a fundamental architectural shift from Ignite 2.x, which treated everything as key-value operations in a cache. Ignite 3 puts an evolvable schema first and uses memory-centric storage to deliver microsecond latencies for all operations, not just cache hits.

## Memory-First Storage Architecture

Unlike disk-first distributed databases, Ignite 3 uses a memory-first storage model with configurable persistence options:

- **`aimem`**: Pure in-memory storage for maximum performance
- **`aipersist`**: Memory-first with persistence for durability
- **`RocksDB`**: Disk-based storage for write-heavy workloads

The memory-first approach delivers microsecond response times for hot data while providing flexible cost-performance trade-offs through configurable memory-to-disk ratios.

### Storage Engine Characteristics

|Engine|Primary Use Case|Latency Profile|Durability|
|---|---|---|---|
|aimem|Ultra-low latency|Microseconds|Volatile|
|aipersist|Balanced performance|Microseconds (memory)|Persistent|
|RocksDB|Write-heavy workloads|Variable|Persistent|

## Consistency and Concurrency Model

Ignite 3 implements Raft consensus for strong consistency and MVCC (Multi-Version Concurrency Control) for transaction isolation:

- **Raft consensus**: Ensures data consistency across replicas without split-brain scenarios
- **MVCC transactions**: Provides snapshot isolation and deadlock-free concurrency
- **ACID compliance**: Full transactional guarantees across distributed operations

This consistency model applies uniformly across all APIs, whether you're using RecordView operations, SQL queries, or compute jobs.

## Collocated Processing: Compute-to-Data Architecture

One of Ignite 3's key architectural advantages is collocated processing, which brings computation to where data is stored rather than moving data to compute resources:

```java
// Traditional approach: data movement overhead
// 1. Query data from database
// 2. Move data to compute cluster  
// 3. Process data remotely
// 4. Return results

// Ignite 3 approach: compute colocation
ComputeJob<Result> job = ComputeJob.colocated("Customer", customerId,
    RiskAnalysisJob.class);
CompletableFuture<Result> result = ignite.compute()
    .submitAsync(job, parameters);
```

This compute-to-data pattern eliminates network serialization overhead and enables processing of large datasets without data movement. Instead of moving terabytes of data to processing nodes, you move kilobytes of code to where the data lives.

## System Consolidation Benefits

Traditional distributed architectures typically require separate systems for different workloads:

**Traditional Multi-System Architecture:**

- Transactional database (PostgreSQL, MySQL) - millisecond latencies
- Analytics database (ClickHouse, Snowflake) - batch processing
- Caching layer (Redis, Hazelcast) - separate consistency model
- Compute cluster (Spark, Flink) - data movement overhead
- Message queue (Kafka, RabbitMQ) - separate operational model
- Stream processing (Kafka Streams, Pulsar) - additional complexity

**Ignite 3 Unified Platform:**

- Schema-driven storage with multiple storage engines - microsecond latencies
- SQL analytics through Apache Calcite - real-time processing
- Collocated compute processing - zero data movement
- Built-in streaming with flow control - integrated backpressure
- ACID transactions across all operations - single consistency model
- One operational model and consistency guarantee

### Operational Advantages

1. **Unified Schema Evolution**: Schema changes propagate automatically across all access patterns
2. **Single Consistency Model**: ACID guarantees across transactions, analytics, and compute
3. **Reduced Operational Complexity**: One system to monitor, tune, and scale
4. **Eliminated Data Movement**: Processing happens where data lives
5. **Cost-Elastic Scaling**: Adjust memory-to-disk ratios based on performance requirements

## Streaming and Flow Control

Ignite 3 includes built-in streaming capabilities with configurable backpressure mechanisms:

```java
// Publisher with flow control configuration
StreamingOptions options = StreamingOptions.builder()
    .pageSize(1000)
    .autoFlushFrequency(Duration.ofMillis(100))
    .retryLimit(3)
    .build();

// Handle millions of events with automatic backpressure
CompletableFuture<Void> streaming = ignite.sql()
    .streamAsync("INSERT INTO events VALUES (?, ?, ?)", 
                 eventStream, 
                 options);
```

The streaming API provides automatic flow control through configurable page sizes, flush intervals, and retry policies, preventing system overload without data loss.

## Performance Characteristics

Ignite 3's memory-first architecture delivers significantly different performance characteristics compared to disk-based distributed databases:

- **Latency**: Microsecond response times for memory-resident data vs. millisecond latencies for disk-based systems
- **Throughput**: Handles millions of operations per second per node
- **Scalability**: Linear scaling through data partitioning and colocation
- **Consistency**: ACID transactions with minimal overhead due to memory speeds

The 10-1000x performance improvement comes from eliminating disk I/O bottlenecks and data movement overhead through collocated processing.

## Migration and Adoption Strategy

For technical teams considering Ignite 3:

### Assessment Phase

1. **Workload Analysis**: Identify performance-critical paths requiring microsecond latencies
2. **Data Model Mapping**: Design colocation strategies for your entities
3. **Integration Points**: Plan API migration from current multi-system architecture
4. **Performance Benchmarking**: Compare memory-first vs. disk-first performance for your workloads

### Implementation Approach

1. **Start with New Features**: Use Ignite 3 for new development requiring low latency
2. **Gradual Migration**: Move performance-critical workloads first
3. **Schema Design**: Leverage colocation for optimal data locality
4. **Operational Integration**: Integrate monitoring and deployment pipelines

## Technical Considerations

### Schema Design Best Practices

- Use `colocateBy` annotations to ensure related data stays together
- Design partition keys to distribute load evenly across nodes
- Consider query patterns when defining indexes and colocation strategies
- Plan for schema evolution with backward-compatible changes

### Performance Optimization

- Size memory regions appropriately for your working set
- Use collocated compute jobs to minimize data movement
- Leverage appropriate storage engines for different workload patterns
- Monitor memory usage and adjust disk ratios as needed

### Operational Requirements

- Plan for Raft consensus network requirements (low-latency, reliable connectivity)
- Design backup and recovery procedures for persistent storage engines
- Implement monitoring for memory usage, query performance, and compute job execution
- Establish capacity planning procedures for memory-first architecture

## Summary

Apache Ignite 3 represents a schema-driven distributed computing platform that consolidates transaction processing, analytics, and compute workloads into a single memory-first architecture. Key architectural elements include:

- **Schema-driven design**: Single schema definition drives data placement, query optimization, and compute colocation
- **Memory-first storage**: Multiple storage engines with microsecond latency characteristics
- **Collocated processing**: Compute-to-data architecture that eliminates data movement overhead
- **Unified APIs**: Multiple access patterns (RecordView, KeyValueView, SQL, Compute) for the same schema
- **ACID consistency**: Raft consensus and MVCC transactions across all operations
- **Built-in streaming**: Flow control and backpressure mechanisms for high-velocity data ingestion

The platform addresses scenarios where traditional multi-system architectures create operational complexity and performance bottlenecks through data movement between separate databases, compute clusters, and analytics systems.

Explore the [Ignite 3 documentation](/docs/3.1.0/) for detailed implementation guides and API references.