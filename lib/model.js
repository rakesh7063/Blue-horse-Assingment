const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    email :{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    
})

const Customer = mongoose.models.Customer || mongoose.model("Customer", UserSchema);
export default Customer;