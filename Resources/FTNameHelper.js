var CreateFT = function () {
    var Canvasmove = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
    var home = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
    var Task = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
    var logger = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
    var DVModel = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
    var RFVModeling = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\RFVModel.js');
    var log = logger.LOG;
    var XL = require('../Resources/XLSXData.js');
    let EC = ExpectedConditions;


    this.CreationofFT = async function (Ftname) {
        browser.sleep(3000)
        let condition = EC.presenceOf(DVModel.CreateFT);
        browser.wait(condition, 5000);
        await DVModel.CreateFT.sendKeys(Ftname).then(function () {
            log.info('1.Entered the text in text box')
            browser.sleep(5000)
        }).then(async function () {
            await DVModel.CreateFT.sendKeys(protractor.Key.ENTER);
            log.info('Clicked Enter button')
        })
    };

};
module.exports = new CreateFT();