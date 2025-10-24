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
       const id = req.params.id;
       const userExit = await User.findById(id);
       if(!userExit ) {
         return res.status(404).json({ message: 'user not found' });
       }
        res.status(200).json({ message: 'User data retrieve successfully', getUserById })
        // res.json(users);
    } catch (error){
       console.error("error fetching a user:", error);
       res.status(500).json({error: "internal server error"})

    }
  }
  
  // update a user from the database

  const updateUser = async (req ,res) => {

    const userId = req.params.userId;
    const { username, email, contact, age } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(userId, {username, email, contact, age});
        if(!updateUser){
          res.status(404).json({message: "user not found"});
        }
        res.status(200).json({ message:'user updated successfully',updateUser})
    } catch(error){
         console.error('error fetching user')
         res.status(500).json({error: 'internal server error'})
    }
  }

//  delete a user from the database

const deleteUser = async (req,res)=> {
  const userId = req.params.userId;
  try {
    const deleteUser = User.findByIdAndDelete(userId)
    if(!deleteUser){
      res.status(404).json({message:'user cannot be updated'})
    }
    res.status(200).json({message:'user is updated succesfully', updateUser})
  } catch(error){
    console.error('error fetching user');
    res.status(500).json({error:'internal server error'})
  }
}


export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};























