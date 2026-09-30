---
title: "Kafka batching"
date: 2026-09-11
tags: ["kafka"]
---

Kafka has a reputation for being scary to configure. But if you want to write data quickly, you mainly need to understand just 2 little parameters.

![](/img/kafka-batching.png)

First of all, what makes writing to Kafka faster or slower? Each time a producer sends data to the broker, it does a network roundtrip. That presents a problem because network calls are among the most expensive operations you can do.

The solution is to *batch* and send many records in each network call. Which leaves the question: how big should each batch be before you send?

Kafka producers have two parameters to control that:

- 𝐛𝐚𝐭𝐜𝐡 𝐛𝐲 𝐭𝐢𝐦𝐞: `linger .ms` tells the producer to wait n milliseconds have elapsed
- 𝐛𝐚𝐭𝐜𝐡 𝐛𝐲 𝐬𝐢𝐳𝐞: `batch.size` tells the producer to wait until m bytes are accumulated

The first condition to become true triggers a network call.

Two rules of thumb:

1. Lower batching values yield better latency (your data spends less time waiting to make its way to the broker)
2. Higher batching values yield better throughput (more data gets written on average over a period of time)

Keep in mind that to make Kafka fast, you also need your broker to be in good shape. Things like replication factor and partition count matter just as much.
