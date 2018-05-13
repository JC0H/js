//alert('siema rysiekę');

var f1 = function firstFunction() {
    console.log("go");

}
console.log(f1());

function secFun(a) {
    return a;
}
console.log(secFun(5));

var change = function () {
    return "change f1 function to pring 6";
}
console.log(change());

(function secfExec() {
    console.log("selfExec method");
}());

function printArray(array, calback) {
    calback(array);
}

var asc = function (p) {
    for (var i = 0; i < p.length; i++){
        console.log(p[i]);
        console.log("==========")
    }
}

printArray([1,2,3], asc);

function o() {
    var x = 0;
    function i() {
        return x++;
    }
    return i();
}
var xxx = o();
console.log(xxx);
console.log(xxx);
console.log(xxx);

console.log("--------------------NEXT PART ------------------");

var objest = {
    name:'vasya',
    age: 31,
    info: "check this ryshard"
};
console.log(objest.age);
console.log(objest['name']);

objest.f = function () {
    console.log(this.info);
};
objest.f();

var newobj = objest;
console.log(newobj);
newobj = Object.create(objest);
newobj.name = "petya";
console.log(objest);
console.log(newobj);
console.log("--------------------NEXT PART ------------------");

var Human = function (name,surname) {
    this.name = name;
    this.surname = surname;
}
var h1 = new Human("cipo}I{a");
console.log(h1);

var Person = function (name, surname) {
    Human.apply(this,arguments);
}
var  p1 = new Person("kolia",90);
console.log(p1);

var ooo = {
    name:"Tetiana",
    age : 15,
    constructor: function (name, age) {
        this.name = name;
        this.age = age;
    }
}
ooo.constructor('Vasa', 45);
console.log(ooo);

var uuu = {

}
uuu.constructor = function (name, age) {
    ooo.constructor.apply(this, arguments);
}
uuu.constructor("uuu Vasa", 45);
console.log(uuu);

Person.prototype.asd = 'asd';
console.log(p1.asd);

var sss = prompt("message");






















