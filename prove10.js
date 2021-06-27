    const express = require('express');
    const router = express.Router();

   
    // Path to your JSON file, although it can be hardcoded in this file.
    const dummyData = require('./text.json');

    router.get('/fetchAll', (req, res, next) => {
        res.json(dummyData);
    })

    router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
        const newName = req.body.newName;
        
        JSON.stringify(dummyData);
        // for (let i of dummyData.avengers) {
        //     if (newData === avengers.i) {
        //         const errMsg = "Name already Exists."
        //         alert(errMsg);
        //     }
        if (!dummyData.avengers.some(a => a.name === newName)) {
            dummyData.avengers.push({ name: newName }) 
            res.sendStatus(200)
        }
        else { 
            console.log(err);
        }
    }
    )

    router.get('/', (req, res, next) => {
        res.render('prove10', {
            title: 'Prove Activity 10',
            path: '/views/prove10',
        });
    })
    module.exports = router;