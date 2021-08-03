const client = require('../ultils/postgres');
client.connect();
module.exports = {
    createStudent async (stu) {
        const query = 'INSERT INTO student(id,name,phone,email,type) VALUES($1, $2, $3, $4, $5)'
        const params = Object.values(stu)
        return await client.query(query,params)
    },

    updateStudent(id, stuUpdate) {
        return Student.findOneAndUpdate({_id:id},stuUpdate);
    },

    deleteStudent (id){
        return Student.findByIdAndDelete({_id:id});
    },

    findAllStudent(){
        const query = "SELECT * FROM student";
        return client.query(query);
    },

    findStuentById (id){
        return Student.findById(id)
    }
}