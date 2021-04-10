console.log("программа 1");
(function () {
    var userNumber;
    var repeated = false;
    do {
        if (repeated) {
            alert("Ошибка!");
        }
        repeated = true;
        userNumber = prompt("Введите число");
        console.log("введено число [" + userNumber + "]");
    }   while ( isNaN ( parseInt ( userNumber,10 ) ) );
    // }   while (userNumber !== String(Number(userNumber)));
    for (let i = 1; i <= userNumber; i++){
        if (i % 4 != 0) {
            console.log(i);
        };
    }; 
})();

console.log("программа 2");

(function () {
    var userNumber;
    do {
        userNumber = prompt("Введите число для рассчта факториала");
        console.log("введено число [" + userNumber + "]");
    }   while (userNumber !== String(Number(userNumber)));
    if ( userNumber === 0) {
        return 1;
    };
    var factorial = 1;
    while (userNumber > 0) {
        factorial *= userNumber;
        userNumber-=1;
    };
    console.log("факториал числа =[" + factorial + "]");
})();

console.log("программа 3");

(function () {
    var userNumber = prompt("Введите число возведения в степень");
    while ( isNaN ( parseInt ( userNumber,10 ) ) ) {
        alert ("Ошибка! Принимаются только числа!")
        userNumber = prompt("Введите число возведения в степень");
    };
    var userPower = prompt("Введите степень для возведения в неё числа");
    while ( isNaN ( parseInt ( userPower,10 ) ) ) {
        alert ("Ошибка! Принимаются только числа!")
        userPower = prompt("Введите степень для возведения в неё числа");
    };
    var answer = userNumber;
    for (let i = 1; i < userPower; i++ ) {
        answer *= userNumber;
    };
    console.log( answer );
    console.log( userNumber+ " "+ userPower);
    
})();