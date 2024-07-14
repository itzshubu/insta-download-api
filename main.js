const express = require('express')
const axios = require('axios');
const cors = require('cors')


const app = express()
const port = 3000

app.use(cors({
  origin:"http://localhost:3000"
}));

app.use('/src',express.static('src'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {

res.render('Index');
})


app.post('/searching', async (req, res) => { 

let url = req.body.text;
const options = {
  method: 'GET',
  url: 'https://instagram-api39.p.rapidapi.com/instagram/',
  params: {
    url: url
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': 'instagram-api39.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  const data = response.data;
  console.log(data)
  res.json(data);

} catch (error) {
  res.send("plese try agane later")
	console.error(error);
}
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})