// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
    }
    return a / b;
}

// Usage
console.log(add(5, 3)); // Output: 10
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6)); // Output: 12
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed.
