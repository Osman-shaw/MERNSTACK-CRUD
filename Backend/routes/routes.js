import express from "express";
// const express = require("express")
// data acces layer which retrieve information from controllers connecting you to server via routes
// import Router from "express";

const router = express.Router();


import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";

// user routes
router.post('/addUsers',userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)
// customers routes
router.post('/customers', customerController.CreateCustomers);
router.get('/customers',customerController.getAllCustomers);
router.get('/customers/:id',customerController.getCustomersById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customer/:id',customerController.deleteCustomer);


export default router;









