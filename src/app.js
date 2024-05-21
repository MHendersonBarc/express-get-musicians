const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians

app.use(express.json());
app.use(express.urlencoded());

app.get(`/musicians`, async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
});

app.get(`/musicians/:id`, async (req, res) =>{
    const musician = await Musician.findByPk(req.params.id);
    res.json(musician);
});

app.post(`/`, async (req, res) => {
    const newMusician = await Musician.create({
        name: req.body.name,
        instrument: req.body.instrument,
    })
    res.json(`Added ${newMusician}`)
});

app.put(``);

app.delete(``);







module.exports = app;