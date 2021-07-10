const mongoose = require('mongoose');

const refrescosSchema = new mongoose.Schema({

    codigo:{
        type: String
          },

    nombre:{
        type: String,
        required:true
    },
    precio:{
        type: Number,
        required:true
    },
    fecha:{
        type: Number,
        default:Date.now
    },
    descripcion:{
        type: String
    }
})

const refrescos = mongoose.model('refrescos', refrescosSchema);

module.exports = refrescos;