var idA = document.getElementById('a');
console.log(idA);
console.log(idA.style.background = "red");
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.getElementsByClassName('b'));

var div = document.createElement("div");
var whc = {
    constructor : function (w,h,c) {
        this.width = w + 'px';
        this.height = h + 'px';
        this.color = c;
    }
}
whc.constructor(200,200,"red");
div.style.width = whc.width;
div.style.height = whc.height;
div.style.background = whc.color;

var clonedDiv = div.cloneNode();
document.body.appendChild(div);
//document.body.appendChild(clonedDiv);

//div.onclick = function () {
    //this.style.background = "green";
    //idA.style.background = "black";
   // idA.style.position = "absolute";
    //idA.style.top = prompt("top?") + 'px';
    //idA.style.left = prompt("left?") + 'px';
//}

var width = 200;
var pCoords = document.getElementById("coords");
div.onmousemove = (emv)=>{
    idA.style.width = width + 'px';
    width++;
    console.log(emv);
    pCoords.innerHTML = emv.pageX + " " + emv.pageY;
}