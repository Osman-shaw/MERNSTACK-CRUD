
// const express = require("express")
// data acces layer which retrieve information from controllers connecting you to server via routes
import {Router} from "express";

const router = Router();


import get_all_users    from "../controllers/userController.js";
import getAllCustomers from "../controllers/customerController.js";


router.get("/users", get_all_users)
router.get("/customers",getAllCustomers)


// module.export = router;
export default router;







// // to use router method to create routes

// import { Router } from "express"
// const router = Router();

// router.get("/customer", (req,res)=>{
//     res.send("man power for the development");
// })

// router.post("",(req,res) => {
//     req.json();
// })





// // one way to make a get request
// app.get("/customer", (req,res) => {
//     res.send(" I have beem creating a route for customer")

// })

// Router.get()