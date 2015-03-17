import {Person} from "./person"
import {Cat} from "./animals/cat"

function init() {
    let person = new Person({firstName: 'Bob', lastName: 'Jones'});
    let grumpy = new Cat();

    grumpy.speak();

    console.log(person.toString());

    return person;
}

var guy = init();
