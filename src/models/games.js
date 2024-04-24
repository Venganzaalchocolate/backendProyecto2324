const mongoose = require("mongoose");


const games = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
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
        required: true },
    description: { 
        type: String, 
        required: true },
    image: { 
        type: String, 
        },
});

module.exports=mongoose.model('Games', games)