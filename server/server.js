require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Controllers
const thingsCtrl = require('./controllers/thingsCtrl.js')

let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use( express.static( `${__dirname}/../build` ) );


let things = require('./data/things.js');


app.get('/api/things', thingsCtrl.getThings)
app.post('/api/things', thingsCtrl.createThings)
app.delete('/api/things/:id', thingsCtrl.deleteThing)
app.patch('/api/things/:id/:dir', thingsCtrl.changeVote)
app.get('/api/reset', thingsCtrl.resetData)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..','build','index.html'));
})


var port = 4040;
app.listen(port, () => {
    console.log("Listening on port", port)
})