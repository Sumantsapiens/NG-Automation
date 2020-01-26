function RFVModel() {


    this.ConditionFTOperand=element(by.xpath('//*[@class="ng-star-inserted"]/input[@type=\'text\']'));

    this.RFVConditionCells=element.all(by.css('*[class=\'wj-cell dt_condition_cell\']')).all(by.css('*[class=\'decision-table__condition-cell--normal ng-star-inserted\']'));
    this.RFVPageDisplay=element(by.id('gridWrapper'));
    this.Rfvfirstcell=element(by.css('*[class=\'wj-cell dt_condition_cell\']'));
    this.cellpopup=element(by.css('*[class="cell-popup__content"]'));
    this.RFVname=element(by.linkText('Decin1 (View: Base) [V0]'));
    this.RFVTab=element(by.className('navigation-menu__item u-flex-child--static navigation-menu__item__ruleFamilies ng-star-inserted'));
};
module.exports=new RFVModel();