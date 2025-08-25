/*function person(first,last,eye,age) {
    this.firstname = first;
    this.lastname = last;
    this.eye = eye;
    this.age = age;
    
}

const myfather = new person("jhon","doe","blue",50);


document.getElementById("demo").innerHTML = myfather.age*/


function person(first,last,age,eye) {
    this.firstname=first;
    this.lastname=last;
    this.age = age;
    this.eye=eye;
}

const myfather = new person("jhon","doe","blue",50);

document.getElementById("demo").innerHTML = "my father name is "+myfather.firstname
    
