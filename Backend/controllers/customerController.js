import customer from "../models/customerModel.js";

//  data access layer
// retrival of information from storage or database models

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

export default {getAllCustomers};
 