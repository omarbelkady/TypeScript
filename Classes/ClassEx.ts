class funnyExamp{
	indivName: string;
	favLang: string;
	nickName: string;
	lowLevel56837: boolean;
	

	constructor(fullName: string, favLangu: string, nicName: string, lowLevel56837: boolean)
	{
		this.indivName=fullName;
		this.favLang=favLangu;
		this.nickName=nicName;
		this.lowLevel56837= lowLevel56837;
	}

	//Method
	greet(){
		console.log(`Hello There ${this.indivName} I have been informed that your favorite Language is: ${this.favLang} is and that your Nickname is: ${this.nickName} and it is ${this.lowLevel56837} that you love to code Low Level`);
	}
}

//In TS we cannot overload the constructor
let Nelan = new funnyExamp("Alan Ngo","2-56837", "TSwift", true);
console.log(Nelan.favLang);
Nelan.greet();
