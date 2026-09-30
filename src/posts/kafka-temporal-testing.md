---
title: "Kafka temporal testing"
date: 2026-08-27
tags: ["kafka", "synthetic-data"]
---

😬 Most engineers who build on Kafka skip the most important kind of testing: temporal testing.  

![](/img/kafka-temporal-testing.jpeg)

What do I mean by that?  

When you test an app that uses a relational database, it usually doesn't matter when your data arrives. You just shove a bunch of data in your tables and kick off your suite.  

But testing streaming architectures, by contrast, requires that data show up at particular times. Let me make this concrete with four examples.  

(1) 🤞 Relational streams: you have two or more streams that share data. A classic example are customers and orders. The orders stream events probably have a customer ID that's derived from the customers topic. But here's the catch: any customer IDs you use in the orders topic have to already be committed to the customers topic. Otherwise your tests will break.  

(2) 🗓️ Sequenced streams: you have a stream where the order of events matters. Imagine a shopping cart stream. In order for your app to make sense of your data, each user must first log in before adding and removing some items, and finally checking out. Any other sequence will choke your app.  

(3) 🍴 Forked streams: you have a stream that models how a set of things change over time, and each thing changes at a different rate. CDC events are a relatable example. You want to model how each row in a table is inserted, updated, and maybe deleted, where each row changes at a different rate from the others.  

(4) 💥 Chaotic streams: events are arbitrarily dropped, delayed, and duplicated. This happens all the time with lossy producers like mobile devices, yet almost no one tests them.  

I get so much joy out of building ShadowTraffic because I worked hard to identify these patterns and make an easy API for simulating them. 🙂