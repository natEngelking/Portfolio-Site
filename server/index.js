const express = require('express')
const app = express();
const port = 3003;

app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => {
  console.log(`Jammin on ${port}`)
})