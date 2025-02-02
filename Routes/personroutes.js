const express= require('express');
const router= express.Router();
const person=require('./../models/Person.models.js');


//har jagah pe app ko hata ke router ko put kar doo 

router.post('/',async (req,res)=>{
    try{
    const data=req.body  //assuming that the request body contain's person's data 

    //creating a new person data using the mongoose model 
    const newPerson=  new person(data);

    //save the new person to the data base
    const response= await newPerson.save();
    console.log('data saved ');
    res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})


//MY CODE 

router.get('/:workType',async (req,res)=>{
    try{
        const workType=req.params.workType;  //Extract the work type from the URL parameter 
        if(workType =='chef' || workType =='manager' || workType =='waiter' ){
            const data=await person.find({work: workType});
            console.log('response has been fetched ');
            res.status(200).json(data)
        }else{
            res.status(404).json({error: 'Invalid workType '})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})


//GPT CODE 
// app.get('/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType; // Extract the work type from the URL parameter
//         const validWorkTypes = ['chef', 'manager', 'waiter'];

//         if (validWorkTypes.includes(workType)) {
//             const data = await person.find({ work: workType });
//             console.log('Response has been sent');
//             return res.status(200).json(data);
//         } 
        
//         res.status(404).json({ error: 'Invalid workType' });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


router.get('/',async (req,res)=>{
    try{
        const data=await person.find();
        console.log('data saved ');
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})


//code for the updation of the data in the database 
//for updation in the data base we want two important information here
//Which record we want to update?  --> to go that unique piece of information we use id of the mongodb 
//What exactly do we want to update?

router.put('/:uniqueid', async (req,res)=>{
    try{
        const ID = req.params.uniqueid;   //extract the data from the url parameter 
        const updatedPersonData = req.body;  //updated data for the person 

        const response = await person.findByIdAndUpdate(ID,updatedPersonData,{
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        })

        if (!response) { //if no response if given 
            return res.status(404).json({ error: 'Person not found'});
        }

        console.log('data updated ');
        res.status(200).json({response})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }

})

//now write a code to delete a particular record then to delete a particular record we have to know what is the 
//unique id given to that record in the database if we get the unique id then delete that record form that collection

router.delete('/:uniqueId', async (req,res)=>{
    try{
        const ID = req.params.uniqueId;  //extract the data from the url parameter 

        const response = await person.findByIdAndDelete(ID);
        //an important point here to be noted that if in the input you have put an invalid id then it will throw 
        //an internal server error only if the id given by you is valid according to the id syntax but the id 
        //given is not matching with the current id's it have in that case only 
        //it will give person not found error 

        if(!response){  //if no response if given 
            return res.status(404).json({ error: 'Person not found'});
        }

        console.log('data deleted ');
        res.status(200).json({response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error '});
    }
})


module.exports = router;