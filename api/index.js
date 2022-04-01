const express = require('express');
const app = express();
const connection = require('./config/database');
const postRoutes = require('./src/routes/post.route');
const PORT = process.env.PORT || 8000;
const cors = require('cors');

connection()
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/api', postRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})