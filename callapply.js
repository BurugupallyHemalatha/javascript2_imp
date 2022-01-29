var person = {
    fullName: function() {
        return this.firstname + " " + this.lastname
    }
}

var john = {
    firstname: 'John',
    lastname: 'Dave'
}

person.fullName.call(john)
"John Dave"
person.fullName.apply(john)
"John Dave"

var person = {
    fullName: function(city, country) {
        return this.firstname + " " + this.lastname + " " + city + " " + country
    }
}

person.fullName.call(john, ['Delhi', "India"])
"John Dave Delhi,India undefined"

person.fullName.apply(john, ['Delhi', "India"])
"John Dave Delhi India"

person.fullName.call(john, 'Delhi', 'India')
"John Dave Delhi India"
person.fullName.apply(john, 'Delhi', 'India')
VM396: 1 Uncaught TypeError: CreateListFromArrayLike called on non - object
at < anonymous >: