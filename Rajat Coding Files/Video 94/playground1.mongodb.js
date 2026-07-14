
use('sigmaDatabases');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
    "name": "Python",
    "price": 15000,
    "author": "Aman Sharma"
  },
  {
    "name": "Web Development",
    "price": 25000,
    "author": "Rajat Mathur",
    "isAvailable": true
  },
  {
    "name": "Data Science",
    "price": 30000,
    "author": "Rahul Verma",
    "students": 450,
    "rating": 4.7
  },
  {
    "name": "MERN Stack",
    "price": 35000,
    "author": "Rajat Mathur",
    "technologies": ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    "name": "Backend Development",
    "price": 22000,
    "author": "Rajat Mathur",
    "instructor": {
      "experience": 5,
      "city": "Gwalior",
      "skills": ["Node.js", "Express", "MongoDB"]
    }
  },
  {
    "name": "Advanced JavaScript",
    "price": 18000,
    "author": "Code Academy",
    "students": 1200,
    "rating": 4.8,
    "isPublished": true,
    "topics": ["Promises", "Async Await", "Closures", "Event Loop"],
    "details": {
      "duration": "40 hours",
      "level": "Intermediate",
      "language": "Hindi"
    }
  }
]);



// Print a message to the output window.
console.log(`Me Badmosh hu mera course kharido varna apna khet taiyaar rakho mere liye kyonki me badmash hu`);

