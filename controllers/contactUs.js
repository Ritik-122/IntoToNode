const path=require('path')
const rootDir=require('../utils/path')

const contactUs=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
}
module.exports=contactUs