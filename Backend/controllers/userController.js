import user from "../models/userModel.js";

// creating a get request tolist all the sysytem users
 const  get_all_users = async (req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default get_all_users;


// const get_all_users =(req,res)=> {
//     try {
//         const users = user.find();
//         if(users.length > 0) {
//             res.json(ers);
//         } catch (error) {
//             console.error("Error fetching users:",error);
//             res.status(500).json({error:"internal sever error"})
//         }
//     }
// }


















