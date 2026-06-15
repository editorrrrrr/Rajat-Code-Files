console.log("This is very beautiful")
let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.7){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
           
            resolve("Aren't you??")
        }, 1000);
        // setTimeout(() => {
        //     console.log("You areeee")
        // }, 1000);
    }
    })
let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.5){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
            
            resolve("you are")
        }, 1000);
    }
    })
let prom3 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.3){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
            
            resolve("you are great")
        }, 1000);
    }
    })
let prom4 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.1){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
            
            resolve("you are superhero")
        }, 1000);
    }
    })
let prom5 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.4){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
            
            resolve("you are villain")
        }, 1000);
    }
    })
let prom6 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.2+0.0){
        reject("No number is supporting u dawgggg")
    }
    else{

        setTimeout(() => {
            
            resolve("I AM IRON MAN")
        }, 1000);
    }
    })
let p7 = Promise.any([prom1,prom2,prom3,prom4,prom5,prom6])
p7.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})