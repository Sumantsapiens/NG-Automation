'use strict';
var Canvasmove = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
var home = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
var Task = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
var logger = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
var DVModel = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
var RFVModeling = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\RFVModel.js');
var log = logger.LOG;

let EC = ExpectedConditions;

browser.ignoreSynchronization = true;
/*
describe('Create new decision', function () {


        it("Click on Start new decision button",async function f() {


            let condition = EC.urlContains("http://bdmsuat7:18821/enterprise/index.html#/home")
            browser.wait(condition, 5000);
            await home.StartNewdecision.click();
            log.debug("testing the debug log here....................");



        });
        browser.sleep(5000);
    it("Select community",function f() {
        let Newcond = EC.presenceOf(home.communityname);

        browser.wait(Newcond, 5000);
        home.CommunityTextarea.sendKeys('sumant');
        browser.sleep(2000)
        home.CommunityTextarea.sendKeys(protractor.Key.ENTER);
        browser.sleep(2000)
    });

    it("Select taskname",function f() {
       expect(home.TaskName.isEnabled);
        if (home.TaskName.isEnabled()) {
            home.TaskName.sendKeys('Taskt12');
            browser.sleep(1000)
            home.TaskName.sendKeys(protractor.Key.ENTER);

        } else {
            console.log('task Not displayed')
        }
    });

    browser.sleep(3000)
    it('Should Select Decision Name ', function () {

        home.decisionname.sendKeys('Decin1');
        browser.sleep(1000)
        home.decisionname.sendKeys(protractor.Key.ENTER);
        browser.sleep(3000)
    });

    it('should select view', function () {

        let Viewdrop = EC.presenceOf(home.Viewdropdwn);

        browser.wait(Viewdrop, 5000);
        home.Viewdropdwn.click();

      //  home.Viewname.sendKeys("Base");
        browser.sleep(1000)
        home.Viewname.sendKeys(protractor.Key.ENTER);
        browser.sleep(2000)
    });
    it('should Select folder', function () {
       home.folderdropdown.click();
        browser.sleep(2000);
        home.foldertextarea.sendKeys(protractor.Key.ENTER);


    });
    it('should Click on Ok button', function () {

        home.Clickok.click();
        browser.sleep(5000);
    });

    it('should Click on Tasks', function () {
        browser.sleep(4000)
        Task.RepositoryTab.click();
    });
});*/


