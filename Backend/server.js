// require exppress instance
import express from  "express";
// const express = require("express");
import  connectDB from "./config/db.js";
import cors from "cors";
import  routes from "./routes/routes.js";

// favicon
// import favicon from "serve-favicon";

// an  instance of express
 const app = express();

// connection port
 const PORT = process.env.PORT || 4000


// middlewares
app.use(cors());
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/routes/users", routes)
app.use("/routes/customers", routes)

// routes
// import apiRoutes from "./routes/routes.js";

// const routes = require("./routes/routes");
 app.use( "/api", routes);


// database connections string

connectDB();


// listen / start server

app.listen(PORT,()=> {
  console.log(`server is up and runnning on ${PORT}`)
})

