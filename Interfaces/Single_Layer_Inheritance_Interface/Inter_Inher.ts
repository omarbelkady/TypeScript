interface Athlete{
	age: number,
	weight: number,
	playsInAClub: boolean,
	number: number
}

interface SoccerPlayer extends Athlete{
	shoeName: string
}

var Messi = <SoccerPlayer>{};
Messi.age= 33;
Messi.weight= 72;
Messi.playsInAClub=true;
Messi.number = 10;
Messi.shoeName = "Adidas Nemeziz";
console.log("The Best Soccer Player in the world with the number: "+Messi.number+" is "+Messi.age+" years old and weighs "+Messi.weight+" kilograms, the secret to his awesome skills is his "+ Messi.shoeName);

