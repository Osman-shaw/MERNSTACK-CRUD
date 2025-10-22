import mongoose from "mongoose";

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