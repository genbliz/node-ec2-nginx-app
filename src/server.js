const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello World: EC2 Quote API");
});

app.get("/quote", async (req, res) => {
  const response = await fetch("https://api.quotable.io/quotes/random");

  const result = await response.json();

  res.status(200).send({
    quote: result?.[0]?.content,
    author: result?.[0]?.author,
    timestamp: new Date().toISOString(),
  });
});

app.get((req, res, next) => {
  res.status(404).send("Api not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
