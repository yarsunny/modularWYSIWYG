var main = (function () {
    return {
        changeUI: function () {
            var css = utilities.createCss(data, true);
            //change style tag 
            dom.style().innerHTML = css;
            dom.displayButtonText().innerHTML = data["text"];
            dom.code().innerHTML = css;
        },
        loadSavedButtons: function () {
            var buttons = [];
            if (cookie.check('cookieCache')) {
                var buttons = JSON.parse(cookie.get('cookieCache'))["buttons"];
                globals.buttonCount = buttons.length;
                for (var i = 0; i < globals.buttonCount; i++) {
                    utilities.addButton(buttons[i]);
                }
            }
        },
        loadDefaults: function () {
            main.changeUI(data, true);
            for (var prop in data) {
                if (prop != "id") {
                    document.getElementById(prop).value = data[prop];
                }                
            }
        }
    }
})();

main.loadDefaults();
main.loadSavedButtons();


