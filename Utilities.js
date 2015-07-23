var utilities = (function () {
    var list;
    return {
        addEventListenerByTag: function (tag, event, fn) {
            list = document.querySelectorAll(tag);
            for (var i = 0, len = list.length; i < len; i++) {
                list[i].addEventListener(event, fn, false);
            }
        },
        createCss: function (d, isdisplayButton) {
            var css;
            css = isdisplayButton ? "#my-button { " : "#my-button" + d.id + " { ";
            css += " width: " + d.width + "px ; height: " + d.height + "px ; background-color: " + d.backgroundColor + "; ";
            css += " font-family: " + d.fontFamily + "; font-size: " + d.fontSize + "px ; font-weight: " + d.fontWeight + "; color: " + d.color + "; ";
            css += " background: -webkit-gradient(linear, left top, left bottom, from(" + d.backgroundTop + "), to(" + d.backgroundBottom + ")); ";
            css += " background: -moz-linear-gradient(top, " + d.backgroundTop + ", " + d.backgroundBottom + "); ";
            css += "  padding: " + d.paddingTop + "px " + d.paddingRight + "px " + d.paddingBottom + "px " + d.paddingLeft + "px ; ";
            css += " border-top: " + d.border + "px solid " + d.borderTop + " ; border-right: " + d.border + "px solid " + d.borderRight + " ; ";
            css += " border-bottom: " + d.border + "px solid " + d.borderBottom + " ; border-left: " + d.border + "px solid " + d.borderLeft + " ; ";
            css += " -webkit-border-radius: " + d.borderRadius + "px ; -moz-border-radius: " + d.borderRadius + "px ; border-radius: " + d.borderRadius + "px ; } ";
            css += isdisplayButton ? "#my-button:hover { " : " #my-button" + d.id + ":hover { ";
            css += " background: " + d.hoverBackground + " ; color: " + d.hoverColor + " ; border: 1px solid " + d.hoverBackground + " ;} ";
            css += isdisplayButton ? "#my-button:active { " : " #my-button" + d.id + ":active { ";
            css += " background: " + d.activeBackground + " ; color: " + d.activeColor + " ; border: 1px solid " + d.activeBackground + " ;  } ";
            return css;
        },
        addButton: function (curBtn) {
            var css = utilities.createCss(curBtn, false);
            var btn = document.createElement("BUTTON");btn.setAttribute("code", css);btn.className = "savedButton";btn.id = "my-button" + curBtn["id"];
            btn.addEventListener('click', function () {
                var code = this.getAttribute("code");
                document.getElementById("modal").click();
                document.getElementById("dialogCssCode").innerHTML = code;
            }, false);
            var txt = document.createTextNode(curBtn['text']);btn.appendChild(txt);
            document.getElementById('div-history').appendChild(btn);
            var sty = document.createElement("style");
            sty.className = "my-button" + curBtn["id"];sty.type = "text/css";sty.innerHTML = css;
            document.getElementsByTagName("head")[0].appendChild(sty);
        },
    }
})();
