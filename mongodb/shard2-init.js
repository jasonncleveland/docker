rs.initiate(
  {
    "_id": "shard2rs",
    "members": [
      { "_id" : 0, "host" : "shard2s1:27018" },
      { "_id" : 1, "host" : "shard2s2:27018" },
      { "_id" : 2, "host" : "shard2s3:27018" }
    ]
  }
);
