require('dotenv').config()
const express = require('express')

const app = express();
const port = 6000;

app.get('/', (req, res) => {
  res.send("Hello world with backend")
})
app.get('/linkedin', ((req, res) => {
  res.send('<h1>Follow me on LinkedIn</h1>');
}))

app.get('/mypic', ((req, res) => {
  res.send('<img src="/project-1/degree-convocation-pic.png" />')
}))
app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port}`);
})