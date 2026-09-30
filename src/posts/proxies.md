---
title: "Proxies"
date: 2026-07-09
tags: ["engineering"]
---

🫣 Confession: only this year did I learn what a reverse proxy is. Oops.

![](/img/proxy.jpg)

A quick primer on forward and reverse proxies.

To start with the obvious, a proxy is a service that sits in the middle of two programs, usually a client and server.

(a) A forward proxy (think Squid and HAProxy) is the one most people are familiar with. With a forward proxy, the client intentionally communicates with another service before ultimately going to the server.

The big use case for that is accessing geo-restricted content, but there are plenty of more ordinary and legal ones too: caching downloads, logging requests, blocking unwanted content.

Now, a reverse proxy (think CloudFront and Nginx) is exactly the opposite.

(b) With a reverse proxy, the server intentionally communicates with another service before ultimately going back to the client. This has the effect of hiding the server's true identity, which is useful for things like load balancing, server-side caching, and SSL termination.

If you're still confused, an easy way to think about it is:

- forward proxy: the client hides its identity from the server
- reverse proxy: the server hides its identity from the client  

- forward proxy: the client probably hosts the proxy
- reverse proxy: the server probably hosts the proxy

- forward proxy: the client knows about it
- reverse proxy: the client doesn't know about it
