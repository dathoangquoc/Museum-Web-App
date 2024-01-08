const express = require('express');
const router = express.Router();
const artRouter = require("./artRoutes")

router.get('/', async (req, res) => {
    try {
        let artworks = await fetch("http://localhost:3000/api/art/get")
        artworks = await artworks.json()
        res.render("./manager/manager", { artworks: artworks });
    } catch (error) {
        console.error('Error fetching artworks:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;