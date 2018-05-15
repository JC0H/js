window.onload = function () {
    var a = document.getElementById('a');

    function absCords(elem) {
        return{
            left: elem.getBoundingClientRect().left + pageXOffset,
            top: elem.getBoundingClientRect().top + pageYOffset
        }
    }

    a.onmousedown = function (emd) {
        a.style.position = "absolute";
        var shiftTop = emd.pageY - absCords(this).top;
        var shiftLeft = emd.pageX - absCords(this).left;
        document.onmousemove = function (emm) {
            a.style.top = emm.pageY - shiftTop + 'px';
            a.style.left = emm.pageX - shiftLeft + 'px';
        }
    }

    a.onmouseup = function () {
        document.onmousemove = null;
    }

    var startWidth = a.offsetWidth;
    /*slider*/

    var counter = 1;
    var row = document.getElementById('row');
    var tumbler = document.getElementById('tumbler');
    tumbler.onmousedown = function (emd) {
        var shiftX = emd.pageX - absCords(this).left;
        var parentShift = absCords(row).left;
        var parentWidth = row.offsetWidth;
        document.onmousemove = function (emm){
            var tumblerPosition = emm.pageX - shiftX - parentShift;
            counter = tumblerPosition/parentWidth*100;
            console.log(counter);
            if (tumblerPosition < 0) tumblerPosition = 0;
            var rightSideEdge = parentWidth - tumbler.offsetWidth;
            if (tumblerPosition > rightSideEdge) tumblerPosition = rightSideEdge;

            tumbler.style.marginLeft = tumblerPosition + 'px';
            if (emm.pageX > parentWidth || emm.pageX < 8)
                document.onmousemove = null;
                a.style.width = startWidth + counter + 'px';

        }
    }

    tumbler.onmouseup = function () {
        document.onmousemove = null;
    }










}//onload


/*
a.ondblclick = function (e) {
    console.log(e.pageX + " " + e.pageY);
    console.log(e.screenX+ " " + e.screenY);
}*/
