
var canvasElement= element(by.id('godiagram'));
    function Movemousetocanvas (canvasElement) {


    browser.actions().mouseMove(canvasElement, { x: 50, y: 50 }).perform()
        .then(() => actions.mouseDown(canvasElement).perform())
        .then(() => actions.mouseMove(canvasElement, { x: 250, y: 250 }).perform())
        .then(() => actions.mouseUp(canvasElement).perform());
return Movemousetocanvas;
    }
