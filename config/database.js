const mongoose=require('mongoose')

mongoose.Promise=global.Promise
//'mongodb://localhost:27017/ideotic'
//'mongodb://localhost:27017/ideotic'||
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
        .then(() =>{
            console.log("connected to db")
        })
        .catch(err =>{
            console.log("listening on port")
        })
module.exports=mongoose