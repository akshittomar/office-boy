const express = require('express');
const router = express.Router();
var fetchuser = require('./middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const { route } = require('./auth');
// ALL IMPORTS ARE DONE 










router.get ('/fetchallnotes',fetchuser,async (req,res)=> {
    //ROUTE:1 jo user logged in hai uske notes milainge humko api/notes/fetchallnotes
// ISKI REQUEST JO HOGI WOH GET HOGI BECAUSE WE WILL GET TOKEN FROM HEADER 

try{
const notes = await Notes.find({user: req.user.id});
res.json(notes);
}
catch(error)
{
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER  ERROR ");
}
})












router.post('/addnote',fetchuser,[
body('title','ENTER A VALID TITLE NAME ').isLength({min:3}),
body('description','ENTER A VALID DESCRIPTION OF MIN LENGTH OF 5 ').isLength({min:5}),
body('time','ENTER A VALID TIME ').isString(),
body('shareEmail','ENTER A VALID EMAIL').isEmail(),
],async (req,res)=> {
    //ROUTE:2 jo user logged in hai voh apne notes app kr skte hai api/notes/addnote
try{
    const {title ,description,tag,time,alarmTime,shareEmail} = req.body ;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const note  = new Notes({
    title , description , tag , user: req.user.id ,time ,alarmTime,shareEmail
})
const savedNote = await note.save()
res.send(savedNote)
}
catch(error){
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER  ERROR ");
}
}) 









//route3 : it is used to update the existing notes of a user 
router.put('/update/:id',fetchuser, async(req,res)=>{


    try{
        
        // let user =await  Notes.findOne({updateID: req.body.email});
        const {title ,description,tag,time,alarmTime,shareEmail} = req.body ;
        
        
        const newNote  = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};
        if(time){newNote.time = time};
        if(alarmTime){newNote.alarmTime = alarmTime};
        if(shareEmail){newNote.shareEmail = shareEmail};
        
        
    // finding the note  to get updated and making sure this note belongs to the same person who requested for it 

    let note =await Notes.findById(req.params.id);
    if(!note){
       return res.status(404).send("NOT FOUND !!!!!");
    }
    

    if(note.user.toString() !== req.user.id)
    {
        return res.status(401).send("X X X NOT ALLOWED X X X X");
    }
   note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote}, {new :true}) ;
   res.json({note});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
})











//route4 : it is used to delete the existing notes of a user 
router.delete('/delete/:id',fetchuser, async(req,res)=>{


    try{
        
        // let user =await  Notes.findOne({updateID: req.body.email});
        
        
        
        
        
    // finding the note  to get deleted and making sure this note belongs to the same person who requested for it 

    let note =await Notes.findById(req.params.id);
    if(!note){
       return res.status(404).send("NOT FOUND !!!!!");
    }
    

    if(note.user.toString() !== req.user.id)
    {
        return res.status(401).send("X X X NOT ALLOWED X X X X");
    }
   note = await Notes.findByIdAndDelete(req.params.id) ;
   res.json({"SUCCESS":" DELETED ", note:note});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
})




module.exports = router ;  