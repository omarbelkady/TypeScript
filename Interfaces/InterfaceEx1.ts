interface InterPerson {
	FName: string,
	LName: string,
	sayHello: ()=>string
}

var Nelan:InterPerson = {
	//Destructuring do not use = or else will error
	FName: "Nelan",
	LName: "Ngo",
	//This means the return type of the sayHi method is a string
	sayHello: ():string => { return "2-56837 ALL DAY EVERYDAY"}
}
console.log("An Object");
console.log(Nelan.FName);
console.log(Nelan.LName);
console.log(Nelan.sayHello());

var StudentWithIdAndMajor:InterPerson = {
	FName: "634256837",
	LName: "CS",
	sayHello: ():string =>{ return "interface methodi";}
}
