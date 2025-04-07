const express = require('express');
const app = express()
const cors = require('cors');
const port = 3001

app.use(cors()); 
app.use(express.json());

var data = [];

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    data.push(formData);
    console.log(formData); 
    res.status(200).send('Form data received');
  });

  
app.get("/data", (req, res) => {
    res.send(data)
})

app.post('/', (req, res) => {
    console.log(req.form)
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
