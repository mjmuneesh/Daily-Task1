
let person1 ={
    name:"muneesh",
    lastname: "sharma",
    age:22,
    isAdult : ()=> {
        return person.age >= 18;
     }
}


let person2 ={};
Object.assign(person2,person1);

console.log(person2);
