rs.initiate(
  {
    "_id": "cfgrs",
    "configsvr": true,
    "members": [
      { "_id" : 0, "host" : "configs1:27019" },
      { "_id" : 1, "host" : "configs2:27019" },
      { "_id" : 2, "host" : "configs3:27019" }
    ]
  }
);
