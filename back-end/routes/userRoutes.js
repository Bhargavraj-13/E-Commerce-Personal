const express = require('express');
const upload  = require('../back-end/middleware/multer');
const router = express.Router();

router.post('/upload',upload.symbol("file"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({message : "No file uploaded"});
    } 
    res.status(201).json({message : "uploaded Image succussfully", filePath : req.file.path});
});

module.exports = router;