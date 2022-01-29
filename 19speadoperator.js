function add(a, b, c, d) {
    return a + b + c
}

var num = [1, 2, 3, 4]
sum(...num)


var cars = ["Kia", "BMW", "VW"]

var car2 = ["Merc", "Audi", ...cars, "Skoda"]
car2
    (6)["Merc", "Audi", "Kia", "BMW", "VW", "Skoda"]