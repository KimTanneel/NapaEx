const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:String,
    phone: Number,
    email: String,
    type:String,
    isDelete:false
})

const Student = mongoose.model('Student',studentSchema,'student');

module.exports = Student;