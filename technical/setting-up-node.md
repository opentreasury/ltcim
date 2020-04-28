---
description: So what are nodes
---

# Setting up node

## Nodes

What are nodes ?

Blockchain nodes are responsible for acting as a communication point that may perform different functions.

We use bitcore open source API.

## Bitcore 

We are using the fork of the bitcore services, it combines bitcore node exposes node functionality to REST API which can be securely queried over the REST network and can submit transaction also. 

You might need to need to know how does blockchain works.

Understanding and using bitcore nodes.

First part is to understand what is bitcore node, nodes are connected via p2p messaging protocol. 

Read p2p protocol for better understanding.

Every node has a its own set of command which performs like 

`ping, getblocks`

Why we need to interact with them ,so imaging a situation:

1. User A sends a transction ,to User B, typicaly it is recorded by the blockchain database.
2. We are indexing all of the block information which contains transaction level data.
3. To be able to qeuery quickly later we index them and stores them

So in nutshell, bitcore-node stores and let us query the indexed DB over mongo.

That is why, mongo is used.

Setting up regtest nodes to see how it work.

