const express = require("express")
const db = require("./config/db")
const usermodel = require("./model/usermodel.js")
const app = express()


app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(express.json())

app.post("/insertData", async (req, res) => {
    const data = await usermodel.create(req.body)
    res.send(data)
})

app.post("/edit", async (req, res) => {
    try {
        const { user, ...updateData } = req.body;

        const newuser = await usermodel.findOneAndUpdate(
            { username: user },
            { $set: updateData },
            { new: true }
        );

        if (!newuser) {
            return res.status(404).send("User not found");
        }

        res.send(newuser); // return updated data
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating user");
    }
});


app.post("/delete", async (req, res) => {
    try {
        const result = await usermodel.deleteOne({ username: req.body.username });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});



app.get("/", async (req, res) => {
    const data = await usermodel.find({})
    return res.send(data)


    // res.render("Form")
})


app.listen(7000, () => {
    console.log("Server listen");
})