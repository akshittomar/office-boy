var jwt = require('jsonwebtoken');
const JWT_SECRET = 'AUR LADKE KYA HAL HAI TERE PURA KAM CHAL RHA MAUJ KR '


const fetchuser = (req,res,next) =>
{
    // console.log(" inside fetchware")
    // console.log(req);

    // GET THE USER FROM THE JWT TOKEN AND ADD ID TO REQUEST OBJECT 

    const token = req.header('authToken');
    
    if(!token)
    {
        res.status(401).send({error:"PLEASE AUTHENTICATE USING A VALID TOKEN "})
    }
    try{  
        const data = jwt.verify(token,JWT_SECRET);
        
    req.user = data.user;// THIS IS KNOWN AS MIDDELWARE HERE WE ONLY MADE req.user i.e. request mai append krdiya user ko 
    next();
    }
    catch(error){
        res.status(401).send({error:"PLEASE AUTHENTICATE USING A VALID TOKEN "})
    }
    
}
module.exports = fetchuser ;