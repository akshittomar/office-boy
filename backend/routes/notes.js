const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{

res.send("I AM INSIDE NOTES ")
})
module.exports = router ;