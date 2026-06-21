function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am good")
        }, 3500);
    })
}
console.log(" u are good")
let data = getdata()
data.then((v) => {
    console.log(data)
    console.log(" they are good")
    console.log(" he is  good")
})