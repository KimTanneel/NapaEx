// Builder Pattern sinh ra để giải quyết cho việc tạo object (* có nhiều thuộc tính) trở nên thuận tiện hơn


const Student = function (id, name, age, type) {
    this.name = name
    this.id = id
    this.age = age
    this.type = type
}
const StudentBuilder = function () {
    let id
    let name
    let age
    let type

    return {
        setId: function (id) {
            this.id = id
            return this
        },
        setName: function (name) {
            this.name = name
            return this
        },
        setAge: function (age) {
            this.age = age
            return this
        },
        setType: function (type) {
            this.type = type
            return this
        },
        build : function () {
            return new Student(this.id, this.name, this.age,this.type)
        }
    }
}
let student =  StudentBuilder().setId('1').setName('Tan').setAge(14).setType('HS').build()
console.log(student)

const stu = new Student(1,'Hello',14,'Hs')
console.log(stu)