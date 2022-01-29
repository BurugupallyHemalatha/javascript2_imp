var a = [4, 5, 3, 8, 9, 34, 56, 78]
a.map((data) => { console.log(data) })

var a = [4, 5, 3, 8, 9, 34, 56, 78]
a.map((data) => { return data * 2 })
    (8)[8, 10, 6, 16, 18, 68, 112, 156]

>
map is use to iterate over the Array
    >
    it always
return same length of output array as input array >
    it is use to apply logics(sum, mul, div) or
return html, bind data

var a = [4, 5, 3, 8, 9, 34]
a.map((data) => { return `<p>${data*2}</p>` })["<p>8</p>", "<p>10</p>", "<p>6</p>", "<p>16</p>", "<p>18</p>", "<p>68</p>"]

var b = [20, 35, 34, 26, 67, 21, 19, 32]
b.filter((data) => { return data > 25 })

[35, 34, 26, 67, 32]

>
filter is use to filter out of the value
    >
    it may or may not
return same length of output >
    it only
return those value
for which condition / output is true

var b = [20, 35, 34, 26, 67, 21, 19, 32]
b.map((data) => { return data > 25 })[false, true, true, true, true, false, false, true]

var a = [0, 1, 2, 3]
a.map((data) => { return data * 2 })[0, 2, 4, 6]

var a = [0, 1, 2, 3]
a.filter((data) => { return data * 2 })[1, 2, 3]