//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function DVModeling() {


    this.DecnConFTTab=element(by.xpath('//*[@class=\'wj-cell wj-header conclusionHeader\']'));
    this.InsertColumn=element(by.linkText('Insert Column'));
    this.Column1=element(by.xpath('//*[@class="wj-cell wj-header"][1]'));
    this.CreateFT1=element(by.css('*[class="ng-tns-c14-2 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.CreateFT2=element(by.xpath('//*[@placeholder="fact type name"]'));
    this.ValidationIcon=element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[1]/div/div'));
    this.Validateplayicon=element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[1]/div/div[1]/div[2]/button'));
    this.TestingIcon=element(by.xpath('//*[@label="Testing"]//*[@class="floating-action-button__icon u-flex-container u-justify--center u-align-items--center icon--icon-testing "]'));
    //this.ConclunRightclicklist=browser.findElements(by.className="ng-star-inserted ui-menuitem ui-corner-all");
    this.InputAccordian=element(by.xpath('//p-accordiontab[@ng-reflect-header="Input"]//*[@ng-reflect-klass="ui-accordion-header ui-state-d"]'));
    this.TestingInputValues=element.all(by.xpath('//dcn-testing-value[@class=\'testing-value__fact-type--persistent spec_testing-value__fact-type--persistent ng-star-inserted\']//*[@class="domain-inputs"]'))
    this.canvaspage=element(by.xpath('//*[@id="godiagram"]/canvas'))
};
module.exports=new DVModeling();