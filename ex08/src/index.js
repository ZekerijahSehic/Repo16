class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson(name, email, age) {
        var personInfo = `Name: ${name}, email: ${email}, age: ${age}`;
        return personInfo;
    }
}

var person = new Person("Ime", "ime@email.ba", 29);
console.log(person);


module.exports = Person;
