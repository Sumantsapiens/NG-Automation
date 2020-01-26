'use strict';
var Canvasmove=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Mouseaction.js');
var home=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Homepage.js');
var Task=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\TaskPage.js');
var logger= require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Logger.js');
var DVModel=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\DV-ModelingPage.js');
var RFVModeling=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\RFVModel.js');
var log=logger.LOG;

let EC = ExpectedConditions;

browser.ignoreSynchronization=true;
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
            browser.sleep(4000);
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }

    });
    /*
    it('should click on the RFV TAB', function () {

        try {
            let Newcond = EC.presenceOf(RFVModeling.RFVTab);

            browser.wait(Newcond, 5000);
            RFVModeling.RFVTab.click().then(function () {
browser.sleep(5000);
                log.info('Clicked on RFV Tab');
            })

        }catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });
    it('should click on the RFV Link', function () {

        try {
            let Newcond = EC.presenceOf(RFVModeling.RFVname);

            browser.wait(Newcond, 5000);
            RFVModeling.RFVname.click();
            log.info('clicked on RFV name')

        }catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });*/

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
                actions.mouseMove({x: 675, y: 170}).click().perform();
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
                DVModel.CreateFT1.sendKeys(protractor.Key.ENTER);
                log.info('Clicked Enter button')
            })
        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });

    it('Should Open Decision ', async function () {
        try {

            var actions = browser.actions();
            actions.mouseMove({x: 700, y: 170}).doubleClick().perform();
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
                           })
                       })

                   }

               })




    });


    /*

        it('should Click on validate button', function () {
                try {
                    DVModel.ValidationIcon.click();
                    log.info('clicked on the Validation icon')

                }catch (e) {
                    console.log("", e);
                    log.error(e.message, e);
                }
            });
    it('should Click on the validation play button', function () {
        try {
            let condition = EC.presenceOf(DVModel.Validateplayicon);
            browser.wait(condition, 5000);
            DVModel.Validateplayicon.click();
            log.info('Clicked on play button')

        }catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }
    });*/


});





