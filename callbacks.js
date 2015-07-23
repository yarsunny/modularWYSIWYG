var callbacks = (function () {
    return {
        setData: function () {
            data[this.id] = this.value;
            main.changeUI();
        },
        save: function () {
            var buttons = [];
            //save it to the cookie
            if (cookie.check('cookieCache')) {
                buttons = JSON.parse(cookie.get('cookieCache'))["buttons"];
                globals.buttonCount = buttons.length;
            }
            data.id = globals.buttonCount;
            buttons.push(data);
            cookie.set('cookieCache', JSON.stringify({
                'buttons': buttons
            }), 1);

            ///append it to UI
            utilities.addButton(data);

            //hack when cookie isnt supported 
            if (!cookie.check('cookieCache')) {
                globals.buttonCount += 1;

            }
        }
    }
})();