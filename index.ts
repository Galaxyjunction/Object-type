// Object(Data type) 
//type , interface


type  UserType ={

    firstName: string;
    lastNmae: string;
    cnicNo: string;
    isStudent: boolean;
    subject: string[];
    address: addressType;
}

interface addressType {
    streetName: string; 
    city: string ;
    country: string;
    zipcode: number;
}

var user1: UserType= {
    firstName: "Faisal", 
    lastNmae: "Siddiqui",
    cnicNo: "12345567",
    isStudent: true,
    subject: ["English", "Programming"],
   address: {
    streetName: "xyz road", 
    city: "Karachi" ,
    country: "Pakistan",
    zipcode: 23456,
 }
}
console.log(user1);

var user2: UserType= {
    firstName: "Fahad", 
    lastNmae: "Usmani",
    cnicNo: "5678990",
    isStudent: true,
    subject: ["English", "Programming"],
   address: {
    streetName: "abc road", 
    city: "Karachi" ,
    country: "Pakistan",
    zipcode: 76543,
 }
}
console.log(user2)


type laptopCharacter1= string
var laptop: laptopCharacter1 = 'Dell'

type laptopCharacter2 = number;
var windows: laptopCharacter2 = 10;
 
type laptopCharacter3 = boolean;
var isAvailable = true;


