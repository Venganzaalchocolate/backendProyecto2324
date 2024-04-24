const mongoose = require("mongoose");

const user = mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pass:{
        type: String,
        required: true,
    },
    direction:{
        type: String,
    }
});

module.exports=mongoose.model('User', user)