
const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const slugf = require('slug');

exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.send(category);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

function slugeo(cosa) {
    return slugf(cosa) + '-' + (Math.random() * Math.pow(36, 6) | 0);
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ "slug": req.params.slug });

        if (!category) {
            res.status(404).json({ msg: "No existe la categoria" });
        } else {
            req.body.slug = slugeo(req.body.name);

            const newCategory = await Category.findOneAndUpdate({ "slug": req.params.slug }, req.body, { new: true });
            res.json(newCategory);
        }
    } catch (error) {
        console.log(req);
        res.status(500).send("Hubo un error");
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ "slug": req.params.slug });

        if (!category) {
            res.status(404).json({ msg: "No existe la categoria" });
        } else {
            await Category.findOneAndRemove({ "slug": req.params.slug });
            res.json({ msg: "Producto " + "'" + category.name + "'" + " eliminado con éxito" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

