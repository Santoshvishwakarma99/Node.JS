const express = require("express")
const db = require("./config/db")
const multer = require('multer')
const path = require('path')
const app = express()

const user = require('./model/usermodel')
    
app.use(express.json())
app.use(express.urlencoded(({ extended: true })))

app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.set('view engine', 'ejs')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

const ImageUpload = multer({ storage: storage }).single('image')


app.post('/insertData', ImageUpload, async (req, res) => {
    const { username, password } = req.body
    let image = ""
    if (req.file) {
        image = req.file.path
    }
    await user.create({
        username: username,
        password: password,
        image: image
    }).then((data) => {
        console.log(data)
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/', async (req, res) => {
   await user.find({}).then((data)=>{
    res.render("home",{data})
   }).catch((err)=>{
    console.log(err)
   })
})



app.listen(3180, () => {
    console.log("server listen")
})