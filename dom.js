var dom = (function () {
    return {
        displayButton: function () { return document.getElementById("my-button"); },
        displayButtonText: function () { return document.getElementsByTagName("btntxt")[0]; },
        resizeAnchor: function () { return document.getElementById("drag-anchor"); },
        style: function () { return document.getElementsByTagName('style')[0]; },
        save: function () { return document.getElementById('save-css'); },
        code: function () { return document.getElementById('css-code'); }
    }
})();