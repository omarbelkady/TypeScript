export{};
let message = "2 56837 75297828466";
//How to assign a data type to a variable

let enjoysToCodeInC: boolean = true;
let total: number = 63526;

let name:string = "Enjoys to Write Assembly";

//Template Strings in TS for writing a sentence in multiple lines
let coolSentence: string = `His name is ${name}
and he 36569 96 97383 C, Machine and Assembly Code`;
console.log(coolSentence);

//Remember JS Fundamentals: The null data type declaration vs undefined(not given a value yet)
let n:null = null;

let j:undefined = undefined;

//We can assign null and undefined to boolean,number and string
let isCPPAnAwesomeLang: boolean = null;
let AName: string = undefined;

//How to Declare List aka Array of type number
let list1: number[]=[2,5,2,6,5,6,8,3,7,2];

//How to Declare Array of type number
let list2: Array<number>=[2,5,2,6,5,6,8,3,7,6,3,4,2];

//Use A Tuple if you do not want to have TypeError which doesn't enforce you to have the same DT in your data Structure
//Order here matters, switch 5673702 to index 0 and you get an error. Also add a number and that errors as well
let indiv1: [string, number] = ["2526",5683702];


//Enum
enum Colors {Red, Orange, Yellow, Green, Blue=2, Indigo, Violet};

//Enum Example 2 when we want the number to start at a specific vale
enum CoolSenten {Nelan, Join_Sentence=56837,  Java=2, fav_Song_Wr=87};



let m:Colors= Colors.Blue;//prints 2 For C
let e:CoolSenten = CoolSenten.Java;
console.log(m);
console.log(e);

//The Any DataType
let randomCoolElem: any = 2526;
randomCoolElem = "Alan 56837 2";
randomCoolElem = 2526.568376342;
console.log(randomCoolElem);
coolSentence.toUpperCase();

//Take an object of type any and returns obj which must contain name property of type string exists in the object
function hasName(obj:any): obj is {name: string}
{
	return !!obj && typeof obj === "object" && "name" in obj
}
