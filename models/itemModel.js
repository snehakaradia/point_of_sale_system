const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name : {
        type : String,
        required : true  // <-- Change 'requires' to 'required'
    },
    price : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},
{timestamps : true}  // <-- Change 'timestamp' to 'timestamps'
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
