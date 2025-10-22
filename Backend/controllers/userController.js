import User from "../models/User.js";
// create user post to the database
   const createUser = async (req, res) => {
     const { username, email, contact, age } = req.body;
      const newUser = new User({ username, email, contact, age });

   try {
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

// get all the users from the database

const getAllUsers = async (req , res) => {
  try {
      const users = await User.find();
      res.json(users)
  } catch(error) {
     console.log("error fetching users :", error)
      res.status(500).json({ error: "internal server error"})
  }

 }
  // get a specific user

  const getUserById = async (req,res) =>{
    try {
       const users= User.find(u => u.id === parseInt(req.params.id));
        res.json(users);
    } catch (error){
       console.log("error fetching a user:", error);
       res.status(500).json({error: "internal server error"})

    }
  }
  





export default {createUser,getAllUsers,getUserById};























