const Mongoose = require('mongoose');


let current = new Date();
let timeStamp = current.setHours(current.getHours() + 6);



const ProductSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    selling: {
        type: Number,
        required: true
    },
    discount_price: {
        type: Number
    },
    stock: {
        type: Number
    },
    description: {
        type: String
    },
    feature: {
        type: Number
    },
    images: {
        type: [String]
    },
    category: {
        type: Mongoose.Types.ObjectId,
        ref: 'Product_Category'
    },
    createdOn: {
        type: Date,
        default: timeStamp
    },
})

let Product = Mongoose.model('Product', ProductSchema)

module.exports = Product;