'use strict';
var Canvasmove = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
var home = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
var Task = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
//var data1= require('Resources/Testdata.json');
var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
var logger = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
var DVModel = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
var log = logger.LOG;
let EC = ExpectedConditions;
var Exceldata = require('../Resources/ExcelHelper.js');


browser.ignoreSynchronization = true;

describe('Navigate to Task and Create FT(Single & Text & AnyValue)', function () {

    it('should Click on Task Tab', function () {
        try {
            Task.TaskTab.click();
            log.info('Clicked on task tab');
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    })
    it('should Select a task from list of tasks', function () {
        try {
            Task.tasklink.click();
            log.info("Task has been seleceted");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should Select Fact type tab from tasks', function () {
        try {
            Task.FacttypeTab.click();
            log.info("Facttype Tab Clicked");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    })
    it('should Click on Create new FT Button ', function () {
        try {

            Task.CreateNewFTButton.click();
            log.info("Clicked on Create New FT Button");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should Enter FT name in text area', async function () {
        try {
            await Task.FTnameTextarea.sendKeys(Exceldata.Worksheet3['B2'].v).then(function () {
                log.info("Entered FT name");
                browser.sleep(2000);
            })
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should Click on Ok Button', function () {
        try {

            Task.FTOkButton.click();
            log.info('Clicked on Ok button')
            browser.sleep(3000)

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
});
describe('Create FT(Multiple & Text & AnyValue)', function () {

    it('should Click on Create new FT Button ', function () {
        try {

            Task.CreateNewFTButton.click();
            log.info("Clicked on Create New FT Button");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should Enter FT name in text area', async function () {
        try {
            await Task.FTnameTextarea.sendKeys(Exceldata.Worksheet3['B3'].v).then(function () {
                log.info("Entered FT name");
                browser.sleep(2000);
            })

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    it('should Select Multiple Values', async function () {
        try {
            Task.MultiValueButton.click();
            log.info('Selected Multivalue button')
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should Click on Ok Button', function () {
        try {

            Task.FTOkButton.click();
            log.info('Clicked on Ok button')
            browser.sleep(3000)

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    describe('Navigate to Task and Create FT(Single & Numeric Datatype & Regular Set)', function () {


        it('should Click on Create new FT Button ', function () {
            try {

                Task.CreateNewFTButton.click();
                log.info("Clicked on Create New FT Button");

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }
        });
        it('should Enter FT name in text area', async function () {
            try {

                await Task.FTnameTextarea.sendKeys(Exceldata.Worksheet3['B4'].v).then(function () {
                    log.info("Entered FT name");
                    browser.sleep(1000);
                })

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }
        });

        it('should clear the Datatype field', function () {
            browser.actions().mouseMove(Task.DatatypeTextarea).click().perform();
            Task.DatatypeTextarea.clear();
            log.info('cleared textarea')
        });
        it('should click on Datatype dropdown', function () {
            try {
                Task.DataTypeDrop.click();
                log.info('Clicked on Dropdowwn');

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }
        });

        it('should Select DataType from list of elements', function () {
            Task.DatatypeList.filter(function (elem, index) {
                return elem.getText().then(function (text) {
                    if (text === 'Numeric') {
                        elem.click();
                        console.log('Yes ! Found option is:' + text);
                        log.info('Yes ! Found option is:' + text);
                    }
                    return text === 'Numeric';
                });
            }).then(function (bool) {
                log.info(bool.length);
            }).catch(function (err) {
                console.log('Ooops ! Error... ' + err.message);
            });

        });
        it('should click on allowed values dropdown', function () {
            Task.AllowedValues.click().then(function () {
                Task.AllowedValuesList.filter(function (elem, index) {
                    return elem.getText().then(function (text) {
                        if (text === 'Regular set') {
                            elem.click();
                            console.log('Yes ! Found option is:' + text);
                            log.info('Yes ! Found option is:' + text);
                        }
                        return text === 'Regular set';
                    });
                }).then(function (bool) {
                    log.info(bool.length);
                }).catch(function (err) {
                    console.log('Ooops ! Error... ' + err.message);
                    log.info('Ooops ! Error... ' + err.message);
                });

            })
            browser.sleep(1000)
        });
        try {
            Exceldata.FTDetails.forEach(function (data) {
                it('should Enter the Set Values ', function () {
                    console.log(data.SetValues)
                    Task.SetVauesTextarea.click().then(function () {
                        Task.SetVauesTextarea.sendKeys(data.SetValues).then(function () {
                            Task.AddSetValuesButton.click();
                        })
                    })
                });
            })

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

        it('should Click on Ok Button', function () {
            try {

                Task.FTOkButton.click();
                log.info('Clicked on Ok button')
                browser.sleep(3000)

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }
        });

    })
})