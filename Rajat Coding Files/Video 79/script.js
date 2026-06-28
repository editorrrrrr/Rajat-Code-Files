let a = prompt("Enter first number")
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry bro this is not allowed")
}
let sum = parseInt(a) + parseInt(b)
function main() {
    let x = 5
    try {

        console.log("the sum is", sum * x)
        return true
    } catch (error) {
        console.log("Error dikha rha h sala")
        return false
    }
    finally {
        console.log("Your files are being closed and DB connection is lost")
    }
}
let c = main()