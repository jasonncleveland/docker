rs.initiate(
  {
    "_id": "shard1rs",
    "members": [
      { "_id" : 0, "host" : "shard1s1:27018" },
      { "_id" : 1, "host" : "shard1s2:27018" },
      { "_id" : 2, "host" : "shard1s3:27018" }
    ]
  }
);
