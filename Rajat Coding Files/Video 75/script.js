// console.log("Rajat is hacker")
console.log("Sourav is hecker")
console.log("Ankit is beggar")
// setTimeout(() => {
//     console.log("You are spreading false information")
// }, 1000);
console.log("The End")


const callback = (arg) => {
    console.log(arg)
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src

    sc.onload = () => {
        callback("I am a hacker")
    }

    document.head.append(sc)
}

loadscript(
    "script.js",
    callback
)