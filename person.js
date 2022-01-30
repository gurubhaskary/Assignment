let now = new Date();
let currentYear = now.getFullYear();

console.log(currentYear)

class Person {
    constructor(fName, lName, dob, graduation, designation, company, hobby) {
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
        this.graduation = graduation;
        this.designation = designation;
        this.company = company;
        this.hobby = hobby;

    }

}

let Guru = new Person('Guru', 'Bhaskar', '05/01/1997', 'B.sc(CS)', 'CSE', 'Citi Crop', 'Watching TV');


console.log(Guru)