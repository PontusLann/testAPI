const express = require("express");
const app = express();
require("dotenv").config();
const appKey = process.env.ALTERNATE_PORT
const PORT = process.env.PORT || 3000;

const className = { people: [{name: "rickard", gender: "male"},
{name: "pontus", gender: "male"},
{name: "mikael", gender: "male"},
{name: "jeyhun", gender: "undefined"},
{name: "joel", gender: "male"}]}

const firstName = ["markus", "david", "simon", "jonathan", "samuel", "stefan", "gorbys", "billys"]
const gender = ["male"]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/add", (req, res) => {
    addPeople()
    res.send("added new people")
})
app.get("/remove", (req, res) => {
    removePeople()
    res.send("Removed person")
})
function addPeople(){
    const randomName = firstName[Math.floor(Math.random() * firstName.length)]
    const randomGender = gender[Math.floor(Math.random() * gender.length)]
    className.people.push({name: randomName, gender: randomGender})
    return className
}

function removePeople(){
    className.people.pop({name: firstName, gender: gender})
    return className
}

app.get("/people", (req, res) => {
    res.send(className)
})

app.listen(PORT, () => {
    console.log("Lsitening to port " + PORT);
});