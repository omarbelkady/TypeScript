//If I have a js file and do not have an export statement at the top of my ts file
//The TS compiler will treat this as a module instead of a script
export {}
let message = 'Hello World';
console.log(message);

