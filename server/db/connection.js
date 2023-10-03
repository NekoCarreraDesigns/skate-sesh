// dependencies and imports
const { MongoClient } = require("mongodb");
// variables
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
// exports  for db connection
module.exports = {
  connectToServer: async function () {
    try {
      await client.connect();
      _db = client.db("SkateSesh0");
      console.log("Successfully connected to mongoDB!");
    } catch (error) {
      console.error("Cannot connect to MongoDB", error);
    }
  },

  getDb: function () {
    return _db;
  },
};
