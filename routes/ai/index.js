const express = require("express");
const openai = require("../middlewares/openai");
const {
  initMiddleware,
  creditCheck,
  contentFilterCheck,
  sendResponse,
  creditPayment,
  saveToHistory,
} = require("./middleware");

let app = express.Router();

app.use("/", initMiddleware, creditCheck);

app.use("/", require("./summarize"));

app.use("/", require("./code/interpret"));
app.use("/", require("./writing/intro"));
app.use("/", require("./jobad"));

app.use("/", require("./jamaicaAi"));
app.use("/", require("./patoisTranslator"));

app.use("/", require("./airbnb"));
app.use("/", require("./law/legalStructure.js"));
app.use("/", contentFilterCheck);
app.use("/", creditPayment);
app.use("/", saveToHistory);

app.use("/", sendResponse);

module.exports = app;
