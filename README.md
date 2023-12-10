**Prerequisite**

**Knowledge**
    1. Node.JS Intermediate level
    2. Experience with designing distributed systems
**Tools**
    1. Node.js
    2. Docker
    3. VsCode

**Commands**
    1. Start the Zookeeper Container and expose PORT 2181.

    docker run -p 2181:2181 zookeeper

    2. Start Kafka Container, expose PORT 9092, and set up ENV variables.

    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
