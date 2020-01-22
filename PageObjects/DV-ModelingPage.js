//var data = require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
function DVModeling() {


    this.DecnConFTTab=element(by.xpath('//*[@class=\'wj-cell wj-header conclusionHeader\']'));
    this.InsertColumn=element(by.linkText('Insert Column'));
    this.Column1=element(by.xpath('//*[@class="wj-cell wj-header"][1]'));
    this.CreateFT1=element(by.css('*[type=text]'));
    this.CreateFT2=element(by.xpath('//*[@placeholder="fact type name"]'));
    //this.ConclunRightclicklist=browser.findElements(by.className="ng-star-inserted ui-menuitem ui-corner-all");
};
module.exports=new DVModeling();