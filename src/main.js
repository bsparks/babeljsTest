import {Person} from "./person"

function init() {
    let person = new Person({firstName: 'Bob', lastName: 'Jones'});

    console.log(person);

    return person;
}

var guy = init();
