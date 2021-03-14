let number = 2
function add() {
    return number += 1 ;
}
function subtract() {
    return number -= 1 ;
}
function multiply() {
    return number *= 5 ;
}
function divide() {
    return number /= 5 ;
}
function add(a,b) {
    return a + b ;
}
function subtract(b,a) {
    return b - a ;
}
function multiply(a,b) {
    return a * b ;
}
function divide(a,b) {
    return a / b ;
}
function increment(n) {
    return n += 1 ;
}

function decrement(n) {
    return n -= 1 ;
}
function makeInt(string) {
    return parseInt(string) ;
}
function makeInt(string) {
    return parseInt(string , 10) ;
}

function preserveDecimal(string) {
    return parseFloat(string) ;
}