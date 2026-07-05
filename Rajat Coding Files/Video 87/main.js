const { error } = require("console")
const fs = require("fs")

console.log(fs)
console.log("starting")
// fs.writeFileSync("rajat.txt","rajat is a good boy he lives in gwalior")

// fs.writeFile("rajat2.txt","rajat is badmash be afraid of him",()=>{
//     console.log("Done")
//     fs.readFile("rajat2.txt",(error ,data)=>{
//         console.log(error , data.toString())
//     })
// })
fs.appendFile("rajat2.txt","rajatbadmash",(e,d)=>{
    console.log(d)
})
console.log("ending")