//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function DVModeling() {


    this.DecnConFTTab = element(by.xpath('//*[@class=\'wj-cell wj-header conclusionHeader\']'));
    this.InsertColumn = element(by.linkText('Insert Column'));
    this.Column1 = element(by.xpath('//*[@class="wj-cell wj-header"][1]'));
    this.CreateFT = element(by.xpath('//p-autocomplete[@ng-reflect-placeholder="fact type name"]//*[@type="text"]'));
    this.CreateFT2 = element(by.xpath('//*[@placeholder="fact type name"]'));
    this.ValidationIcon = element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[1]/div/div'));
    this.Validateplayicon = element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[1]/div/div[1]/div[2]/button'));
    this.TestingIcon = element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[2]/div/div/div'));
    //this.ConclunRightclicklist=browser.findElements(by.className="ng-star-inserted ui-menuitem ui-corner-all");
    this.InputAccordian = element(by.xpath('//p-accordiontab[@ng-reflect-header="Input"]//*[@ng-reflect-klass="ui-accordion-header ui-state-d"]'));
    this.TestingInputValues = element.all(by.xpath('//dcn-testing-value[@class=\'testing-value__fact-type--persistent spec_testing-value__fact-type--persistent ng-star-inserted\']//*[@class="domain-inputs"]//input'))
    this.canvaspage = element(by.xpath('//*[@id="godiagram"]/canvas'));
    this.TestingPlayButton = element(by.xpath('//*[@id="body"]/dcn-enterprise-app/dcn-shell/div/div[2]/ng-component/div/div/dcn-decision-sidebar/div/dcn-floating-action-sidebar/span/div/dcn-floating-action-button[2]/div/div[1]/div[2]/button'));
    this.ResultsText = element(by.xpath('//*[@class="testing-value testing-value--output testing-value--readonly"]//*[@class="domain-inputs"]'));
};
module.exports = new DVModeling();