import ExcelJS from "exceljs";
import test from '@playwright/test'

test("Excel data", async()=>{
    
        const book = new ExcelJS.Workbook();

        await book.xlsx.readFile("Files/Testing.xlsx");

        const sheet = book.getWorksheet("Sheet1");

        const data = sheet.getRow(2).getCell(1).toString();

        console.log(data);
})

// class ExcelData {

//     async excelData() {

//         const book = new ExcelJS.Workbook();

//         await book.xlsx.readFile("Files/Testing.xlsx");

//         const sheet = book.getWorksheet("Sheet1");

//         const data = sheet.getRow(1).getCell(1).toString();

//         console.log(data);
//     }

    
// }
// // createing an object
// const data = new ExcelData()
// data.excelData()



