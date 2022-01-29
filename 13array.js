//Array is a collection of homegenious or hetrogenious data type

var a = [1, 3, 5, 6, 3] //(array of number)
var b = ['dsg', 'wey', 'egew', 'eger'] //(array of string)
var c = [true, false, false, true, true] //(array of Boolean)

var d = [3, 4, 'dg', 'dg', true, true, 'dvds', 4, 325]

var city = ["London", "NewYork", "Paris", "Delhi"]

typeof(city)
"object"
city.length
4
city[0]
"London"
city[1]
"NewYork"
typeof(city[1])
"string"
city[city.length - 1]
"Delhi"

var city = ["London", "NewYork", "Paris", "Delhi"]
undefined
city.push('Amsterdam')
5
city
    (5)["London", "NewYork", "Paris", "Delhi", "Amsterdam"]
city.push('Dubai', 'Venice')
7
city
    (7)["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai", "Venice"]
city.pop()
"Venice"
var city = ["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.pop(3)
"Dubai"
city.pop(10)
"Amsterdam"

var city = ["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
undefined
city.unshift('Hongkong')
7
city
    (7)["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.shift()
"Hongkong"

//push > add in the end of array
//unshift > add in the begining of array
//pop > remove the last value of array
//shift > remove the first value of array

var city = ["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
undefined
city.slice(1)
    (6)["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city
    (7)["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.slice(2, 6)
    (4)["NewYork", "Paris", "Delhi", "Amsterdam"]

var city = ["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.splice(startindex, deletecount, values)

var city = ["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.splice(2, 0, 'Mumbai', 'Nice')

var city = ["Hongkong", "London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.splice(2, 0, 'Mumbai', 'Nice')[]
city
    (9)["Hongkong", "London", "Mumbai", "Nice", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.splice(3, 1)["Nice"]
city
    (8)["Hongkong", "London", "Mumbai", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai"]
city.splice(2, 3, 'Pune')
    (3)["Mumbai", "NewYork", "Paris"]
city
    (6)["Hongkong", "London", "Pune", "Delhi", "Amsterdam", "Dubai"]


var a = ['a', 'b', 'c', 1]
var b = [1, 2, 3]
a + b //"a,b,c,11,2,3"

a.concat(b)
    (7)["a", "b", "c", 1, 1, 2, 3]

var myarr = ["Hongkong", "London", ['Red', ['Kia', 'Skoda', 'BMW'], 'Yellow', 'Green'], "Pune", "Delhi", "Amsterdam", "Dubai"]
undefined
myarr[0]
"Hongkong"
myarr[2]
    (4)["Red", Array(3), "Yellow", "Green"]
myarr[2][0]
"Red"
myarr[2][1]
    (3)["Kia", "Skoda", "BMW"]
myarr[2][1][2]
"BMW"
myarr[1][1][2]
undefined
myarr[2][1][2]
"BMW"
myarr[2][1][0]

var myarr = ["Hongkong", "London", ['Red', ['Kia', 'Skoda', 'BMW'], 'Yellow', 'Green'], "Pune", "Delhi", "Amsterdam", "Dubai"]

myarr.flat()
    (10)["Hongkong", "London", "Red", Array(3), "Yellow", "Green", "Pune", "Delhi", "Amsterdam", "Dubai"]
myarr.flat(2)
    (12)["Hongkong", "London", "Red", "Kia", "Skoda", "BMW", "Yellow", "Green", "Pune", "Delhi", "Amsterdam", "Dubai"]

var city = ["Hongkong", "London", "Pune", "Delhi", "Amsterdam", "Dubai"]
undefined
city.indexOf('London')
1
city.indexOf('Hongkong')
0
city.indexOf('Pune')
2
city.indexOf('Helsinki') -
    1
city.indexOf('Mumbai') -
    1

var a = "hi"
var b = ["hi"]

Array.isArray(a)
false
Array.isArray(b)
true

var city = ["Hongkong", "london", 1, 4, "Pune", 3, "Delhi", true, "amsterdam", false, "Dubai", 8]
undefined
city.sort()
    (12)[1, 3, 4, 8, "Delhi", "Dubai", "Hongkong", "Pune", "amsterdam", false, "london", true]
var city = ["Hongkong", "London", "Pune", "Delhi", "Amsterdam", "Dubai"]
undefined
city.sort()
    (6)["Amsterdam", "Delhi", "Dubai", "Hongkong", "London", "Pune"]
var city = ["Hongkong", "london", 1, 4, "Pune", 3, "Delhi", true, "amsterdam", false, "Dubai", 8, -1, -3]
undefined
city.sort()
    (14)[-1, -3, 1, 3, 4, 8, "Delhi", "Dubai", "Hongkong", "Pune", "amsterdam", false, "london", true]

city.reverse()
    (14)[true, "london", false, "amsterdam", "Pune", "Hongkong", "Dubai", "Delhi", 8, 4, 3, 1, -3, -1]