const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

//connectdb
const connectDb = require('./config/config')

//dotenv config
dotenv.config()

//db config
connectDb();

//rest objects
const app = express();
 
//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(morgan('dev'))


//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require('./routes/billsRoute'));

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//post
const PORT = process.env.PORT || 8080 

//listen
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})

