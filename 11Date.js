Date()
"Mon Apr 05 2021 20:52:13 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a
/////Mon Apr 05 2021 20:52:29 GMT+0530 (India Standard Time)
a.getDate()
5
a.getDay()
1
a.getMonth()
3
a.getFullYear()
2021

//> day start with 1 as monday and 0 as sunday
//> month 0 as jan and 11 as dec 

var date = new Date();
date.toLocaleDateString('default', { month: 'long' })