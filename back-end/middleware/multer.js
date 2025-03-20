const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req,file,cb) => {
        cb(null,Date.now()+path.extname(file.originalname));
    } ,
});

const fileFilter = (req,file,cb) =>{
    const allowedTypes = /jpg|jpeg|png/;
    if(allowedTypes.test(path.extname(file.originalname).toLowerCase()) && allowedTypes.test(file.mimetype)){
        cb(null,true);
    } else {
        cb(new error('please upload in jpg/jpeg/png format'),false);
    }
};

const upload = multer({
    storage,
    limits : {fileSize : 5 * 1024 * 1024},
    fileFilter,
})

module.exports = upload;