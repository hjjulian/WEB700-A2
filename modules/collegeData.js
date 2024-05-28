/**********************************************************************************  
WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hannah Joy Julian      Student ID: hjjulian      Date: May 28,2024
*********************************************************************************/


// Define the Data class with a constructor that takes 'students' and 'courses' parameters
class Data {
    constructor(students, courses) {
        this.students = students; // Assign the 'students' parameter to a class property
        this.courses = courses;   // Assign the 'courses' parameter to a class property
    }
}

// Declare a variable to hold an instance of the Data class, initialized to null
let dataCollection = null;

// Import the 'fs' module for file system operations
const fs = require('fs');

// Define the 'initialize' function that reads JSON data from files and initializes the dataCollection
function initialize() {
    return new Promise((resolve, reject) => {
        // Read the 'students.json' file
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
            if (err) { // If there is an error reading the file, reject the promise with an error message
                reject("unable to read students.json");
                return; // Exit the function
            }
            // Parse the student data from JSON string to JavaScript object
            const students = JSON.parse(studentData);

            // Read the 'courses.json' file
            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
                if (err) { // If there is an error reading the file, reject the promise with an error message
                    reject("unable to read courses.json");
                    return; // Exit the function
                }
                // Parse the course data from JSON string to JavaScript object
                const courses = JSON.parse(courseData);

                // Create a new instance of the Data class with the parsed students and courses data
                dataCollection = new Data(students, courses);

                // Resolve the promise indicating successful initialization
                resolve();
            });
        });
    });
}

// Define the 'getAllStudents' function to return a promise that resolves with all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        // Check if there are any students in the data collection
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students); // Resolve the promise with the array of students
        } else {
            reject("no results returned"); // Reject the promise with an error message if no students are found
        }
    });
}

// Define the 'getTAs' function to return a promise that resolves with an array of TAs
function getTAs() {
    return new Promise((resolve, reject) => {
        // Filter the students array to find those with the TA property set to true
        const TAs = dataCollection.students.filter(student => student.TA);
        // Check if any TAs are found
        if (TAs.length > 0) {
            resolve(TAs); // Resolve the promise with the array of TAs
        } else {
            reject("no results returned"); // Reject the promise with an error message if no TAs are found
        }
    });
}

// Define the 'getCourses' function to return a promise that resolves with all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        // Check if there are any courses in the data collection
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses); // Resolve the promise with the array of courses
        } else {
            reject("no results returned"); // Reject the promise with an error message if no courses are found
        }
    });
}

// Export the functions to make them accessible in other files
module.exports = { initialize, getAllStudents, getTAs, getCourses };
