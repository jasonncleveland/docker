This project contains useful docker and docker compose files.

## MongoDB

Cluster created following guide https://phoenixnap.com/kb/mongodb-sharding

The mongodb cluster consists of 2 shards, with 1 primary and 2 secondary nodes for each shard.

### How to run

The docker compose is set up so that the containers will build once their dependencies are ready.
To start the cluster, run `docker-compose -f mongodb/docker-compose.yml up -d`

### How to connect

The cluster is configured to be exposed on the default mongodb port 27017 and can be connected using the mongo shell:
```
> mongosh mongodb://localhost:27017
```

## Redis

Cluster created following guide https://pierreabreu.medium.com/building-redis-cluster-with-docker-compose-9569ddb6414a

The redis cluster consists of 6 nodes, 3 master nodes and 3 replica nodes, one for each master.

### How to run

The docker compose is set up so that the containers will build once their dependencies are ready.
To start the cluster, run `docker-compose -f redis/docker-compose.yml up -d`

### How to connect

Each redis node has a separate exposed port. To connect to a node, specify the port when using the redis cli:
```
> redis-cli -h localhost -p 6381
> redis-cli -h localhost -p 6382
> redis-cli -h localhost -p 6383
> redis-cli -h localhost -p 6384
> redis-cli -h localhost -p 6385
> redis-cli -h localhost -p 6386
```
