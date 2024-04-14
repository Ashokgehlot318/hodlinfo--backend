const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    last: {
        type: Number,
    },
    buy: {
        type: Number,
    },
    sell: {
        type: Number,
    },
    volume: {
        type: Number,
    },
    base_unit: {
        type:String,
    }  
},{timestamps: true});


module.exports = mongoose.model('Data', dataSchema);

// name: String,
// last: Number,
// buy: Number,
// sell: Number,
// volume: Number,
// base_unit: String,