---
title: "AWS APIs"
date: 2026-05-27
tags: ["aws"]
---

Did you know that AWS publishes COMPLETE API specs for all of their services using public JSON files?

![](/img/aws-apis.png)

I had always wondered how AWS keeps all its clients up-to-date across Java, Kotlin, Rust, etc.

After a little digging in the aws-sdk-java-v2 repo, I found the answer.

It turns out that each service's interface is specified using a tool called Smithy—their internal modeling framework.

Textually, Smithy looks a bit like a JSON schema—hence the JSON files that I found.

But more than just expressing schemas, Smithy can also:
- generate clients
- stub out server endpoints
- spin up documentation

Which explains how all the clients are mostly kept in sync.

Pretty cool that AWS made Smithy open source, too!
