// multiple condition and multiple output (ifelse)
// one condition one output(ternary)
// one condition and multiple output(switch)

var Name = "Eva";
switch (Name) {
    case 'Aakash':
        console.log(`hi ${Name}`)
        break;
    case 'Eva':
        console.log(`hi ${Name}`)
        break;
    default:
        console.log(`hi ${Name} you are unknown`)
}



switch (new Date().getDay()) {
    case 0:
        console.log(`Today is sunday`)
        break;
    case 1:
        console.log(`Today is Monday`)
        break;
    default:
        console.log(`Invalid Input`)
}

//o:Today is Monday