var student = {
    fName: "Mahmoud",
    lName: "Smith",
    major: "EE",
    likesLowL: false,
    gamer: true,
    year: 3
};
var studentCalling = function (obj) {
    console.log("Your name is: " + obj.fName + " " + obj.lName + " and you are pursuing " + obj.major + " and it is " + obj.gamer + " that you like to game." + "You are currently in Year: " + obj.year + " at University");
};
studentCalling(student);
