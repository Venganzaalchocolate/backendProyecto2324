const mongoose = require("mongoose");


const order = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    }, 
    gameId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: { 
        type: Date, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    }, 
    totalPrice: { 
        type: Number,
        required: true 
    }
});

module.exports=mongoose.model('Order', games)