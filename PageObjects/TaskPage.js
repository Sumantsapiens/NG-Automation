//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function Taskpage() {
    var data = require('../Resources/Testdata.json')

    this.TaskTab = element(by.xpath('//*[@class="navigation-menu__item u-flex-child--static navigation-menu__item__tasks"]'));
    this.tasklink = element(by.partialLinkText(data.TaskName));
    this.DecisionLink = element(by.partialLinkText(data.decisionname));
    this.FacttypeTab = element(by.css('*[class=\'navigation-menu__item u-flex-child--static navigation-menu__item__factTypes ng-star-inserted\']'));
    this.RepositoryTab = element(by.xpath('//*[@class=\'navigation-menu__item u-flex-child--static navigation-menu__item__viewGroups\']'));
    this.CreateNewFTButton = element(by.xpath('//*[@class=\'task-facts__create-button\']'));
    this.FTnameTextarea = element(by.xpath('//*[@name=\'name\']'));
    this.SingleValuebutton = element(by.css('*[aria-label=\'Single Value\']'));
    this.MultiValueButton = element(by.css('*[aria-label=\'Multiple Values\']'));
    this.DataTypeDrop = element(by.xpath('//fx-field[@label=\'Data Type\']//button[@class="wj-btn wj-btn-default"]'));
    this.DisplayFormatDrop = element(by.xpath('//fx-field[@label=\'Display Format\']//button[@class="wj-btn wj-btn-default"]'));
    this.AllowedValues = element(by.xpath('//fx-field[@label=\'Allowed Values\']//button[@class="wj-btn wj-btn-default"]'));
    this.FTOkButton = element(by.buttonText('OK'));
    this.DatatypeList = element.all(by.xpath('//*[@id="_dropdown"]//*[@class="wj-listbox-item"]'));
    this.DatatypeTextarea = element(by.xpath('//fx-field[@label="Data Type"]//*[@type="text"]'))
}

module.exports = new Taskpage();
