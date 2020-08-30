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
		console.log(`Hello There ${this.indivName} I have been informed that your favorite Language is: ${this.favLang} and that your Nickname is: ${this.nickName} and it is ${this.lowLevel56837} that you love to code Low Level`);
	}
}

class Angela extends funnyExamp{
	constructor(angelaName: string){
		super("Angela","2665-56837","Angela", false);
	}

	//Method
	tellsEveryoneToRead(){
		console.log(`Angela likes to tell Everyone to Read A book which is cancer`);
	}
}
let bookL = new Angela("Angela");
bookL.tellsEveryoneToRead();
bookL.greet();
