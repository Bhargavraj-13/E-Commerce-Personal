const express = require('express')
const upload = require('../middleware/multer')
const router = express.Router();
const {loginUser, signUp} = require('../controllers/userController')

router.post('/upload', upload.single("file"), (req, res) => {
    if(!req.file){
        return res.status(400).json({message : "No file uploaded!"})
    }
    res.status(201).json({message : "File uploaded successfully", filePath : req.file.path})
})

router.post('/signup', signUp)

router.post('/login', loginUser)

module.exports = router

