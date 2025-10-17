// this how create a db connection coz you first require mongoose

import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/RestFul"

const connectDB = async () => {
    try {
        await mongoose.connect( mongoDB, {
              
        });

        console.log("database is connected successfully");
    } catch (error ) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// export default conn;
// module.export = connectDB;

export default connectDB;


