localStorage
//> persistant Storage
//> wrt to browser
//> we have to remove manully

localStorage.setItem('tokenls', '354cegf43t54')
undefined
localStorage.getItem('tokenls')
"354cegf43t54"
localStorage.removeItem('tokenls')
undefined
localStorage.getItem('tokenls')
null


sessionStorage
//> temp Storage
//> save wrt to tab

sessionStorage.setItem("Mycity", "Delhi")
undefined
sessionStorage.getItem("Mycity")
"Delhi"
sessionStorage.removeItem("Mycity")
undefined

cookies
//> save wrt to website
//> expire in time

//document.cookie "_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.2029709450.1617588368; _gat_gtag_UA_131256843_1=1"
document.cookie = "mycookies=test; expires=Tue, 6 April 2021 01:00:00 UTC"
"mycookies=test; expires=Tue, 6 April 2021 01:00:00 UTC"
//document.cookie "_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.2029709450.1617588368; mycookies=test"