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
describe('Navigate Task and Create FT(s)',function () {

    it('should Click on Task Tab', function () {
        try {
            Task.TaskTab.click();
            log.info('Clicked on task tab');
        }catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }})
    it('should Select a task from list of tasks', function () {
        try {
            Task.tasklink.click();
            log.info("Task has been seleceted");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }});
    it('should Select Fact type tab from tasks', function () {
        try {
            Task.FacttypeTab.click();
            log.info("Facttype Tab Clicked");

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }})
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

            await Task.FTnameTextarea.sendKeys('FTAuto').then(function () {
                log.info("Entered FT name");
                browser.sleep(2000);
            })

        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }});
    it('should Select Data type', function () {
        try {
            var i;
            var Drop= element.all(by.css('*[aria-label=\'Toggle Dropdown\']'));

            var Dropdownlength = Drop.count();
            console.log(Dropdownlength);
            for(i=0;i<=Dropdownlength;i++)
            {
                if (i=1)
                {
                    Task.CommonDropDownFTscreen.click();
                }


            }


        } catch (e) {
            console.log("", e);
            log.error(e.message, e);
        }});






});