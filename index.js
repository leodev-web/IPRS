const express = require('express');
const mongoose = require('mongoose');
const AudioLabel = require('./models/audioLabels');


const app = express();

const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * @description fetch Audio labels
 */
app.get('/audioLabels', async (req, res) => {
  const labels = await AudioLabel.find({});
  const response = {
    message: 'labels fetched successfully',
    data: labels
  }
  res.send(response);
})

/**
 * @description Add audiolabels
 */
app.post('/audioLabels', (req, res) => {
  const audioLabel = new AudioLabel(req.body);
  const response = {
    message: "audio label added successfully",
    data: req.body
  }
  audioLabel.save()
    .then(result => {
      res.send(response)
    })
    .catch(err => {
      console.log(err);
    });
});

/**
 * @description Update Audiolabel by phone no
 */
app.put('/audioLabels/:phoneNo', (req, res) => {
  const updateVal = req.body;
  const query = { phoneNo: req.params.phoneNo }
  const options = { returnOriginal: false }
  AudioLabel.findOneAndUpdate(query, updateVal, options, (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result);
    }
  });
})

/**
 * @description Delete  audiolabel
 */
app.delete('/audioLabels/:phoneNo', async (req, res) => {
  const query = { phoneNo: req.params.phoneNo }
  try {
    await AudioLabel.deleteOne(query);
    res.send({ message: 'record deleted successfully' })
  } catch (error) {
    console.log(error)
    res.end();
  }
})

const uri = "mongodb+srv://nodejs-training:<password>@cluster0.zuhej.mongodb.net/iprs?retryWrites=true&w=majority";


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