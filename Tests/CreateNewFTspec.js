'use strict';
var Canvasmove=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
var home=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
var Task=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
//var data1= require('Resources/Testdata.json');
var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
var logger= require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
var DVModel=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
var log=logger.LOG;
let EC = ExpectedConditions;

browser.ignoreSynchronization=true;
/*
describe('Navigate Task and Create FT(Single & Text)',function () {

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

            await Task.FTnameTextarea.sendKeys('FTAuto').then(function () {
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
    describe('Create FT(Multiple & Text)',function () {

        it('should Click on Create new FT Button ', function () {
            try {

                Task.CreateNewFTButton.click();
                log.info("Clicked on Create New FT Button");

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }});
        it('should Enter FT name in text area',  async function () {
            try {

                await Task.FTnameTextarea.sendKeys('FTAuto1').then(function () {
                    log.info("Entered FT name");
                    browser.sleep(2000);
                })

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }});

        it('should Select Multiple Values',  async function () {
            try {
                Task.MultiValueButton.click();
                log.info('Selected Multivalue button')

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }});
        it('should Click on Ok Button', function () {
            try {

                Task.FTOkButton.click();
                log.info('Clicked on Ok button')
                browser.sleep(3000)

            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }});







    });
    */

describe('Navigate Task and Create FT(Single & different Datatype)',function () {

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

            await Task.FTnameTextarea.sendKeys('FTAuto122').then(function () {
                log.info("Entered FT name");
                browser.sleep(2000);
            })

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should clear the Datatype field', function () {
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
                try {

                    Task.DatatypeList.then(function (items) {
                    log.info('Lengthof the dropdown is'+ items.length)
                        for (var i=0; i < items.length; i++)
                        {
                            items[i].getText().then(function (Text ) {
                                log.info(Text);
                                if (Text==='Numeric'){
                                    log.info('entered if loop')

                                }

                            })
                        }
                    })

                } catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });
    it('should click on allowed values dropdown', function () {
       Task.AllowedValues.click();
       browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    });
    /*


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
    */
})