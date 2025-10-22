// require exppress instance
import express from  "express";
// const express = require("express");
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import cors from "cors";
import routes from "./routes/routes.js";

// an  instance of express
  const app = express();

// connection port
 const PORT = process.env.PORT || 4000
 const mongoDB = process.env.mongoDB 


// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// routes
 app.use( "/api", routes);


// database connections string
connectDB();


// listen / start server

app.listen(PORT,()=> {
  console.log(`server is up and runnning on ${PORT}`)
})

