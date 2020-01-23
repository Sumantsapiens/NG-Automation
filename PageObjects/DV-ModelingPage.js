//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function DVModeling() {


    this.DecnConFTTab=element(by.xpath('//*[@class=\'wj-cell wj-header conclusionHeader\']'));
    this.InsertColumn=element(by.linkText('Insert Column'));
    this.Column1=element(by.xpath('//*[@class="wj-cell wj-header"][1]'));
    this.CreateFT1=element(by.css('*[class="ng-tns-c14-2 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.CreateFT2=element(by.xpath('//*[@placeholder="fact type name"]'));
    this.ValidationIcon=element(by.css('*[label="Validation"]'));
    this.Validateplayicon=element(by.css('*[class="floating-action-button__run-button u-flex-container u-justify--center u-align-items--center spec-floating-action-button__run-button ng-star-inserted"]'));
    this.TestingIcon=element(by.css('*[label="Testing"]'));
    //this.ConclunRightclicklist=browser.findElements(by.className="ng-star-inserted ui-menuitem ui-corner-all");
};
module.exports=new DVModeling();