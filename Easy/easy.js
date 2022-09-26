//Create an array of students holding their last name, first name, and age with 3 students.
//To validate, please log a greeting with the first name, last name and age of the 2nd student.
//The output should look like "Hello, my name is John Doe and I'm 19 years old."

let students = [
  {
    lastName: "Doe",
    firstName: "John",
    age: 20,
  },
  {
    lastName: "Doe",
    firstName: "Jack",
    age: 21,
  },
  {
    lastName: "Doe",
    firstName: "Jace",
    age: 22,
  },
];

for (var i = 0; i < students.length; i++) {
  console.log(
    `Hello, my name is ${students[i].firstName} ${students[i].lastName} and I am ${students[i].age} years old.`
  );
}
