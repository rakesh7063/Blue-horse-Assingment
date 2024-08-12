const { default: mongoose } = require("mongoose");

const DbConnect = async ()=>{
    const url = "mongodb+srv://rakeshkandar2021:Rakesh123@rakeshdb.dunqmug.mongodb.net/?retryWrites=true&w=majority&appName=RakeshDb";
    mongoose.connect(url)
    .then(()=>console.log("Db connect..."))
    .catch((error)=>{
        console.log(error)
    })
}

export default DbConnect;