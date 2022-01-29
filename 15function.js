var a = 10
var b = 20
a + b
30
//////////
//function
//method
//arrow function
//IFFI
//Generator
////////

///functions////
function add(a, b) {
    return a + b
}

add(1, 2)
3
add(4, 5)
9
add('a', 'b')
"ab"

////////////
function isEven(userInput) {
    var out;
    if (userInput % 2 == 0) {
        out = `Number ${userInput} is even`
    } else {
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
"Number 5 is odd"
isEven(4)
"Number 4 is even"
isEven('aa')
"Number aa is odd"


///////
function test(a, b) {
    return a, b
}
undefined
test(1, 2)
2

function test(b, a) {
    return b, a
}

test(2, 1)
1
test(1, 2)
2

function test(b, a) {
    var out = [b, a]
    return out
}

test(2, 1)
    (2)[2, 1]


//////Rest/////
function sum(...args) {
    console.log(args)
}

sum(4, 5, 3, 6, 8, 9)[4, 5, 3, 6, 8, 9]

function sum(...args) {
    let sum = 0;
    for (data of args) {
        sum = data + sum
    }
    return sum
}

sum(3, 4.4, 43, 46, 457, 8)
561.4

/////////Method//////
var add = function(a, b) {
    return a + b
}

add(1, 2)
3

////////arrow////
let add = (a, b) => { return a + b }
add(1, 2)