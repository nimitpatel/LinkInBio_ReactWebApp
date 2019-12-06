const express = require('express');
const Links = require('../Models/links');
const router = express.Router();

// get links
router.get('/', async (req, res) => {
    try {
        const links = await Links.find();
        res.json(links);
    } catch (err) {
        res.json({ message: err });
    }
});

// add link
router.post('/', async (req, res) => {

    const link = new Links({
        title: req.body.title,
        url: req.body.url
    });

    //console.log(req.body);

    try {
        const savedData = await link.save();
        res.json(savedData);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete link
router.delete('/:id', async (req, res) => {
    try {
        const deleLink = await Links.remove({ _id: req.params.id });
        res.json(deleLink);
    } catch (err) {
        res.json({ message: err });
    }
});

// update link
router.patch('/:id', async (req, res) => {
    try {
        const updateLink = await Links.updateMany(
            { _id: req.params.id }, 
            { $set: { title: req.body.title, url: req.body.url } 
        });
        res.json(updateLink);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;