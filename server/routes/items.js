import express from "express";

const router = express.Router();

router.get("/", getItems);

module.exports = router;