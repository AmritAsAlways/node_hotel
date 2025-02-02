const express = require('express');
const router =  express.Router();
const menuitem=require('./../models/menu.models.js');
const { uniqueId } = require('lodash');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;

        const newMenu= new menuitem(data);

        const resp=await newMenu.save();
        console.log('menu saved ');
        res.status(200).json(resp)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await menuitem.find();
        console.log('menu saved ');
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})

router.get('/:theTaste',async (req,res)=>{
    try{
        const tasteType = req.params.theTaste;
        if(tasteType =='sweet' || tasteType =='sour' || tasteType == 'spicy' ){
            const data = await menuitem.find({taste : tasteType});
            console.log('menu saved ');
            res.status(200).json(data)    
        }
        else{
            res.status(404).json({error: 'Invalid taste type '});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})

//code for the updation of the data in the menu project 
router.put('/:id', async (req,res)=>{
    try{
        const uniqueId = req.params.id;
        const updatedPersonData = req.body; 

        const response = await menuitem.findByIdAndUpdate(uniqueId,updatedPersonData,{
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        })

        if(!response){   //if no response has been found 
            return res.status(404).json({ error: 'Menu not found'}); 
        }
        console.log('code has been updated successfully ');
        res.status(200).json({response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const uniqueId = req.params.id;
        
        const response = await menuitem.findByIdAndDelete(uniqueId);
        if(!response){
            return res.status(404).json({error: 'Menu not found '});
        }

        console.log('code has been successfully updated ');
        res.status(200).json({response});
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'internal server error '});
    }
})

module.exports = router;
