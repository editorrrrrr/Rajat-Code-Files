use("crudDb")
db.createCollection("Courses")

// db.courses.insertOne({
//     "name": "Rajat mathur",
//     "price": 100,
//     "author": "Rajat bhai from gwalior",
//     "assignment": "Create a triangle using array"
// })

db.courses.insertMany(
    [
        {
            name: "Gaming Laptop",
            brand: "ASUS",
            category: "Electronics",
            price: 1000,
            stock: 12
        },
        {
            name: "Wireless Headphones",
            brand: "Sony",
            category: "Electronics",
            price: 0,
            stock: 35
        },
        {
            name: "Running Shoes",
            brand: "Nike",
            category: "Fashion",
            price: 0,
            stock: 20
        },
        {
            name: "Mechanical Keyboard",
            brand: "Redragon",
            category: "Electronics",
            price: 0,
            stock: 0
        },
        {
            name: "Smart Watch",
            brand: "Samsung",
            category: "Electronics",
            price: 400,
            stock: 18
        },
        {
            name: "Web Development Course",
            brand: "CodeMaster",
            category: "Education",
            price: 300,
            stock: 100
        },
        {
            name: "Office Chair",
            brand: "GreenSoul",
            category: "Furniture",
            price: 200,
            stock: 7
        },
        {
            name: "Python Programming Book",
            brand: "TechBooks",
            category: "Books",
            price: 100,
            stock: 45
        }
    ]
)
// let a = db.courses.find({ "price": 0 })
// console.log(a)

db.courses.deleteOne({ "price": 0 })
