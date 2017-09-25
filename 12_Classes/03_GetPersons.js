function getPeoples() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person_1 = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let person_2 = new Person('SoftUni');
    let person_3 = new Person('Stephan', 'Nikolov', 25);
    let person_4 = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    let allPersons = [person_1, person_2, person_3, person_4];
    return allPersons;
}