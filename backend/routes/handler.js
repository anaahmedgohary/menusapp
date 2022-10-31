const express = require("express");
const router = express.Router();

router.get('/manlan', (req, res) =>
{
    const str = [{
        "name": "maylam",
        "locate": "giza"
    }];
    res.end(JSON.stringify(str));
});

router.post("/addmanlam", (req, res) =>
{
    res.end('NA')
});

module.exports = router;