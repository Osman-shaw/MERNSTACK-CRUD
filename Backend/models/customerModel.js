import mongoose from "mongoose";
import {Schema as _Schema} from "mongoose";

// data acces layer which handles database storage
// customer model
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String
    },
    email: {
        type: String,
        require: true,
    }
})

const customer  = mongoose.model("customer", customerSchema);

export default customer;