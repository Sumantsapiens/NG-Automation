var XLSX = require('xlsx')

class xlreader {
    read_from_excel(sheetName, filepath) {
        var workBook = XLSX.readFile('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.xlsx');
        var workSheet = workBook.Sheets['Sheet1'];
        return XLSX.utils.sheet_to_json(workSheet)
    }

}

module.exports = new xlreader();

