
import mongoose from "mongoose";


// user model
const userSchema = new mongoose.Schema({ 
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
    },
});


const user = mongoose.model("user", userSchema);

export default user;



