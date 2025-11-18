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

//Using Destructuring Assignment
let {name, courses} = student;
console.log(name, courses);

let scores = [85, 90, 78, 90];
let score1, score2;
[score1, score2] = [85, 90];
console.log(score1, score2);

//The Spread Operator
let cloneStudent = {...student};
cloneStudent.graduationYear = 2028;
console.log("Cloned Student:", cloneStudent);

let newCourses = ["GRED 101", "CPAN 112"];
let mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

//Object Methods
student.courses.push("CPAN 121");
console.log("Updated Courses:", student.courses);

let totalCourses = student.courses.length; 
console.log("Total Courses:", totalCourses);