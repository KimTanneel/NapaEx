const client = require('../ultils/postgres');
client.connect();
module.exports = {
    createStudent (stu) {
        const query = 'INSERT INTO student(id,name,phone,email,type) VALUES($1, $2, $3, $4, $5)'
        const params = Object.values(stu);
        console.log({params});
        return client.query(query,params)
    },

    updateStudent(id, stuUpdate) {
        const query = "UPDATE student SET name=$1,phone=$2,email=$3,type=$4 WHERE student.id = $5";
        const params = Object.values(stuUpdate)
        params.push(id)
        return client.query(query,params)
    },

    deleteStudent (id){
        const query = "DELETE FROM student WHERE student.id=$1";
        const params = [id]
        return client.query(query,params)
    },

    findAllStudent(){
        const query = "SELECT * FROM student";
        return client.query(query);
    },

    findStuentById (id){
        const query = "SELECT * FROM student WHERE student.id = $1";
        const params = [id]
        return client.query(query,params)
    }
}