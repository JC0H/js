console.log("hello");

function greet() {
    console.log("greet");
}


function greet(name) {
    console.log(name + " hello");
}
greet();
greet();

greet("vasya");

function asd(a,b,c,d) {
    console.log(arguments)
}

asd(1,2,3,3,'one');

var f = function () {
    console.log("anon sunction");
}

console.log(f());
console.log(asd());

var calc = function (a,b) {
    return a+b;
}

function foo(something) {
    something();
}

foo(f);

var bar = function (param, callback) {
    callback(param);
}

bar("hello", function (x) {
    console.log(x);
})

function outer() {
    var innerVar = 100;

    function innerFunc() {
        return --innerVar;
    }

   return innerVar;

}

var work = outer;
console.log(work);





