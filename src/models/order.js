const mongoose = require("mongoose");

const cantidadJuegosSchema = mongoose.Schema({
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nameGame:{
        type:String,
        required:true
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
    address: {
        type:String,
        required:true
    }, 
    totalPrice: { 
        type: Number,
        required: true 
    },
    state:{
        type: String,
        required: true,
        enum: ['Pagado', 'Preparando', 'Enviado', 'Entregado']
    }
});

module.exports={
    Order:mongoose.model('Order', order),
    ListaJuegos:mongoose.model('ListaJuegos', cantidadJuegosSchema)
}
