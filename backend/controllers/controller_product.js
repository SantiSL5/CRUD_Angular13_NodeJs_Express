const Product = require('../models/product');
const slugf = require('slug');

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

function slugeo(cosa) {
    return slugf(cosa) + '-' + (Math.random() * Math.pow(36, 6) | 0);
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ "slug": req.params.slug });

        if (!product) {
            res.status(404).json({ msg: "No existe el producto" });
        } else {
            req.body.slug = slugeo(req.body.name);

            const newProduct = await Product.findOneAndUpdate({ "slug": req.params.slug }, req.body, { new: true });
            res.json(newProduct);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ "slug": req.params.slug });

        if (!product) {
            res.status(404).json({ msg: "No existe el producto" });
        } else {
            await Product.findOneAndRemove({ "slug": req.params.slug });
            res.json({ msg: "Producto " + '"' + product.name + '"' + " eliminado con éxito" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}