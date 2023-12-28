const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true  // <-- Change 'requires' to 'required'
    },
    userId : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    verified : {
        type : Boolean,
    }
},
{timestamps : true}  // <-- Change 'timestamp' to 'timestamps'
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
