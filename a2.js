/**********************************************************************************  
WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hannah Joy Julian      Student ID: hjjulian      Date: May 28,2024
*********************************************************************************/


// Require the collegeData module, which contains functions for initializing data and retrieving information
const collegeData = require('./modules/collegeData');

// Call the initialize function from the collegeData module, which returns a promise
collegeData.initialize().then(() => {
    // If the initialize function resolves successfully, log a success message to the console
    console.log("Initialization successful");

    // Call the getAllStudents function from the collegeData module, which returns a promise
    collegeData.getAllStudents().then((students) => {
        // If getAllStudents resolves successfully, log the number of students retrieved
        console.log(`Successfully retrieved ${students.length} students`);
    }).catch((err) => {
        // If getAllStudents is rejected, log the error message to the console
        console.log(err);
    });

    // Call the getCourses function from the collegeData module, which returns a promise
    collegeData.getCourses().then((courses) => {
        // If getCourses resolves successfully, log the number of courses retrieved
        console.log(`Successfully retrieved ${courses.length} courses`);
    }).catch((err) => {
        // If getCourses is rejected, log the error message to the console
        console.log(err);
    });

    // Call the getTAs function from the collegeData module, which returns a promise
    collegeData.getTAs().then((TAs) => {
        // If getTAs resolves successfully, log the number of TAs retrieved
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    }).catch((err) => {
        // If getTAs is rejected, log the error message to the console
        console.log(err);
    });

// If the initialize function is rejected, log the initialization failure message and the error message to the console
}).catch((err) => {
    console.log(`Initialization failed: ${err}`);
});