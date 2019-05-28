const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    Image:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    Gender:String,
    Cost:{
        type: Number,
        required: true
    },
    Discount:Number,
    Amount:{
        type: Number,
        required: true
    },
    Describe: String,
    Product_Group: String
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
