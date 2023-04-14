const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: String,
    img: String,
    price: Number,
    quentity: Number,
    size: String,
    user: String
},
    {
        versionKey: false
    })

const cartModel = mongoose.model('carts', cartSchema)

module.exports = {
    cartModel
}