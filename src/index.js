const express = require("express")
const mongoose = require("mongoose")
const route = require('../src/route/route');
const app = express()
require("dotenv").config()


const cors = require('cors')



app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://yashsingh:8i1kfhU26wUDrXft@cluster0.e53dru9.mongodb.net/insta",
{ useNewUrlParser: true })
.then(() => console.log("MongoDB is connected"))
.catch((error) => console.log(error))


app.use(cors())

app.use('/', (req,res)=>{
	res.json(
		{messege:"ckjasnckjskc"}
	)

	
});




app.listen(process.env.PORT || 3001, function () {
	console.log('Express app running on port ' + (process.env.MONGODB_URL || 3001))})