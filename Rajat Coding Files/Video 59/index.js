// // console.log("a is " + a )
// // console.log("b is " + b )


// let a = 8 
// let b = 9 
// console.log(a + b)


// if ("addition happens then happen substraction"){
//     console.log(a + b)
// }

const faultyCalculator = (a, b) => {
    console.log("a is " + a);
    console.log("b is " + b);

    let random = Math.random();
    let Addition = a + b;
    let Subtraction = a - b;
    let Multiplication = a * b;
    let Division = a / b;
    let Exponentiation = a ** b;

    if (random < 0.1) {
        Addition = a - b;
        Subtraction = a / b;
        Multiplication = a + b;
        Division = a ** b;
    }

    console.log("Addition Result after faulty calculation: " + Addition);
    console.log("SubtractionResult after faulty calculation: " + Subtraction);
    console.log("MultiplicationResult after faulty calculation: " + Multiplication);
    console.log("DivisionResult after faulty calculation: " + Division);
    console.log("ExponentiationResult after faulty calculation: " + Exponentiation);
};
for (let i = 0; i < 5; i++) {
faultyCalculator(1, 2);
}