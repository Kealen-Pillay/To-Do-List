const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const CONNECTION_URL =
  "mongodb+srv://test:test@to-do-app.ygzzapa.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8082;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
