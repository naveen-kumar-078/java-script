/*const person={firstname:"jhon", lastname:"kumar", age :50, eyecolor: "blue"};
document.getElementById("class").innerHTML = person.firstname +" " + person.lastname;*/


/*<p>object proerties</p>
const person = {
    firstname : "naveen",
    lastname : "kumar",
    age: 55,


};

let text= person.firstname+" "+person.lastname
document.getElementById("class").innerHTML = text */



function person(first,last,age,color){
    this.first= first;
    this.second = last;
    this.age = age;
    this.color = color;
}

const myfather = new person("jhon","kumar", "12","blue");
document.getElementById("class").innerHTML = myfather.first


