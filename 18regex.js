// Regex
// Regular Expression
// ^$

// var a = "Hi"
// a.match("^([a-z])$")
// null
// var a = "hi"
// a.match("^([a-z])$")
// null
// var a = "h"
// a.match("^([a-z])$")
// (2) ["h", "h", index: 0, input: "h", groups: undefined]
// var a = "hi"
// a.match("^([a-z]{2})$")
// (2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

// var a = "hii"
// a.match("^([a-z]{2,5})$")
// (2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
// var a = "hiiiii"
// a.match("^([a-z]{2,5})$")
// null
// var a = "h"
// a.match("^([a-z]{2,5})$")
// null
// var a = "h"
// a.match("^([a-z]+)$")
// (2) ["h", "h", index: 0, input: "h", groups: undefined]

// var a = "hey hey"
// a.match("^([A-Za-z0-9]+)$")
// null
// var a = "hey9hey"
// a.match("^([A-Za-z0-9]+)$")
// (2) ["hey9hey", "hey9hey", index: 0, input: "hey9hey", groups: undefined]

// var phone = 85736372854
// phone.match("^([0-9]{10})$")
// VM751:2 Uncaught TypeError: phone.match is not a function
//     at <anonymous>:2:7
// (anonymous) @ VM751:2
// var phone = 85736372854
// phone.toString().match("^([0-9]{10})$")
// null
// var phone = 1234567890
// phone.toString().match("^([0-9]{10})$")
// (2) ["1234567890", "1234567890", index: 0, input: "1234567890", groups: undefined]


// var str = "That's hot haat!";
// patt = /h.t/g
// str.match(patt)

// var str = "That's hot haat!";
// patt = /h.t/g
// str.match(patt)
// (2) ["hat", "hot"]
// var str = "That's hot haat!";
// patt = /h.\.t/g
// str.match(patt)
// ["haat"]

// var email = "a@a.com";
// email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
// (4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
// var email = "@a.com";
// email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")