import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        uppercase:true,
    },
    lastName:{
        type:String,
        required:true,
        uppercase:true,
    },
})
const Employee= mongoose.model('employee',employeeSchema);
export default Employee || mongoose.models.Employee;