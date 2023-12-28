const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");

//config
dotenv.config();
connectDb();

//function seeder
const importData = async () => {
    try {
        console.log("Deleting existing items...");
        await itemModel.deleteMany();
        console.log("Inserting new items...");
        const itemsData = await itemModel.insertMany(items);
        console.log(`${itemsData.length} items added`);
        console.log("All Items Added");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