describe('Navigate to Task Model DV , Validate and Test', function () {

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
/*
    it('should Select decision Link', function () {
        try {


            Task.DecisionLink.click();
            log.info("Decision Selected Successfully")
            browser.sleep(2000);
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

                it('Should Click on Decision ', async function () {
                    try {

                         var actions = browser.actions();
                       return  actions.mouseMove(DVModel.canvaspage,{x: 675, y: 10}).click().perform();
                        log.info("Moved to element and clicked on Decision");
                    } catch (e) {
                        console.log("", e);
                        log.error(e.message, e);
                    }
                });

                it('should Enter the FTname from DV diagram', function () {
                    try {
                        browser.sleep(3000)
                        let condition = EC.presenceOf(DVModel.CreateFT1);
                        browser.wait(condition, 5000);
                        DVModel.CreateFT1.sendKeys('FT1').then(function () {
                            log.info('1.Entered the text in text box')
                            browser.sleep(5000)
                        }).then(function () {
                            DVModel.CreateFT1.sendKeys(protractor.Key.ENTER);
                            log.info('Clicked Enter button')
                        })

                    } catch (e) {
                        console.log("", e);
                        log.error(e.message, e);
                    }

                })
                it('should Create new FT FT2', function () {
                    try {
                        browser.sleep(3000)
                        let condition = EC.presenceOf(DVModel.CreateFT1);
                        browser.wait(condition, 5000);
                        DVModel.CreateFT1.sendKeys('FT2').then(function () {
                            log.info('2.Entered the text in text box')
                            browser.sleep(5000)
                        }).then(function () {
                            DVModel.CreateFT1.sendKeys(protractor.Key.ENTER);
                            log.info('Clicked Enter button')
                        })
                    } catch (e) {
                        console.log("", e);
                        log.error(e.message, e);
                    }
                })


                it('should Create new FT FT3', function () {
                     try {
                    browser.sleep(3000)
                    let condition = EC.presenceOf(DVModel.CreateFT1);
                    browser.wait(condition, 5000);
                    DVModel.CreateFT1.sendKeys('FT3').then(function () {
                        log.info('3.Entered the text in text box')
                        browser.sleep(5000)
                    }).then(function () {
                        DVModel.CreateFT1.sendKeys(protractor.Key.ENTER).then(function () {
                            log.info('Clicked Enter button')
                        })

                    })
                } catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });


            it('Should Open Decision ', async function () {
                try {
                    var actions = browser.actions();
                    return  actions.mouseMove(DVModel.canvaspage,{x: 675, y: 10}).doubleClick().perform();
                    RFVModeling.RFVPageDisplay.isDisplayed().then(function () {
                        console.log('Opened the DV')
                    })

                    log.info("Moved to element and Double clicked on Decision");

                } catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });

            it('should Click on Condition cell', function () {
                        browser.sleep(5000)
                        RFVModeling.RFVConditionCells.then(function (items) {
                        log.info('length of cells'+items.length)
                           for (var i=0;i<items.length;i++)
                           {
                               browser.actions().doubleClick(items[i]).perform().then(function () {
                                   log.info('clicked on the fist element');
                                   let condition = EC.presenceOf(RFVModeling.cellpopup);
                                   browser.wait(condition, 3000);
                                   RFVModeling.ConditionFTOperand.sendKeys('1').then(function () {
                                       log.info('Keys entered and entered the Enter button  code')
                                       RFVModeling.ConditionFTOperand.sendKeys(protractor.Key.ENTER);
                                       log.info('Enter button clicked')
                                       browser.sleep(2000)
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
                    browser.sleep(5000)
                  await  RFVModeling.ConclusionOperandTextrea.sendKeys('0').then(function () {
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
                    browser.sleep(5000)
                   await RFVModeling.ConclusionOperandTextrea.sendKeys('0').then(function () {
                        log.info('Keys Entered in Conclusion cell')
                        RFVModeling.ConclusionOperandTextrea.sendKeys(protractor.Key.ENTER);
                        log.info('Enter button clicked after conclusion')
                    })

                })
            }
        })


    });

*/
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
                                    for (var i=0;i<msgtext.length;i++)
                                    {
                                        msgtext[i].getText().then(function (text1) {
                                            log.info('Validation message is'+text1)
                                            console.log(text1)
                                            expect(text1).toBe('This Rule Family is valid.');
                                        })
                                    }
                               })
                                    browser.sleep(5000);
                                })
                            })

                        }catch (e) {
                            console.log("", e);
                            log.error(e.message, e);
                        }
                    });

            it('should Perform RFV Testing', function () {
                try {
                                DVModel.ValidationIcon.click().then(function () {
                                    browser.actions().mouseMove(DVModel.TestingIcon).click().perform().then(function () {
                                        log.info('clicked on Testing')
                                        DVModel.TestingInputValues.then(function (items) {
                                            log.info('length of cells'+items.length)
                                            for (var i=0;i<items.length;i++)
                                            {
                                                items[i].sendKeys('2')

                                            }
                                            DVModel.TestingPlayButton.click().then(function () {
                                                let condition1=EC.visibilityOf(DVModel.ResultsText)
                                                browser.wait(condition1,5000)
                                                DVModel.ResultsText.getText().then(function (text) {
                                                    log.info('Results= '+text);
                                                    console.log('Results= '+text)
                                                })

                                            })
                                        })

                                    })

                                })
                }catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });

});





