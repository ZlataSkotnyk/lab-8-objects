//Understanding and Creating Objects
let student = {
    name: "Zlata",
    age: 20,
    enrolled: true,
    courses: [
        "WRIT 120",
        "CPAN 113",
        "CPAN 111",
        "CPAN 116",
        "CPAN 133",
        "CPAN 134"
    ],
    studentInfo: function () {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    }
};

console.log(student["name"], student["age"]);
console.log(student.studentInfo());

//Working with JSON
let jsonString = JSON.stringify(student);//Convert object to JSON string
console.log("JSON string:", jsonString);

let newStudent = JSON.parse(jsonString);//Convert JSON string to object
console.log("New Student", newStudent);

console.log("Are this two objects equal?", newStudent === student);
console.log("Are this two objects(JSON) equal?", JSON.stringify(student) === JSON.stringify(newStudent));