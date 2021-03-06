const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");
const employers = require("./routes/employers");

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/employers", employers);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`.cyan.bold);
});
