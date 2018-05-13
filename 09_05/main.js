//var form = document.getElementsByName("f1")[0];
//var inputName = document.getElementsByName("username")[0];
//var btn = document.getElementsByName('btn')[0];
//btn.onclick = () => {
//    console.log(inputName.value);
//}

var form = document.forms.f1;
console.log(form);
var inputs = form.elements;
console.log(inputs);
var userNameInputs = inputs.username;
console.log(userNameInputs);

var f2 = document.forms.f2;
var select = f2.sel;
var opions = select.options;
