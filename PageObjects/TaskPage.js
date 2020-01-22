//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function Taskpage() {

    this.TaskTab=element(by.xpath('//*[@class="navigation-menu__item u-flex-child--static navigation-menu__item__tasks"]'));
    this.tasklink = element(by.partialLinkText('Taskt12'));
    this.DecisionLink=element(by.partialLinkText('Decin1'));
    this.FacttypeTab=element(by.css('*[class=\'navigation-menu__item u-flex-child--static navigation-menu__item__factTypes ng-star-inserted\']'));
    this.RepositoryTab=element(by.xpath('//*[@class=\'navigation-menu__item u-flex-child--static navigation-menu__item__viewGroups\']'));
    this.CreateNewFTButton=element(by.xpath('//*[@class=\'task-facts__create-button\']'));
    this.FTnameTextarea=element(by.xpath('//*[@name=\'name\']'));
    this.SingleValuebutton=element(by.css('*[aria-label=\'Single Value\']'));
    this.MultiValueButton=element(by.css('*[aria-label=\'Multiple Values\']'));
    this.CommonDropDownFTscreen=element.all(by.xpath('//*[@class=\'wj-input-group-btn\']'));
};
module.exports=new Taskpage();