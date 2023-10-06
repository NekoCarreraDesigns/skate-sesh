const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const db = require("./db/connection");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/page"));

app.listen(PORT, () => {
  db.connectToServer(function (err, res) {
    if (err) {
      res.status(500).send({ message: "internal server error" });
    } else {
      db.setUpSession(app);
    }
  });
  console.log(`Server is listening on ${PORT}`);
});
