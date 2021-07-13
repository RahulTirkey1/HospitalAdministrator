const express=require('express');
const mongoose = require("mongoose");
const app = express();
const cors=require('cors');
app.use(cors());
mongoose.connect('mongodb://localhost:27017/digiledge', {useNewUrlParser: true}).then(() => console.log("db connected"));

const adminRoutes=require('./routes/adminRoute');
const patientRoutes=require('./routes/patientRoute');

app.use(express.json());

app.use("/api/patient",patientRoutes);
app.use("/api/admin",adminRoutes);

app.listen(8000, () => {
    console.log("connected to server");
});