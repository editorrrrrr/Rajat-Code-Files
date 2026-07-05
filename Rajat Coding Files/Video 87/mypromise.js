import fs from "fs/promises"
let a = await fs.readFile("rajat2.txt")
console.log(a.toString())