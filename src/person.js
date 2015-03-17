export class Person {
    constructor(json) { Object.assign(this, json); }

    get fullName() { return this.firstName + ' ' + this.lastName; }

    toString() {
        return this.fullName;
    }
}
