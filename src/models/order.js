const mongoose = require("mongoose");

const cantidadJuegosSchema = mongoose.Schema({
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      
    },
    quantity: {
      type: Number,
      required: true,
    },
    price:{
        type: Number,
        required: true,
    }
  });

const order =  mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        index: true,
    },
    listaJuegos: {
        type: [cantidadJuegosSchema], // Array of cantidadJuegos subdocuments
    },
    date: { 
        type: Date, 
        required: true ,
        index: true,
    }, 
    totalPrice: { 
        type: Number,
        required: true 
    }
});

module.exports={
    Order:mongoose.model('Order', order),
    ListaJuegos:mongoose.model('ListaJuegos', cantidadJuegosSchema)
}
