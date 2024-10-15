const noteModel = require("../model/noteModel")
const noteList = async (req, res) => {
    try {
        const result = await noteModel.find()
        if(result.length < 1){
           res.send("<h2><i>Empty Database Results</i></h2>")
            const emptyResult = {title: "Empty", body: "Empty"}
            res.json(emptyResult)
        }
        res.json(result)
    }
    catch {
        res.send("<h2><i>Error getting Database Results</i></h2>")
    }
}
const noteLists = async (req, res) => {
    try {
        const id = req.params.id
        const result = await noteModel.find({ _id: id })
        res.json(result)
    }
    catch {
        res.send("<h2><i>Error getting Database Results</i></h2>")
    }
}
const clear = async (req, res) => {
    try {
        const result = await noteModel.find()
        if (result.length > 2) {

            let a = 'local/' + result[1]._id
            let b = 'local/' + result[2]._id
            let c = "<h2><a href='" + a + "'>" + result[1].title + "</a> " + result[1].body + "</h2>"
            let d = "<h2><a href='" + b + "'>" + result[2].title + "</a> " + result[2].body + "</h2>"
            res.send(c + "<br>" + d)
        }
        else {
            res.send("<h2>Results Are Less Than :- 3</h2>")
        }
    }
    catch {
        res.send("<h2><i>Error getting Database Results</i></h2>")
    }
}

const noteCreate = async (req, res) => {
    const { title, body } = req.body
    try {
        const result = await noteModel.create({ title, body })
        res.status(200).json(result)
    } catch (error) {
        res.json("Error " + error)
    }
}
const Update = async (req, res) => {
    const id = req.params.id
    const { title, body } = req.body
    try {
        const result = await noteModel.findOneAndUpdate({ _id: id }, { title: title, body: body })
        res.status(200).json(result)
    } catch (error) {
        res.json("Error " + error)
    }

}
const Delete = async (req, res) => {
    try {
        const result = await noteModel.findOneAndDelete({ _id: req.params.id })
        if (result) {
            res.redirect("http://localhost:4000/clear")
        }
        else { res.send("<h2>Data Note Found</h2>") }
    }
    catch {
        res.send("<h2><i>Error getting Database Results</i></h2>")
    }
}
const noteDelete = async (req, res) => {
    try {
        const result = await noteModel.findOneAndDelete({ _id: req.params.id })
        if (result) {
            res.redirect("http://localhost:3000/home")
        }
        else { res.send("<h2>Data Note Found</h2>") }
    }
    catch {
        res.send("<h2><i>Error getting Database Results</i></h2>")
    }
}


module.exports = { clear, Delete, Update, noteCreate, noteList, noteLists, noteDelete }
