// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You are a Youtuber")
//         }, 3500);
//     })
// }
async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return 455
}
async function main() {
    console.log("India")
    console.log("Israel")
    console.log("Russia")
    let data = await getdata()
    console.log(data)
    console.log("France")
    console.log("Japan")
    alert("I am good")
}
main()