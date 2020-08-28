function Student(id, name) {
    this.id = id;
    this.name = name;
}
var jason = new Student(3452, "Jason Jones");
Student.prototype.major = "Architecture";
console.log("The New Student's name is: " + jason.name + " and has an id of: " + jason.id + " who majors in: " + jason.major);
