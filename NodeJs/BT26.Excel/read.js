const excel = require('xlsx')

const file = excel.readFile('./tan.xlsx')

const sheets = file.SheetNames

const data = []
console.log(sheets.length)
for (let i = 0; i < sheets.length; i++) {
    const temp = excel.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
}

const t = excel.utils.sheet_to_json(file.Sheets[file.SheetNames[1]]);
console.log(data)



