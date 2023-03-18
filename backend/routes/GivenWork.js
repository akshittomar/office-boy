const express = require('express');
const router = express.Router();
var fetchuser = require('./middleware/fetchuser');

const Task = require('../models/MyWork');
const { body, validationResult } = require('express-validator');




router.post('/addwork',fetchuser,[
    body('wname','ENTER A VALID TITLE NAME ').isLength({min:5}),
    body('wdesc','ENTER A VALID DESCRIPTION OF MIN LENGTH OF 5 ').isLength({min:5}),
    
    
    
    ],async (req,res)=> {
      
    try{
        const {wname,wdesc,wpost,wrank,tag,wleaves,workemail} = req.body ;
      
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    const todo = new Task({
        wname,wdesc,wpost,wrank,tag,wleaves,workemail,user:req.user.id
    })
    const savedWork = await todo.save()// lo bhai thunderClient se ab MongoDB database tak ka safar idhar establish hua  note.save() krke 
    console.log("THIS NOTE GOT SAVED "+savedWork)
    res.send(savedWork)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
    }) 
    
    

    router.get ('/getwork',fetchuser,async (req,res)=> {
   

        try{
        const mytodo = await Task.find({user: req.user.id});
        
        
        
        
        
        
        res.json(mytodo);
        }
        catch(error)
        {
            console.error(error.message);
            res.status(500).send("INTERNAL SERVER  ERROR ");
        }
        })

        module.exports = router ;