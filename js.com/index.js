function person(first,last,age,){
    this.firstname = first;
    this.lastanme = last;
    this.age = age;
}
 const myfather = new person("jhon", "vae" , 15 );

document.getElementById("demo").innerHTML =myfather.age;