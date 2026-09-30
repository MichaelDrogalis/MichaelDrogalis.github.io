---
title: "ULIDs"
date: 2025-11-18
tags: ["data-structures"]
---

If you use UUIDs (who doesn't?), consider swapping them out for ULIDs. They're sortable!  

Like UUIDs, ULIDs are made of 128 bits.  

But instead of randomizing ALL the bits, ULIDs encode a timestamp in the first 48. The last 80 are completely randomized.  

This is easier to see with an example.  

The ULID 01HX2AY3TN3M5ZFA5TG2WZJZ6G can be broken down into its two parts:  

![](/img/ulid.jpeg)

(a) 01HX2AY3TN, 10 characters that represent time  

(b) 3M5ZFA5TG2WZJZ6G, 16 base32 characters that represent a random value  

Now, when you want to compare two ULIDs, you decode the first 48 bits back into a timestamp and know which was generated first.  

Almost every major language now has library support for them.  

(But as usual, you can't reliably compare timestamps across machines in a distributed system, so there's no cure there. :)
