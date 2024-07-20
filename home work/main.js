function calculateProduct(a, b) {
    return a * b;
}
/*const result = calculateProduct(5, 10);
console.log(result); // should print 50cls


function add(a: number, b: number): number {
    return a + b;
}*/
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet("Ameen")); // should print "Hello, Ameen!"
console.log(greet("Zia", "Hi")); // should print "Hi, Zia!"
