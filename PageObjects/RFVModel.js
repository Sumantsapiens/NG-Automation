function RFVModel() {


    this.ConditionFTOperand=element(by.xpath('//*[@class="ng-star-inserted"]/input[@type=\'text\']'));

    this.RFVConditionCells=element.all(by.css('*[class=\'wj-cell dt_condition_cell\']')).all(by.css('*[class=\'decision-table__condition-cell--normal ng-star-inserted\']'));
    this.RFVPageDisplay=element(by.id('gridWrapper'));
    this.Rfvfirstcell=element(by.css('*[class=\'wj-cell dt_condition_cell\']'));
    this.cellpopup=element(by.css('*[class="cell-popup__content"]'));
    this.RFVname=element(by.linkText('Decin1 (View: Blue) [V0]'));
    this.RFVTab=element(by.className('navigation-menu__item u-flex-child--static navigation-menu__item__ruleFamilies ng-star-inserted'));
    this.RFVConclusioncell=element(by.xpath('//*[@class=\'decision-table__conclusion-cell--stretch ng-star-inserted\']'));
    this.ConclusionOperand=element(by.xpath('//*[@class="wj-cell dt_conclusion_cell"]/input[@class=\'wj-grid-editor wj-form-control\']'));
    this.FirstRowCreatediagonal=element(by.xpath('//*[@class="content-padding decision-table__row--normal ng-star-inserted"]'));
    this.rightclickelements=element.all(by.css('.ui-menu-list li'));
    this.ConclusionOperandTextrea=element(by.xpath('//*[@class=\'cell-popup__operand\']//*[@type=\'text\']'));
    this.Messagedescription=element.all(by.xpath('//*[@ng-reflect-klass="sidebar-container__validation-"]'));
    this.CreateDiagonallink=element(by.xpath('//*[@title=\'Creates additional rows with opposite logic\']'));
    this.RFVConclusionCellsAlt=element.all(by.xpath('//*[@class="wj-cell wj-alt dt_conclusion_cell"]//*[@class="decision-table__conclusion-cell--stretch ng-star-inserted"]'))
    this.RFVConclusionCells1=element.all(by.xpath('//*[@class="wj-cell dt_conclusion_cell"]//*[@class="decision-table__conclusion-cell--stretch ng-star-inserted"]'))
};
module.exports=new RFVModel();