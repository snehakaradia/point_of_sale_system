const express = require("express");
const {
  getItemController, addItemController, editItemContoller, deleteItemController
} = require("./../controllers/itemController");

const router = express.Router();

//routes
//Method - get
router.get("/get-item", getItemController);

//method-post
router.post("/add-item", addItemController);

//method-put
router.put("/edit-item", editItemContoller)

//method-delete
router.post("/delete-item", deleteItemController)


module.exports = router;