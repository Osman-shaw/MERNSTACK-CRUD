import express from "express";
// const express = require("express")
// data acces layer which retrieve information from controllers connecting you to server via routes
// import Router from "express";

const router = express.Router();


import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";


router.post('/users', userController.createUser);
router.get('/customers', customerController.getAllCustomers);


export default router;









