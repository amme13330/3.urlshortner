//-----------Importing all the pakages in this module-------------//
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const route = require('./routes/route.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//----We are connecting to MongoDb database using mongoose-------------// To store our data------//
 mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/<Akash_kumar_sah_Db>?retryWrites=true&w=majority", { useNewUrlParser: true })
     .then(() => console.log('mongodb running and connected'))
   .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});