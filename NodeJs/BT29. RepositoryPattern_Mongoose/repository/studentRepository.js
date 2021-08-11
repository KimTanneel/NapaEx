const Student = require("../model/student")

module.exports = {
    createStudent (stu) {
        const newStudent = new Student(stu);
        return newStudent.save();
    },

    updateStudent(id, stuUpdate) {
        return Student.findOneAndUpdate({_id:id},stuUpdate);
    },

    deleteStudent (id){
        return Student.findByIdAndDelete({_id:id});
    },

    findAllStudent(){
        return Student.find();
    },

    findStuentById (id){
        return Student.findById(id)
    }
}