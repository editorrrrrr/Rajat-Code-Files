// let boxes = document.getElementsByClassName("box")
// console.log("boxes")

// boxes[2].style.backgroundColor = "red"
// document.getElementById("box").style.backgroundColor = "orange"
document.querySelectorAll(".box,#box").forEach(e => {
    e.style.backgroundColor = "red"
});