var Exceldata = function () {
    var XLSX = require('xlsx');

    var workbook = XLSX.readFile('./Resources/Testdata.xlsx');
    this.Worksheet1 = workbook.Sheets['Sheet1'];

    var WorkSheet2 = workbook.Sheets['Sheet2'];
    this.FTNamesList = XLSX.utils.sheet_to_json(WorkSheet2);

    this.Worksheet3=workbook.Sheets['Sheet3'];
    var Worksheet4=workbook.Sheets['Sheet5'];
    this.FTDetails = XLSX.utils.sheet_to_json(Worksheet4);

    var Worksheet6=workbook.Sheets['ConditionCells'];
    this.ConditionCellData=XLSX.utils.sheet_to_json(Worksheet6);


}
module.exports = new Exceldata();

