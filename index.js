const express = require('express');
const mongoose = require('mongoose');


const app = express();

const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const uri = "mongodb+srv://nodejs-training:AIdX3FVYNnlynCe6@cluster0.zuhej.mongodb.net/iprs?retryWrites=true&w=majority";


app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })
  .catch(err => console.log("connection failed", err))