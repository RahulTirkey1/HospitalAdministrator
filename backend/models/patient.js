const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    address1:{
        type:String,
        required:true,
    },
    address2:{
        type:String,
    },
    covid:{
        type:Boolean,
        enum:[true,false],
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Patient", patientSchema);