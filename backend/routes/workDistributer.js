const express = require('express');
const router = express.Router();
var fetchuser = require('./middleware/fetchuser');
const User = require('../models/User')
const Work = require('../models/WorkDistributer');
const { body, validationResult } = require('express-validator');
// const { route } = require('./auth');
// ALL IMPORTS ARE DONE










router.get ('/fetchallwork',fetchuser,async (req,res)=> {
   

try{

const notes = await Work.find({user: req.user.id});






res.json(notes);
}
catch(error)
{
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER  ERROR ");
}
})




router.put('/fetchallepm',fetchuser,async (req,res)=> {
   

    try{
    const {epostFind}=req.body;
    console.log("requested post is this "+epostFind);
    const notes = await User.find({epost:epostFind});
    console.log(notes);
    res.json(notes);
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
    })












router.post('/addwork',fetchuser,[
body('title','ENTER A VALID TITLE NAME ').isLength({min:5}),
body('description','ENTER A VALID DESCRIPTION OF MIN LENGTH OF 5 ').isLength({min:5}),



],async (req,res)=> {
    
  
try{
    const {title,description,epost,erank,tag,empemail} = req.body ;
  

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const work = new Work({
    title,description,epost,erank,tag,empemail,user: req.user.id
})

const savedWork = await work.save();
// lo bhai thunderClient se ab MongoDB database tak ka safar idhar establish hua  note.save() krke 
console.log("i am reaching");
console.log("THIS NOTE GOT SAVED "+savedWork)
res.send(savedWork)
}
catch(error){
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER  ERROR ");
}
}) 


















//route3 : it is used to update the existing notes of a user 
router.put('/update/:id',fetchuser, async(req,res)=>{
console.log("THIS USER REQUESTED "+req.params.id);

    try{
        
        // let user =await  Notes.findOne({updateID: req.body.email});
       
        const {id,title,description,epost,erank,tag,empemail,leaves} = req.body ;
        
        
        const newTask  = {};
        if(id){newTask.id = id};
        if(description){newTask.description = description};
        if(title){newTask.title = title};
        if(epost){newTask.epost = epost};
        if(erank){newTask.erank = erank};
        if(leaves){newTask.leaves = leaves};
        if(empemail){newTask.empemail = empemail};
        if(tag){newTask.tag = tag};
        // if(time){newNote.time = time};
        // if(alarmTime){newNote.alarmTime = alarmTime};
        // if(shareEmail){newNote.shareEmail = shareEmail};
        
        console.log("NEW TASK"+newTask);
    // finding the note  to get updated and making sure this note belongs to the same person who requested for it 

    let todo =await Work.findById(req.params.id);//idhar url mai id attatched hai 
    if(!todo){
       return res.status(404).send("NOT FOUND !!!!!");
    }
    

    if(todo.user.toString() !== req.user.id)
    {
        return res.status(401).send("X X X NOT ALLOWED X X X X");
    }
   
   

        console.log("NEW Work IS THIS"+newTask.title);

    
    todo = await Work.findByIdAndUpdate(req.params.id,{$set : newTask}, {new :true}) ;
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

    let todo =await Work.findById(req.params.id);
    if(!todo){
       return res.status(404).send("NOT FOUND !!!!!");
    }
    

    if(todo.user.toString() !== req.user.id)
    {
        return res.status(401).send("X X X NOT ALLOWED X X X X");
    }
   todo = await Work.findByIdAndDelete(req.params.id) ;
   res.json({"SUCCESS":" DELETED ", todo:todo});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
})




module.exports = router ;  