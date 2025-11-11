const express = require('express');
const mongoose = require('mongoose');
const adminRoute = require('./Route/adminRoute');
const doctorRoute = require('./Route/doctorRoute');
const patientRoute = require('./Route/patientRoute');
const port = 8000;
const app = express();
const cors = require('cors');
const appRoute = require('./Route/appRoute');
const newsRoute = require('./Route/newsRoute');
const feedRoute = require('./Route/feedRoute');


//connect 
mongoose.connect('mongodb://127.0.0.1:27017/healthnexus')
.then(()=>console.log("Mongodb Connected 👍🏻"))
.catch((err)=>console.log(`Error🙄:${err}`));


app.use(express.json());
app.use(cors());
app.use('/api/doctor',doctorRoute);
app.use('/api/admin',adminRoute);
app.use('/api/patient', patientRoute);
app.use('/api/app', appRoute);
app.use('/api/news', newsRoute);

app.use('/api/feed', feedRoute);


app.listen(port,()=>console.log(`Server Running on Port: ${port} 🔥`));