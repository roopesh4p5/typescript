// function clg(message: any): void {
//     clg(message);
//   }

// clg('hello');


// //valid javascript is a valid typescipt


// let username = 'roovi';  //typescript inferns it to string
// let myname: string = 'roovi';  //here i assigned the type as string 

// myname = 'roopesh' //valid   :i can reassign the same type data

// clg(username);

// let a: number = 6
// //  let b:number='6'   invalid i defined the type as number so i cant put it in the quotes making it as string
// let b: string = '6'; //this is valid 

// // clg(a/b);  gives an error because b is type string and math operation cant be done on it

// clg(a + a); //valid because of same type



// Day 2 ----------------------------------------------------------------------

// let lang:any='hindi'
// lang=2;
// //by using 'any' we defeat type script 
// //use it very rare because it weakens the types script use when u r not sure what type of datqa script is about to come


// const sum=(a:number,b:number)=>{
//     return a+b
// }

// //sum is going to return number inferned by type script

// const sum1=(a:number,b:string)=>{
//     return a+b
// }
// //sum is going to return string inferned by type script


// // union type

// let rollno:string|number=1234;
// rollno='sesa23';


// // regular expression

// let re:RegExp;
// let regg=/\w+/g


// //using regular expression in ts yet to learn



// Day 3 ----------------------------------------------------------------------
// arrays


// let arr1 = [2, 'hello', true]
// //ts  inferns as union type


// arr1[0] = 3 //valid
// // arr[0]='hello'  //invalid type changed

// arr1.push(true);
// clg(arr1);


// let arr2 = [2, 3, 'hello']

// // arr2=arr1;   //invalid because arr1 has boolean too
// arr1 = arr2;   //valid 


// // tuple inferning the tuple is by using []
// // type of each posision is also strict
// let arr3: [string, number, boolean] = ['roovi', 43, true]

// // object


// let myobj: object;
// myobj = [];   //valid because in java script an array is an object 
// myobj=arr3;
// myobj ={}; 



// const obj={
//     name:'roovi',
//     age:20,
// }

// // ts inferns the obj as const obj: { name: string  age: number;}


// // creating a type 

type car={
    name:string,
    engine?:boolean,
    number:number,
    hell(a:number):void
}
//i cannot create methodsa


// interface car{
//     name:string,
//     engine?:boolean,
//     number:number,
//     hell(a:number):void
// }



let nano:car={
    name:'nano',
    // engine:true,
    number:23,
    
    hell( a:number) 
    {console.log(a)}
}


// //focus***   the interface is loose strict type is strict

// day 4======================================================================



// // enum

// enum grade{
//     a='a',b='b',c=3,d,e
// }
// clg(grade);
// clg(Object.keys(grade).length);

// // makesure not to use enume until required it makes the 


// // example proble for enum

// // Enum declaration
// enum Color {
//     RED = 1,
//     GREEN ,
//     BLUE  
//   }

//   // Function that takes a color and performs an action based on the color
//   function processColor(color): void {
//     switch (color) {
//       case Color.RED:
//         clg('The color is red');
//         break;
//       case Color.GREEN:
//         clg('The color is green');
//         break;
//       case Color.BLUE:
//         clg('The color is blue');
//         break;
//       default:
//         clg('Unknown color');
//     }
//   }

//   // Using the enum in the program
//   processColor(Color.RED);    // Output: The color is red
//   processColor(Color.GREEN);  // Output: The color is green
//   processColor(Color.BLUE);   // Output: The color is blue
// //   processColor('YELLOW');     // Error: Argument of type '"YELLOW"' is not assignable to parameter of type 'Color'.



// day 5======================================================================



// // type vs interface


// type math=(a:number,b:number)=>number;




// //syntax has a lot difference 


// const add:math=(a,b)=>{
//     return a+b;
// }

// // clg( add(4,6));



// // let sumall:math1=(a,b,c?:number)=>{
//     //     return a+b+c
//     // }
//     // as c is number or undefined we have to put a typeguard for c
//     interface math1{(a:number,b:number ,c?:number ):number}
// let sumall:math1=(a,b,c)=>{
//     if(typeof c!=='undefined'){
//         return a+b+c
//     }else{
//         return a+b
//     }

// }
// console.log(sumall(2,3))


// day 6===============================================================

// rest operator

let red = (...arr: number[]) => {
    let output = arr.reduce((acc, num) => acc + num);
    console.log(output)
}

red(2, 3, 4, 5, 6);

// typescript inferns itself as the number for the rest operator 



// never type

// let createError =()=>{

//     while(true){
//         let i:number=1;
//         console.log(i);
//         i++;
//     }
// }


// // when could be the never type be useful?

//  let isnum=(val:number,val2:number)=>{
//     console.log(val2)
//     return typeof val==='number'? true:false
//  }