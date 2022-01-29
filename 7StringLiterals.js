//es5
var Name = "Avengers";
var rating = 4.5
var type = "action"
var ind = "Hollywood"

var out = "The " + name + " is an " + type + " movie, with rating of " + rating + " and from ind " + ind + '.'
"The Avengers is an action movie, with rating of 4.5 and from ind Hollywood."

//es6
var out = `The ${name} is "an" ${type} movie, with rating of ${rating} and from ind ${ind}.`
"The Avengers is an action movie, with rating of 4.5 and from ind Hollywood."