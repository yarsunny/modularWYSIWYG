(function () {
    utilities.addEventListenerByTag('input[type=number]', 'keyup', callbacks.setData);   //input type number - keyup event
    utilities.addEventListenerByTag('input[type=color]', 'input', callbacks.setData);    //input type color - input event
    utilities.addEventListenerByTag('input[type=text]', 'keyup', callbacks.setData);     //input type text - keyup event
    utilities.addEventListenerByTag('select', 'change', callbacks.setData);              //select - change event
    dom.save().addEventListener('click', callbacks.save, false);                         //save button - click
    dom.resizeAnchor().addEventListener('mousedown', resize.initDrag, false);
})();