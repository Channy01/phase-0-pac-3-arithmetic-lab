
function add(a, b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b 
}

function divide(a,b) {
    return a / b
}

function increment(a) {
    return a + 1;
}
 function decrement(a) {
    return a - 1
}
function makeInt(a) {
    var parsed = parseInt(a)
    var parsed_ = parseInt(a, 10)
    return parsed, parsed_
}
function preserveDecimal(a) {
    var parsed = parseFloat("2.222");
    return parsed
}