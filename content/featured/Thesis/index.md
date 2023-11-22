---
date: '5'
title: 'Chaos Engineering in the Cloud "Published in IEEE (CSCI2022)"'
cover: 'Chaos.JPG'
github: 'https://github.com/madhavijaival/Chaos_in_cloud'
external: 'https://ieeexplore.ieee.org/document/10216673'
tech:
  - Node.js
  - AWS DynamoDB
  - AWS S3 bucket
  - AWS Lambda
  - Bastion Host
  - hey tool
  - Serverless artillery
showInProjects: true
---

Chaos Engineers have studied security and resiliency in cloud infrastructure and hosted applications. In this thesis, I combined these approaches to measure the performance of a set of serverless cloud functions that implement common server-side file and database operations. I studied each function's performance response under a set of controlled chaos experiments, wherein emulated various client load conditions, as well as injected random delays into the function execution. I found that under a heavy 1000-client load, even the longest-latency operations can provide as much as 36.5% improvement to response time by failing early.
This research paper has been published in IEEE (2022 International Conference on Computational Science and Computational Intelligence (CSCI)).
