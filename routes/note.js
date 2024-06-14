const express = require("express");
const route = express.Router();
const Crud = require("../helpers/Crud");
const crud = new Crud();


route.get("/", (req, res) => {
    const DATA_BASE = crud.getDataBase();
    res.json(DATA_BASE);
});

route.post("/", (req, res) => {
    const newNote = req.body;
    const status = crud.insert(newNote);
    console.log(newNote);
    console.log(status);

    res.json(newNote);
});

route.delete("/:id", (req, res) => {
    const id = req.body.id;
    crud.delete(id);
});

module.exports = route;