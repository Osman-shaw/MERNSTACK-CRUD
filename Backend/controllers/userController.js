import user from "../models/userModel.js";
// create user post response
   const createUser = async (req, res) => {
     const { username, email, contact, age } = req.body;
      const newUser = new User({ username, email, contact, age });

   try {
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error'});
    }
  }


export default {createUser};























