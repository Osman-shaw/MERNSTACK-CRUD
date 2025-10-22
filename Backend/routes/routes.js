import express from "express";
// const express = require("express")
// data acces layer which retrieve information from controllers connecting you to server via routes
// import Router from "express";

const router = express.Router();


import userController from "../controllers/userController.js";
import customerController from "../controllers/customerController.js";


router.post('/addUsers', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/customers', customerController.getAllCustomers);


export default router;









