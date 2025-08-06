console.log("Hey i am the new in this course and believe ")

let random = Math.random()
console.log(random)
let a = prompt("Enter first digit")
let c = prompt("Enter operation")
let b = prompt("Enter second digit")

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}


if (random > 0.1) {
    //perform correct calculation
    alert(`the result is ${eval(`${a} ${c} ${b} `)}`)
}

else {
    //perform wrong calculation 
    c = obj[c]
}