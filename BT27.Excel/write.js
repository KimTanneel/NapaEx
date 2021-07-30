const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./data.xlsx')
  
// Sample data set
let student_data = [
    { Name: 'Tan', Age: 18, Email: 'tan@gmail.com', Mark: 9 },
    { Name: 'Viet', Age: 17, Email: 'Viet@gmail.com', Mark: 7 },
    { Name: 'Nam', Age: 17, Email: 'nam@gmail.com', Mark: 8 }
  ]
  
const ws = reader.utils.json_to_sheet(student_data)
  
reader.utils.book_append_sheet(file,ws,"Sheet3")
  
// Writing to our file
reader.writeFile(file,'./test.xlsx')