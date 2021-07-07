const express = require('express');

const app = express();

const cats = [
    {
        "id": 1,
        "name": "Nebuchadnezzar"
    },
    {
        "id": 2,
        "name": "Garry"
    }
];

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/cats', (req, res) => {
    res.json(cats)
});

app.get('/cats/:id', (req, res) => {
    res.json(cats.find(x => x.id == req.params.id));
});

app.listen(3500);