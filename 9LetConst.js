/*var > we can redecalre and reassign
let > we can reassign but cannot redecalre
const > we cannot redecalre nor reassign


////////
var a =10

var a; > declare
a=10 > assignment

> var a =10
> a
10
> var a =11
> a
11
> a = 1
1
> a
1

----------------------------
> let b = 10
undefined
> b
10
> 
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b
10
> b =12
12

----------\> 
const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c=11
Uncaught TypeError: Assignment to constant variable.*/