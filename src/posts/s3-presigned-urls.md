---
title: "S3 presigned URLs"
date: 2026-02-20
tags: ["s3"]
---

This week I learned that S3 has a feature that lets you download an object from a private bucket without needing credentials.  

![](/img/s3-presigned-urls.jpeg)

Meet the S3 pre-signed URL.  

Added back in ~2010, pre-signed URLs let you grant limited-time access to an object in a private bucket. All you need is the URL—no AWS secrets, IAM roles, or anything like that.  

Now, why would you ever want this?  

Imagine you have a bucket of PDFs. You want authorized users to be able to download specific files, but don't want to pay the double transfer cost of downloading the object from your bucket→server followed by server→client.  

How it works is pretty simple.  

You—a trust, authenticated user—use the S3 API to generate a presigned URL. The signature includes permissions, an expiration time, and cryptographic proof that the request is authorized by you. Then anyone with the URL can download the object until it expires.  

And this doesn't only work with downloads. Presigned URLs also support object upload/deletes/etc, too.  

It's a pretty blunt instrument though:  

- you can’t limit the number of downloads  
- if the URL leaks, anyone who has it now has access  
- once the URL is generated, you can’t revoke it  

But for a handful of use cases, it's an awesome tool for the job.
