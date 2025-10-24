import customer from "../models/customer.js";

//  data access layer
// retrival of information from storage or database models

// create customer into the database
const CreateCustomers = async (req,res)=> {
   
  const { name, password,email }= req.body;
   const  createNewCustomer = new customer({name,password,email});
  try {
      const saveCustomer = await createNewCustomer.save();
      res.json(saveCustomer);

  } catch(error){
      console.log('error creating customers', error)
      res.status(500).json({error: 'internal server error'});
  }
}
//  retrieving all the customers from the database
const getAllCustomers = async (req,res) => {
        // business logic layer
    try {
        const customers = await customer.find();
        res.json(customers)
      } catch (error){
        console.error("Error fetching customers:", error);
        res.status(500).json("internal server error", error)
    }
}

// getting a specific customer
  const getCustomersById = async (req,res)=> {
   try {
       const id = req.params.id;
       const customerExit = await customer.findById(id)
       if(!customerExit){
         res.status(404).json({message:'customer is not found'})
       }
       res.status(200).json({message: 'customer data retrieve succesfully',getCustomersById})
   }catch(error){
    console.error('error fetching a customer', error);
    res.status(500).json({error:'internal server error'})
   }
}

// update a specific customer from the database
const updateCustomer = async (req,res)=> {    
  try {
        const customerId = req.params.customerId;
        const { name, password,email} = req.body;
       const updateCustomer = await customer.findByIdAndUpdate(customerId)
      if(!updateCustomer){
         res.status(404).json({message: 'customer not found'})
      }
      res.status(200).json({message:'update customer succesfully',updateCustomer})

  }catch(error){
    console.error('error updating a customer', error)
    res.status(500).json({error: 'internal server error'})
  }
}

// delete a customer from the database logic

const deleteCustomer = async (req,res) => {
     customerId = req.params.customerId   
  try {
      const deleteCustomer =  await customer.findByIdAndDelete(customerId)
      if(!deleteCustomer){
        res.status(404).json({meaasge:'customer not found'})
      }
      res.status(200).json({meaasge: 'customer deleted successfuly',deleteCustomer})
  } catch(error){
    console.error('error deleteing a customer', error)
    res.status(500).json({error:'internal server error'})
  }
}


export default {
  getAllCustomers,
  CreateCustomers,
  getCustomersById,
  updateCustomer,
  deleteCustomer
};
 