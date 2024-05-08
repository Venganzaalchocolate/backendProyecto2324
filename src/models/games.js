const mongoose = require("mongoose");


const games = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        index: true,
        unique: true
    }, 
    category: { 
        type: String,
        required: true,
        enum: ['Adventure', 'Strategy', 'Card', 'Family', 'Eurogame', 'Party'],
    },
    author: { 
        type: String, 
        required: true 
    },
    publisher: { 
        type: String, 
        required: true 
    }, 
    numberOfPlayers: { 
        type: Number,
        required: true 
    }, 
    recommendedAge:  { 
        type: Number,
        required: true 
    },  
    duration: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type:Number,
        default:0
    }
});

module.exports=mongoose.model('Games', games)