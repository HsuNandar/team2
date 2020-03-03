class Person{
constructor(name,age,city){
this.personname = name;
this.age = age;
this.city=city;
this.myperson=function()
{
  return this.age;
}
}
}
var firstperson = new Person("sunandar",21,"mdy");
var secondperson = new Person("ayechan",33,"mdy");
secondperson.nationality = "myanmar";
console.log(secondperson.myperson());

let arr=[];
arr.push(firstperson);
arr.push(secondperson);
let newarr = arr.map();
console.log(newarr);
