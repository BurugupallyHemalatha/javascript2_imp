//local scope
//global Scope
// enclose something
/*
var a = 10
function add(){
    var b = 20
    return a+b
}
console.log("sum>>>",add())
console.log("a>>>",a)
console.log("b>>>",b)*/

// variable that can be access outside the curly bracket and inside also that is in global scope
// variable that can be access only inside the curly bracket is in local scope


var a = 10
for (i = 0; i < 5; i++) {
    let b = 20;
    console.log(a + b + i)
}

console.log("a>>>", a)
console.log("b>>>", b)