function Homepage() {

    this.StartNewdecision = element(by.buttonText('Start a New Decision'));
    this.communityname = element(by.className('ui-autocomplete-dropdown ng-tns-c14-6 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted'));
    this.Communitylist = $$('.ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset li');
    this.CommunityTextarea = element(by.className('ng-tns-c14-6 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted'));
    this.TaskName = element(by.xpath('//*[@class="ng-tns-c14-7 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.Description = element(by.xpath('//*[@class="spec-description ng-pristine ng-valid ng-touched"]'));
    this.decisionname = element(by.xpath('//*[@class="ng-tns-c14-5 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.Viewname = element(by.xpath('//*[@class="ng-tns-c14-3 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.Viewdropdwn = element(by.xpath('//*[@class="ui-autocomplete-dropdown ng-tns-c14-3 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"]'));
    this.folderdropdown = element(by.xpath('//button[@class="ui-autocomplete-dropdown ng-tns-c14-4 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"]'));
    this.foldertextarea = element(by.xpath('//*[@class="ng-tns-c14-4 ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted"]'));
    this.Clickok = element(by.buttonText('OK'));
}


module.exports = new Homepage();
