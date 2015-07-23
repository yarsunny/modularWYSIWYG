var resize = (function () {
    return {
        initDrag: function (e) {
            globals.startX = e.clientX;
            globals.statrY = e.clientY;
            globals.startWidth = parseInt(getComputedStyle(dom.displayButton()).width);
            globals.startHeighth = parseInt(getComputedStyle(dom.displayButton()).height);
            document.documentElement.addEventListener('mousemove', resize.doDrag, false);
            document.documentElement.addEventListener('mouseup', resize.stopDrag, false);
        },
        doDrag: function (e) {
            var tWidth = (globals.startWidth + e.clientX - globals.startX);
            var tHeight = (globals.startHeight + e.clientY - globals.startY);

            if (tWidth <= globals.maxHWR && tHeight <= globals.maxHWR) {
                data['height'] = tHeight;
                data['width'] = tWidth;
            }
            main.changeUI(data, true);
            document.getElementById('width').value = data['width'];
            document.getElementById('height').value = data['height'];
        },
        stopDrag: function (event) {
            document.documentElement.removeEventListener('mousemove', resize.doDrag, false);
            document.documentElement.removeEventListener('mouseup', resize.stopDrag, false);
        }
    }
})();