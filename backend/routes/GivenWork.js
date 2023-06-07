const express = require('express');
const router = express.Router();
var fetchuser = require('./middleware/fetchuser');
const fs = require('fs');
const Task = require('../models/MyWork');
const Image = require('../models/Image')
const { body, validationResult } = require('express-validator');




router.post('/addwork',fetchuser,[
    body('title','ENTER A VALID TITLE NAME ').isLength({min:5}),
    body('description','ENTER A VALID DESCRIPTION OF MIN LENGTH OF 5 ').isLength({min:5}),
    
    
    
    ],async (req,res)=> {
      
    try{
        const {title,description,wpost,wrank,tag,wleaves,workemail} = req.body ;
      
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    const todo = new Task({
        title,description,wpost,wrank,tag,wleaves,workemail,user:req.user.id
    })
    const savedWork = await todo.save()// lo bhai thunderClient se ab MongoDB database tak ka safar idhar establish hua  note.save() krke 
    // console.log("THIS NOTE GOT SAVED "+savedWork)
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



        router.post('/image',async (req,res)=> {
   try{
    console.log("all okk");
    const filePath = "C:/Users/HP/Downloads/WhatsApp Image 2023-03-13 at 10.09.08.jpeg"
    const buffer = fs.readFileSync(filePath);
    const data = buffer;
    const img = new Image({data});
    const sav = await img.save();
    res.json({sav:sav});
   }
           
            catch(error)
            {
                console.error(error.message);
                res.status(500).send("INTERNAL SERVER  ERROR ");
            }
            })
    




       









        router.put('/update/:id',fetchuser, async(req,res)=>{
            console.log("THIS USER REQUESTED "+req.params.id);
            
                try{
                    
                    // let user =await  Notes.findOne({updateID: req.body.email});
                   
                    const { title,description,wpost,wrank,tag,wleaves,workemail,id} = req.body ;
                    
                    
                    const newTask  = {};
                    if(id){newTask.id = id};
                    if(description){newTask.description = description};
                    if(title){newTask.title = title};
                    if(wpost){newTask.wpost = wpost};
                    if(wrank){newTask.wrank = wrank};
                    if(wleaves){newTask.wleaves = wleaves};
                    if(workemail){newTask.workemail = workemail};
                    if(tag){newTask.tag = tag};
                    // if(time){newNote.time = time};
                    // if(alarmTime){newNote.alarmTime = alarmTime};
                    // if(shareEmail){newNote.shareEmail = shareEmail};
                    
                    console.log("NEW TASK"+newTask);
                // finding the note  to get updated and making sure this note belongs to the same person who requested for it 
            
                let todo =await Task.findById(req.params.id);//idhar url mai id attatched hai 
                if(!todo){
                   return res.status(404).send("NOT FOUND !!!!!");
                }
                
            
                if(todo.user.toString() !== req.user.id)
                {
                    return res.status(401).send("X X X NOT ALLOWED X X X X");
                }
               
               
            
                    console.log("NEW Work IS THIS"+newTask.title);
            
                
                todo = await Task.findByIdAndUpdate(req.params.id,{$set : newTask}, {new :true}) ;
               res.json({todo});
               
               console.log("updated notes"+todo);
               
                }
                catch(error){
                    console.error(error.message);
                    res.status(500).send("INTERNAL SERVER  ERROR ");
                }
            })
            
            
            
            
            
            
            
            
            
            
            
            //route4 : it is used to delete the existing notes of a user 
            router.delete('/delete/:id',fetchuser, async(req,res)=>{
            
            
                try{
                     // finding the note  to get deleted and making sure this note belongs to the same person who requested for it 
            
                let todo =await Task.findById(req.params.id);
                if(!todo){
                   return res.status(404).send("NOT FOUND !!!!!");
                }
                
            
                if(todo.user.toString() !== req.user.id)
                {
                    return res.status(401).send("X X X NOT ALLOWED X X X X");
                }
               todo = await Task.findByIdAndDelete(req.params.id) ;
               res.json({"SUCCESS":" DELETED ", todo:todo});
                }
                catch(error){
                    console.error(error.message);
                    res.status(500).send("INTERNAL SERVER  ERROR ");
                }
            })
            




            



        module.exports = router ;