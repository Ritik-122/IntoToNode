const path=require('path');
const error=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','error.html'));

}

module.exports=error;