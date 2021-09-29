//Only change code below this line
class Person {

    constructor(message){
        this.message = message;
    }
    
    static display(){
        const message = "Static method is invoked from Person class";
        return message;
    }

    show(){
        console.log(Person.display());
    }
}

//Only change code above this line
var message = new Person();
message.show();
module.exports = Person;