const billsModel = require("../models/billsModel");


//get items
const addBillsController = async (req, res) => {
    try {
        const newBill = new billsModel(req.body);
        await newBill.save();
        res.status(201).send("Bill Created Successfully!");
      } catch (error) {
        res.send('Something went wrong');
        console.log(error);
      }
  };


  //get bills data
  const getBillsController = async (req, res) => {
    try {
      const bills = await billsModel.find();
      res.send(bills);
    } catch (error) {
      console.log(error);
    }
  };

  
module.exports = { addBillsController, getBillsController };
