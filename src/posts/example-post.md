---
title: Diffie-Hellman
date: 2026-06-19
tags: algorithms
---

The most beautiful algorithm in computer science.

![](/img/diffie-hellman.jpeg)

If you don't recognize it, this is Diffie-Hellman.

Diffie-Hellman is an algorithm that lets two parties establish a secret over an insecure network.

This is useful when:
- encrypted messaging apps need to agree on a session key
- web servers need to exchange encryption data for browsers
- VPNs need to do the same between client/server

The math behind it is surprisingly simple:

1. Two parties, Alice and Bob, agree on a large prime p and a base g (both public)
2. Alice picks a secret a, computes `A = g^a mod p`, and sends `A` to Bob
3. Bob picks a secret b, computes `B = g^b mod p`, and sends `B` to Alice

Then:

4. Alice computes `s = B^a mod p`
5. Bob computes `s = A^b mod p`

When that is done, both get the same `s` (the shared secret), because: `g^(a * b) mod p = g^(b * a) mod p`

This works because it relies on one-way mathematical functions—easy to compute in one direction, but hard to reverse in the other.

Put differently, if an attacker sees `g`, `p`, `A`, and `B`, it still can't compute `s` when `p` is a large enough prime.

I remember learning about this in school with the analogy of mixing paints and it completely blew my mind.
