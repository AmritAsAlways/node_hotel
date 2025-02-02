const mongoose=require('mongoose');

const menu= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum:['sweet','spicy','sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_Sales:{
        type: Number,
        default: 0,
    }
})

const MenuItems=mongoose.model('MenuItem',menu)
module.exports = MenuItems;