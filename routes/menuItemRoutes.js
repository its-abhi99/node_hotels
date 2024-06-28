const express= require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');

router.post('/', async (req, res) => {
    try{
        const menuData = req.body;
        const newMenu = new MenuItem (menuData);
        const response = await newMenu.save();
        console.log('data is saved for menu');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error :'Internal Server Error'});
    }
})

//GET METHOD TO GET THE MENU
router.get('/', async (req, res) => {
    try{
        const data = await MenuItem.find();
        console.log('Menu data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500),json({error : 'Internal Server Error'});
    }
})

router.get('/:menuType', async (req, res) => {
    try{
        const menuType = req.params.menuType; //Extract the work type from the URL Paramter
        if(menuType == 'spicy' || menuType  == 'sour' || menuType  == 'sweet'){
            const response = await MenuItem.find({taste : menuType });
            console.log('menu type response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error : 'NOT found'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
} )

//comment added for testing purpose
module.exports = router;