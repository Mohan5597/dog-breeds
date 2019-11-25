const mongoose=require('mongoose')

mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/ideotic',{useNewUrlParser:true})
        .then(() =>{
            console.log("connected to db")
        })
        .catch(err =>{
            console.log("listening on port")
        })
module.exports=mongoose