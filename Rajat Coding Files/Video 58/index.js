function good(name) {
    console.log("Hello " + "It's " + name  )
    console.log("Hello " + "It's " + name )
    console.log("Hello " + "It's " + name )
    console.log("Hello " + "It's " + name   )
}

good("Rahul")

function sum(a,b, c=7) {
    // console.log(a+b)
    return(a+b+c)
}

bata1 = sum(9,4)
bata2 = sum(44,6)
bata3 = sum(9,20)


console.log("the sum of the numbers of you typed is:", bata1)
console.log("the sum of the numbers of you typed is:", bata2)
console.log("the sum of the numbers of you typed is:", bata3)

const func1 = (x)=>{
console.log("the sum of no. is :", x)
}

func1(34);
func1(67);
func1(89);