// for
// while
// do while
// for of
// for in > object 

////////
// for > generate series of value or iterate over Array
/////////

// for(i=0;i<5;i++){
//     console.log(i)
// }
// 0
// 1
// 2
// 3
// 4

// var city = ["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai", "Venice"]
// for(i=0;i<city.length;i++){
//     console.log(city[i])
// }
// London
// NewYork
// Paris
// Delhi
// Amsterdam
// Dubai
// Venice

// var myarr = ["Hongkong", "London",['Red','Yellow','Green'], "Pune", "Delhi", "Amsterdam"]

// for(i=0;i<myarr.length;i++){
//     if(Array.isArray(myarr[i])){
//         for(j=0;j<myarr[i].length;j++){
//             console.log(myarr[i][j])
//         }
//     }else{
//         console.log(myarr[i])
//     }
// }

/////////
//while
//////
// var i = 10;
// while(i<5){
//     console.log(i);
//     i++
// }

/////////
//do while
//////
//var i= 10;
//do{
//     console.log(i);
//     i++
// }
// while(i<5)

/////
//for of
/////
// var city = ["London", "NewYork", "Paris", "Delhi", "Amsterdam", "Dubai", "Venice"]
// for(mycity of city){
//     console.log(mycity)
// }

// var myarr = ["Hongkong", "London",['Red','Yellow','Green'], "Pune", "Delhi", "Amsterdam"]
// for(mycity of city){
//     if(Array.isArray(mycity)){
//         for(color of mycity){
//             console.log(color)
//         }
//     }else{
//         console.log(mycity)
//     }

// }