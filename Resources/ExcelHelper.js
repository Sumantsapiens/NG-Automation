var Exceldata = function () {
    var XLSX = require('xlsx');

    var workbook = XLSX.readFile('./Resources/Testdata.xlsx');
    this.Worksheet1 = workbook.Sheets['Sheet1']

    var WorkSheet2 = workbook.Sheets['Sheet2']
    this.FTNamesList = XLSX.utils.sheet_to_json(WorkSheet2);


}
module.exports = new Exceldata();

