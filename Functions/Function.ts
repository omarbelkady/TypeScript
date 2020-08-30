
interface Indiv{
	fName: string;
	lName: string;
	/*To make a property optional place a question mark after the property name e.g. lName?:string */
}

function fullName(Indiv: {fName:string, lName: string}){
	console.log(`The person's full name is ${Indiv.fName} ${Indiv.lName}`);
}

let n56837 = {
	fName: 'Nelan256837',
	lName: 'Assem56837'
};
//Passing The Object
fullName(n56837);
