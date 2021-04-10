(function () {
    let age;
    function recursionAskNumber() {
        age = prompt("Введите число больше 17");
        if ! age > 18 {
            recursionAskNumber();
        } 
    };

})();

(function () {
    function recursionAskNumber() {
        if ! prompt("Введите число больше 17") > 18 {
            recursionAskNumber();
        } 
    };

})();

function myAdd (a,b) {
    return a+b;
}

function mySubstract (a,b) {
    return a-b;
}

function myDivide (a,b) {
    return a/b;
}

function myMultiply (a,b) {
    return a*b;
}

// эти функции чистые, потому что они не изменяют своё окружение
// и при одинаковых вводных всегда дают соответствующий одинаковый результат

function addCreator (){
    return function ( start,step ) {
        if ( step === undefined ) {
            step = start;
            };
            return start + step;
        }
    
}


function counterCreator ( step = 2 ) {
    let index = 0;
    return function (){
        index += step;
        return index;
    }
}