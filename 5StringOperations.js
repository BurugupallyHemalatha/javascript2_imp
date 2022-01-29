var city = "lOndon";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"


var city = "lOndon";
city[0]
"l"
city[1]
"O"

//var name = "  Bhumika  "
name.length
11
name.trim()
"Bhumika"
name.trim().length
7

//case sensitive
var a = "john"
undefined
var b = "John"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var a = "  Bhumika . "
undefined
a.trim()
"Bhumika ."

var city = "amsTerDam"
undefined
city.charAt(0)
"a"
city.slice(1)
"msTerDam"
city.slice(2)
"sTerDam"
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"msTerDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
"Amsterdam"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2, 5)
"ste"
city.slice(1, 5)
"mste"
city.slice(0, 5)
"Amste"
city.slice(0, 11)
"Amsterdam"
city.slice(-1)
"m"
city.slice(-2)
"am"
city.slice(-3)
"dam"
city.slice(3, -3)
"ter"
city.slice(1, -4)
"mste"
city.slice(-4, 1)
""
city.slice(-4, -1)
"rda"
city.slice(-1, -4)
""

var a = "i am learning javascript"
a.replace('javascript', 'js')
"i am learning js"

var a = "javascript i am learning javascript"
a.replace('javascript', 'js')
"js i am learning javascript"
a.replace(/javascript/g, 'js')
"js i am learning js"

//var name = " Bhumika . "
undefined
name.replace(/ /g, '')
"Bhumika."
name.replace(/ /g, '-')
"-Bhumika-.-"
name
    " Bhumika . "


var url = "https://github.com/Aakashdeveloper/Angular5-Seed"

var url = "https://github.com/Aakashdeveloper/Angular5-Seed"
undefined
url.split('/')
    (5)["https:", "", "github.com", "Aakashdeveloper", "Angular5-Seed"] 0: "https:"
1: ""
2: "github.com"
3: "Aakashdeveloper"
4: "Angular5-Seed"
length: 5 __proto__: Array(0)
var a = "javascript i am learning javascript"

undefined
a.split(' ')
    (5)["javascript", "i", "am", "learning", "javascript"]

var a = "javascript"
a.split('')
    (10)["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

a.toString()
"j,a,v,a,s,c,r,i,p,t"
a.toString().replace(/,/g, '')
"javascript"

var a = 9879868
a.toString().split()["9879868"]
a.toString().split('')
    (7)["9", "8", "7", "9", "8", "6", "8"]