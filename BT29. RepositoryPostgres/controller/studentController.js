
const StudentRepository = require('../repository/studentRepository')

module.exports = {
    async create(req, res) {
        try {
            await StudentRepository.createStudent(req.body)
            res.send('Create Success');
        } catch (err) {
            console.log(err)
            res.send("Create Fail");
        }
    },

    async update(req, res) {
        try {
            await StudentRepository.updateStudent(req.params.id, req.body)
            res.send("update Success");
        } catch (err) {
            console.log(err)
            res.send('Update fail');
        }
    },

    async delete(req, res) {
        try {
            await StudentRepository.deleteStudent(req.params.id);
        } catch (err) {
            console.log("Catct err");
            res.send('Delete Fail');
        }
    },
    async findById(req, res) {
        try {
            const student = await StudentRepository.findStuentById(req.params.id)
            res.send(student.rows);
        } catch (err) {
            console.log(err)
        }
    },

    async findAll(req, res) {
        try {
            const studentList = await StudentRepository.findAllStudent();
            console.log(studentList.rows)
            res.send(studentList.rows);
        } catch (err) {
            console.log(err)
            res.send("Find All Error");
        }
    }
}
