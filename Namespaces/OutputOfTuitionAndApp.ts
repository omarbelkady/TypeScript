var Tuition;
(function (Tuition) {
    function calculTheAnnualSchoolFee(feeNum, schoolTerm) {
        return feeNum * schoolTerm;
    }
    Tuition.calculTheAnnualSchoolFee = calculTheAnnualSchoolFee;
})(Tuition || (Tuition = {}));
///<reference path="./Tuition.ts" />
//This is what's known as a reference path directive denoted in XML format
let RunningTotal = Tuition.calculTheAnnualSchoolFee(16000, 2);
console.log("The Running Total of the School Year is: " + RunningTotal);
