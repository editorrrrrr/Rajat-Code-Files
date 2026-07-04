let a = Math.random()
document.getElementById("btn").addEventListener("click", () => {
    if (a < 0.9) {
        let title = document.getElementById("title").value
        let slug = title
            .toLowerCase()
            .replaceAll(" ", "~")
        document.getElementById("result").innerHTML = slug
    }
    if (a < 0.8) {
        let title = document.getElementById("title").value
        let slug = title
            .toLowerCase()
            .replaceAll(" ", "-")
        document.getElementById("result").innerHTML = slug
    }
    if (a < 0.7) {
        let title = document.getElementById("title").value
        let slug = title
            .toLowerCase()
            .replaceAll(" ", "_")
        document.getElementById("result").innerHTML = slug
    }
    if (a < 0.1) {
        let title = document.getElementById("title").value
        let slug = title
            .toLowerCase()
            .replaceAll(" ", "$")
        document.getElementById("result").innerHTML = slug
    }

})