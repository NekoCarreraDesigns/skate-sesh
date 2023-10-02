const express = require("express");
const cors = require("cors");

const PORT = process.env.Port || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
