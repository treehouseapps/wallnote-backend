const noteModel = require("../model/noteModel");

const noteList = async (req, res) => {
    try {
        const result = await noteModel.find();

        if (result.length < 1) {
            console.log(result);
            return res.send("<h2><i>Empty Database Results</i></h2>");
        }

        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.send("<h2><i>Error getting Database Results</i></h2>");
    }
};

const noteLists = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await noteModel.find({ _id: id });

        if (result.length < 1) {
            return res.send("<h2><i>No note found with this ID</i></h2>");
        }

        return res.json(result);
    } catch (err) {
        console.error(err);
        return res.send("<h2><i>Error getting Database Results</i></h2>");
    }
};

const clear = async (req, res) => {
    try {
        const result = await noteModel.find();
       if (result.length > 2) {
            let output = '';
            result.forEach(note => {
                const link = 'local/' + note._id;
                output += `<h2><a href='${link}'>${note.title}</a> ${note.body}</h2><br>`;
            });
              return res.send(output);
        } else {
            return res.send("<h2>Results Are Less Than :- 3</h2>");
        }
    } catch (err) {
        console.error(err);
        return res.send("<h2><i>Error getting Database Results</i></h2>");
    }
};

const noteCreate = async (req, res) => {
    const { title, body } = req.body;
    try {
        const result = await noteModel.create({ title, body });
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.json("Error " + error);
    }
};

const Update = async (req, res) => {
    const id = req.params.id;
    const { title, body } = req.body;
    try {
        const result = await noteModel.findOneAndUpdate({ _id: id }, { title, body }, { new: true });
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.json("Error " + error);
    }
};

const Delete = async (req, res) => {
    try {
        const result = await noteModel.findOneAndDelete({ _id: req.params.id });
        if (result) {
            return res.redirect("wallnote-backend.vercel.app/clear");
        } else {
            return res.send("<h2>Data Note Not Found</h2>");
        }
    } catch (err) {
        console.error(err);
        return res.send("<h2><i>Error getting Database Results</i></h2>");
    }
};

const noteDelete = async (req, res) => {
    try {
        const result = await noteModel.findOneAndDelete({ _id: req.params.id });
        if (result) {
            return res.redirect("wallnote-backend.vercel.app/home");
        } else {
            return res.send("<h2>Data Note Not Found</h2>");
        }
    } catch (err) {
        console.error(err);
        return res.send("<h2><i>Error getting Database Results</i></h2>");
    }
};

module.exports = { clear, Delete, Update, noteCreate, noteList, noteLists, noteDelete };
