const rootDir=require('../utils/path')
const path=require('path')


const success=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}
module.exports=success