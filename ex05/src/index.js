//Only change code below this line
class Microsoft {
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    occupation() {
        return this._name + " is a philanthropist!"; 
    }
}

class Facebook extends Microsoft {
    constructor(name, age){
        super(name);
        this.age = age;
    }

    studentAge() {
        return this.name + " is " + this.age;
    }


}

let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());

let eliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(eliot.occupation());
console.log(eliot.studentAge());
//Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}