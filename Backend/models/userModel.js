
// const mongoose = require ("mongoose");
import mongoose from "mongoose";
import {Schema as _Schema} from "mongoose";
const Schema = _Schema;

// user model
const userSchema = new Schema(
    { 
    username: {  
        type: String
     },

    email: {
         type: String, 
          require: true,

         },

    contact: { 
         type: Number,
         require: true,
         },

    age: {
        type: Number,
    }

})

const user = mongoose.model("user", userSchema);

export default user;



