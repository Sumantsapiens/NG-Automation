'use strict';
var Canvasmove = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
var home = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
var Task = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
var logger = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
var DVModel = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
var RFVModeling = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\RFVModel.js');
var log = logger.LOG;
var XL = require('../Resources/XLSXData.js');
let EC = ExpectedConditions;
var data1 = require('../Resources/Testdata.json');
var FTcreation = require('../Resources/FTNameHelper.js');

browser.ignoreSynchronization = true;

describe('Create new decision', function () {


    it("Click on Start new decision button", async function f() {
        try {
            let condition = EC.urlContains('http://bdmsuat7:18821/enterprise/index.html#/home')
            browser.wait(condition, 5000);
            await home.StartNewdecision.click();
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    browser.sleep(5000);
    it("Select community", function f() {
        try {
            let Newcond = EC.presenceOf(home.communityname);
            browser.wait(Newcond, 5000);
            home.CommunityTextarea.sendKeys(data1.CommunityText);
            browser.sleep(2000)
            home.CommunityTextarea.sendKeys(protractor.Key.ENTER);
            browser.sleep(2000)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });

    it("Select taskname", function f() {
        try {
            expect(home.TaskName.isEnabled);
            if (home.TaskName.isEnabled()) {
                home.TaskName.sendKeys(data1.TaskName);
                browser.sleep(1000)
                home.TaskName.sendKeys(protractor.Key.ENTER);

            } else {
                console.log('task Not displayed')
            }
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    browser.sleep(3000)
    it('Should Select Decision Name ', function () {
        try {
            home.decisionname.sendKeys(data1.decisionname);
            browser.sleep(1000)
            home.decisionname.sendKeys(protractor.Key.ENTER);
            browser.sleep(3000)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });

    it('should select view', function () {
        try {
            let Viewdrop = EC.presenceOf(home.Viewdropdwn);

            browser.wait(Viewdrop, 5000);
            home.Viewdropdwn.click();

            //  home.Viewname.sendKeys("Base");
            browser.sleep(1000)
            home.Viewname.sendKeys(protractor.Key.ENTER);
            browser.sleep(2000)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });
    it('should Select folder', function () {
        try {
            home.folderdropdown.click();
            browser.sleep(2000);
            home.foldertextarea.sendKeys(protractor.Key.ENTER);
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);

        }

    });
    it('should Click on Ok button', function () {
        try {
            home.Clickok.click().then(function () {
                let condition=EC.presenceOf(DVModel.canvaspage)
                browser.wait(condition,5000)
                log.info('Canvas page displayed')
                browser.sleep(5000)
            })
          ;

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
});


describe('Navigate to Task Model DV , Validate and Test', function () {
    /*
        it('should Click on Task Tab', function () {
            try {
                //throw new Error('Something bad happened');
                let condition = EC.urlContains("http://bdmsuat7:18821/enterprise/index.html#/home")
                browser.wait(condition, 5000);
                Task.TaskTab.click();
                browser.sleep(2000);
                log.info("Task tab has been clicked successfuly");


            } catch (e) {
                console.log(e.message, e);
                log.error("error in clicking task name", e.message, e);
            }

        });
        it('should Select the Task created in previous suite', function () {
            try {
                Task.tasklink.click();
                log.info("Task has been seleceted");
                browser.sleep(5000);
            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }

        });

        it('should Cick on RFV TAB and select RFV ', function () {
            try {
                RFVModeling.RFVTab.click().then(function () {
                    browser.sleep(2000)
                    log.info("Clcked on RFV TAB");
                    RFVModeling.RFVname.click();
                    log.debug('Clicked on RFV Name')
                    browser.waitForAngular();
                })


            } catch (e) {
                console.log("", e);
                log.error(e.message, e);
            }
        });

            it('should Select decision Link', function () {
                try {


                    Task.DecisionLink.click();
                    log.info("Decision Selected Successfully")
                    browser.sleep(2000);
                } catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });*/

    it('Should Click on Decision ', async function () {
        try {
            let condition=EC.presenceOf(DVModel.canvaspage)
            browser.wait(condition,4000)
            var actions = browser.actions();
            return actions.mouseMove(DVModel.canvaspage, {x: 675, y: 10}).click().perform();
            log.info("Moved to element and clicked on Decision");
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    it('should Enter FT1 from DV diagram', async function () {
        try {
            await FTcreation.CreationofFT(data1.FT1);
            browser.sleep(500)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    })
    it('should Enter FT2 from DV diagram', async function () {
        try {
            await FTcreation.CreationofFT(data1.FT2);
            browser.sleep(500)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    })
    it('should Enter FT2 from DV diagram', async function () {
        try {
            await FTcreation.CreationofFT(data1.FT3);
            browser.sleep(500)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });

    it('Should Open Decision ',  function () {
        try {
            var actions = browser.actions();
            return actions.mouseMove(DVModel.canvaspage, {x: 675, y: 10}).doubleClick().perform();
            RFVModeling.RFVPageDisplay.isDisplayed().then(function () {
                console.log('Opened the DV')
            })

            log.info("Moved to element and Double clicked on Decision");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    it('should Click on Condition cell', async function () {
        browser.sleep(2000)
        await RFVModeling.RFVConditionCells.then(async function (items) {
            log.info('length of cells' + items.length)
            for (var i = 0; i < items.length; i++) {
                await browser.actions().doubleClick(items[i]).perform().then(async function () {
                    log.info('clicked on the fist element');
                    browser.sleep(1000)
                    let condition = EC.presenceOf(RFVModeling.cellpopup);
                    browser.wait(condition, 3000);
                    await RFVModeling.ConditionFTOperand.sendKeys(data1.Conditions).then(async function () {
                        browser.sleep(500)
                        log.info('Keys entered and entered the Enter button  code')
                       await RFVModeling.ConditionFTOperand.sendKeys(protractor.Key.ENTER);
                        log.info('Enter button clicked')
                        browser.sleep(1000)
                    })
                })
            }
        })
    });

    it('should Create diagonal ', function () {
        try {


            browser.actions().mouseMove(RFVModeling.FirstRowCreatediagonal).click(protractor.Button.RIGHT).perform().then(function () {
                log.info('Right click Succesfull');
                RFVModeling.CreateDiagonallink.click();
                log.info('Created diagonal elements');
            })

            browser.sleep(5000)
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });
    it('should Enter in the Conclusion cells', function () {
        browser.sleep(2000)
        RFVModeling.RFVConclusionCells1.then(function (items) {

            for (var i = 0; i < items.length; i++) {
                browser.actions().doubleClick(items[i]).perform().then(async function () {
                    log.info('Clicked on conclusion cell');
                    let condition = EC.presenceOf((RFVModeling.ConclusionOperandTextrea));
                    browser.wait(condition, 3000);
                    browser.sleep(2000)
                    await RFVModeling.ConclusionOperandTextrea.sendKeys(data1.Conclusions1).then(function () {
                        log.info('Keys Entered in Conclusion cell')
                        RFVModeling.ConclusionOperandTextrea.sendKeys(protractor.Key.ENTER);
                        log.info('Enter button clicked after conclusion')
                    })

                })
            }

        })
        RFVModeling.RFVConclusionCellsAlt.then(async function (items) {
            for (var i = 0; i < items.length; i++) {
                await browser.actions().doubleClick(items[i]).perform().then(async function () {
                    log.info('Clicked on conclusion cell');
                    let condition = EC.presenceOf((RFVModeling.ConclusionOperandTextrea));
                    browser.wait(condition, 3000);
                    browser.sleep(2000)
                    await RFVModeling.ConclusionOperandTextrea.sendKeys(data1.Conclusion2).then(function () {
                        log.info('Keys Entered in Conclusion cell')
                        RFVModeling.ConclusionOperandTextrea.sendKeys(protractor.Key.ENTER);
                        log.info('Enter button clicked after conclusion')
                    })

                })
            }
        })


    });


    it('should Validate RFV', async function () {
        try {
            browser.sleep(1000);
            browser.waitForAngular();
            await browser.actions().mouseMove(DVModel.ValidationIcon).click().perform().then(async function () {
                log.info('clicked on the Validation icon');
                browser.sleep(1000);
                await browser.actions().mouseMove(DVModel.Validateplayicon).click().perform().then(function () {
                    log.info('clicked on validation play icon')
                    browser.waitForAngular()
                    RFVModeling.Messagedescription.then(function (msgtext) {
                        for (var i = 0; i < msgtext.length; i++) {
                            msgtext[i].getText().then(function (text1) {
                                log.info('Validation message is' + text1)
                                console.log(text1)
                                expect(text1).toBe('This Rule Family is valid.');
                            })
                        }
                    })
                    browser.sleep(5000);
                })
            })

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    it('should Perform RFV Testing', function () {
        try {
            DVModel.ValidationIcon.click().then(function () {
                browser.actions().mouseMove(DVModel.TestingIcon).click().perform().then(function () {
                    log.info('clicked on Testing')
                    DVModel.TestingInputValues.then(async function (items) {
                        log.info('length of cells' + items.length)
                        for (var i = 0; i < items.length; i++) {

                            await items[i].sendKeys(data1.TestValues)
                            browser.sleep(500)

                        }
                        DVModel.TestingPlayButton.click().then(function () {
                            let condition1 = EC.visibilityOf(DVModel.ResultsText)
                            browser.wait(condition1, 5000)
                            DVModel.ResultsText.getText().then(function (text) {
                                log.info('Testing Results= ' + text);
                                console.log('Testing Results= ' + text)
                            })

                        })
                    })

                })

            })
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

});





