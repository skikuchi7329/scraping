const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "https://ana-slo.com/2024-02-11-%e3%83%9e%e3%83%ab%e3%83%8f%e3%83%b3%e9%98%bf%e8%a6%8b%e5%ba%97-data/";

axios(URL)
.then((response) => {
  const htmlParser = response.data;
  console.log(htmlParser)
})





app.listen(PORT, console.log("server running"));