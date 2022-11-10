const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");

const items = require("../routes/api/items");

const app = express();
const port = process.env.PORT || 8082;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/api/items", items);
