const db = require('../../Modal')
const product = db.product
const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId;
 

class ShellerProduct {
    async AddProduct(req, res) {
        try {
            console.log(req.body);
            const { category, description, price, image, productName, shellerId } = req.body;
    
            // Validate required fields
            if (!shellerId) {
                return res.status(400).send({ status: false, message: "Seller ID is required", data: [] });
            }
    
            // Create a new product
            const newProduct = new product({
                category: category,
                image: image,
                description: description,
                price: price,
                shellerId:  shellerId,
                name: productName
            });
    
            // Save the product to the database
            await newProduct.save();
            console.log("Product added successfully");
    
            return res.status(201).send({ status: true, message: "Product added successfully", data: [] });
        } catch (err) {
            console.error("Error adding product:", err);
            return res.status(500).send({ status: false, message: "Internal Server Error", data: [] });
        }
    }

}

module.exports = new ShellerProduct()