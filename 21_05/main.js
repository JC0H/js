window.onload = function () {
    var id = setInterval(() => {
       console.log("done");
    },500);
    console.log(id);
    clearInterval(id);
    setTimeout(() => {
        console.log("timeout");
    }, 1000);

    var a = document.getElementById("a");
    /*a.onclick = function () {
        console.log(this);
    }*/

   /* a.onclick = () => {
        console.log(a);
    }*/

   a.onmousedown = () =>{
       a.style.width = "400px";
       console.log("+");
    }

    a.onmouseup = function (){
       a.style.width = "200px";
    }

    a.onmouseover = () =>{
       a.style.transform = "rotate(45deg)";
       a.style.transition = "1s";
    }

    a.onmouseout = function (e) {
        this.style.transform = "";
        this.style.transition = "2s";
        console.log(e.target); 
    }

    var rgb = {
        r:0,
        g:0,
        b:0
    }

    a.onmousemove = function (e) {
        rgb.r = e.clientX;
        rgb.g = e.clientX;
        rgb.b = e.clientY;
        this.style.background = "rgb("+rgb.r+","+rgb.g+","+rgb.b+")";
    }

    var input = document.getElementById("init");
    var p = document.getElementsByTagName("p")[0];
    input.oninput = ()=>{
        p.innerHTML = input.value;
        a.style.width = input.value+"px";
    }

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", ()=>{
        var b = document.getElementById("b");
        b.style.position = "absolute";
        b.style.background = "blue";
        b.style.top = 0;
        var yOffSet = 0;
        var intId = setInterval(()=>{
            if(yOffSet < 500){
                b.style.top  = yOffSet+'px';
                yOffSet += 10;
            }else{
                clearInterval(intId);
            }

        }, 100);
    })
}
