---
title: "HTTP versions"
date: 2026-08-14
---

😰 Ran into a nasty bug a few months ago because I didn't understand HTTP 1 vs. 2 vs. 3. Learn from my pain.

![](/img/http-versions.jpg)

When a client and server want to talk to each other, they first negotiate the language they'll use to communicate. That language is HTTP, and it's evolved over the years (hence the versions).

- HTTP 1 was fully-text based with carriage returns separating the different parts like the user agent and body. It spins up a new TCP connection for every request/response cycle, so it was pretty inefficient to handshake on every roundtrip.

- HTTP 1.1 fixed the inefficiency so that TCP connections could be kept alive for multiple HTTP roundtrips. A little better!

- HTTP 2 switched its protocol from text to binary—yay efficiency—and added support for server-side push events—yay streaming. It's all still built on TCP though, which means that one slow packet can hold up all the others (aka the head of line blocking problem)

- HTTP 3 switched from TCP to UDP, which solves head of line blocking. It's also built on a Google protocol called QUIC, which conveniently builds in efficient encryption and multiplexing.

There's obviously a lot more to HTTP, but that's as much as I needed to know to debug my problem. 😅
