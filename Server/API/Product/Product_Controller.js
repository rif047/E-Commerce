let Product = require('./Product_Model');
let multer = require('multer');
let FS = require('fs');


// Multer Setup
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Assets/Images/Products/');
    },
    filename: function (req, file, cb) {
        let getProductName = req.body.name;
        let productName = getProductName + '-' + file.originalname;

        cb(null, productName);
    }
});

let fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb('Only JPG and PNG files are allowed!', false);
    }
    cb(null, true);
};

let uploadImages = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1024 * 1024,
        files: 5
    },
    fileFilter: fileFilter
}).array('images');







let Products = async (req, res) => {
    let Data = await Product.find().populate('category');
    res.status(200).json(Data);
}




let Create = async (req, res) => {
    try {
        let { name, selling, discount_price, stock, description, feature, category } = req.body;

        if (!name) { return res.status(400).send('Product Name is required!'); }
        if (!selling) { return res.status(400).send('Price is required!'); }


        let checkName = await Product.findOne({ name: name.toLowerCase() });
        if (checkName) { return res.status(400).send('Product with this name already exists'); };



        let newData = new Product({
            name: name.toLowerCase(),
            selling,
            discount_price,
            stock: stock ? stock : 999,
            description,
            feature: feature ? feature : 0,
            category,
            images: req.files.map((file) => file.filename)
        });

        await newData.save();
        res.status(200).json(newData);
        console.log('Created Successfully');

    } catch (error) {
        req.files.forEach((file) => {
            FS.unlinkSync('Assets/Images/Products/' + file.filename);
        });
        console.error(error);
        res.status(500).send('Creation Error!!!');
    }
}






let View = async (req, res) => {
    let viewOne = await Product.findById(req.params.id).populate('category');
    res.send(viewOne)
}




let Update = async (req, res) => {
    try {
        let { name, selling, discount_price, stock, description, feature, category } = req.body;


        if (!name) { return res.status(400).send('Product Name is required!'); }

        let checkName = await Product.findOne({ name: name.toLowerCase(), _id: { $ne: req.params.id } });
        if (checkName) { return res.status(400).send('Product with this name already exists'); }


        let updateData = await Product.findById(req.params.id);

        updateData.name = name.toLowerCase();
        updateData.selling = selling;
        updateData.discount_price = discount_price;
        updateData.stock = stock;
        updateData.description = description;
        updateData.feature = feature;
        updateData.category = category;
        updateData.images = req.files.map((file) => file.filename);

        await updateData.save();
        res.status(200).json(updateData);
        console.log('Updated Successfully');

    } catch (error) {
        console.error(error);
        res.status(500).send('Updating Error!!!');
    }
}





let Delete = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.res.status(200).send('Deleted')
}




module.exports = { Products, Create, View, Update, Delete, uploadImages }