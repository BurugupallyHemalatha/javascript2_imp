var palindrome = (data) => {
    var rem, temp, final = 0;
    temp = data;
    while (data > 0) {
        rem = data % 10;
        data = parseInt(data / 10)
        final = final * 10 + rem
    }
    if (final == temp) {
        console.log(`Number ${temp} is palindrome`)
    } else {
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1345)
    //VM116: 12 Number 1345 is not a palindrome
undefined
palindrome(1345431)
    //VM116: 10 Number 1345431 is palindrome
undefined