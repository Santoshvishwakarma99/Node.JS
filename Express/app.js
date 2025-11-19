const express = require("express")


const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())
app.use(express.static(__dirname+"/public"))
var student = [
    {
        "id": 1,
        "name": "santosh"
    },

    {
        "id": 2,
        "name": "vivek"
    },
     {
        "id": 3,
        "name": "vraj"
    }

]



const middleware=((req,res,next)=>{
    if(req.query.age>=18)
    {
        next()
    }
})
app.get("/", (req, res) => {
    // res.send("Home page")
    res.render("home", { student })
})



app.get("/contact",middleware,(req,res)=>{
    res.render("contact")
})

app.get("/index",middleware,(req,res)=>{
    res.render("index")
})

app.post("/insertData",(req,res)=>{
    const {id,name}=req.body
    const obj={
        id,name
    }
    student.push(obj)

    res.redirect("/")
})




app.get("/", (req, res) => {
    res.render("index")
})



// app.post("/insertData", (req, res) => {
//     const { id, name } = req.body
//     const obj = {
//         id, name
//     }
//     student.push(obj)

//     res.redirect("/")

// })

// app.get("/delete", (req, res) => {
//     const id = req.query.id
//     const ans = student.filter((el, i) => {
//         return el.id !== id
//     })
//     student = ans
//     res.redirect("/")
// })

// app.get("/edit", (req, res) => {
//     const id = req.query.id
//     const ans = student.filter((el, i) => {
//         return el.id == id
//     })
//     res.render("edit", { editData: ans[0] })
// })

// app.post("/editData", (req, res) => {
//     const { id, name } = req.body
//     student.forEach(el => {
//         if (el.id == id) {
//             el.name = name
//         }
//     })

//     res.redirect("/")
// })

app.use(middleware)

app.listen(5000, () => {
    console.log("server listen")
})