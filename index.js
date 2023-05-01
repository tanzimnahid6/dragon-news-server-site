const express = require("express");
const app = express();
const cors = require("cors");
const port =process.env.PORT || 3000;

const categories = require("./category.json");
const news = require("./news.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/category", (req, res) => {
  res.send(categories);
});


app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id == id);
    res.send(categoryNews);
  }
});


app.get("/news", (req, res) => {
  res.send(news);
});


app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);

  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
