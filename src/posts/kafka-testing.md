---
title: "Kafka testing"
date: 2025-09-25
tags: ["kafka", "synthetic-data"]
---

I've talked with 100s of companies about how they test apps on Kafka. I almost always hear the same thing:  

![](/img/kafka-testing.jpeg)

1. We have lots of services.  

2. It's easy to test one service, but hard to test them all together.  

3. Every team tests their service in a different way.  

4. Production data usually can't be used for tests (PII, network access, not in prod yet)  

5. It's very hard to test future, speculative production traffic.  

⚡ I'm all in favor of testing with production data when you can. But for everything else, simulation testing rules.
