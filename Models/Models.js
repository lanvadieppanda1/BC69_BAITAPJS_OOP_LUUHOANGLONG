// Lớp Person
class Person {
    constructor(id, name, address, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
}

// Lớp Student kế thừa từ Person
class Student extends Person {
    constructor(id, name, address, email, math, physics, chemistry) {
        super(id, name, address, email);
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
    }

    getAverageScore() {
        return (this.math + this.physics + this.chemistry) / 3;
    }
}

// Lớp Employee kế thừa từ Person
class Employee extends Person {
    constructor(id, name, address, email, workingDays, salaryPerDay) {
        super(id, name, address, email);
        this.workingDays = workingDays;
        this.salaryPerDay = salaryPerDay;
    }

    calculateSalary() {
        return this.workingDays * this.salaryPerDay;
    }
}

// Lớp Customer kế thừa từ Person
class Customer extends Person {
    constructor(id, name, address, email, companyName, invoiceValue, rating) {
        super(id, name, address, email);
        this.companyName = companyName;
        this.invoiceValue = invoiceValue;
        this.rating = rating;
    }
}

// Lớp ListPerson để quản lý các đối tượng
class ListPerson {
    constructor() {
        this.personList = [];
    }

    addPerson(person) {
        this.personList.push(person);
        this.displayPersons();
    }

    removePerson(id) {
        this.personList = this.personList.filter(person => person.id !== id);
        this.displayPersons();
    }

    updatePerson(id, updatedPerson) {
        const index = this.personList.findIndex(person => person.id === id);
        if (index !== -1) {
            this.personList[index] = updatedPerson;
        }
        this.displayPersons();
    }

    sortByName() {
        this.personList.sort((a, b) => a.name.localeCompare(b.name));
        this.displayPersons();
    }

    filterByType(type) {
        return this.personList.filter(person => person instanceof type);
    }

    calculateAverageScores() {
        this.personList.forEach(person => {
            if (person instanceof Student) {
                alert(`Average score of ${person.name}: ${person.getAverageScore()}`);
            }
        });
    }

    calculateSalaries() {
        this.personList.forEach(person => {
            if (person instanceof Employee) {
                alert(`Salary of ${person.name}: ${person.calculateSalary()}`);
            }
        });
    }


    displayPersons() {
        const personListElement = document.getElementById('personList');
        personListElement.innerHTML = '';
        this.personList.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>
                    ${person instanceof Student ? `
                        <strong>Toán:</strong> ${person.math}, 
                        <strong>Lý:</strong> ${person.physics}, 
                        <strong>Hóa:</strong> ${person.chemistry}
                    ` : ''}
                    ${person instanceof Employee ? `
                        <strong>Số ngày làm việc:</strong> ${person.workingDays}, 
                        <strong>Lương theo ngày:</strong> ${person.salaryPerDay}
                    ` : ''}
                    ${person instanceof Customer ? `
                        <strong>Công ty:</strong> ${person.companyName}, 
                        <strong>Trị giá hóa đơn:</strong> ${person.invoiceValue}, 
                        <strong>Đánh giá:</strong> ${person.rating}
                    ` : ''}
                </td>
            `;
            personListElement.appendChild(row);
        });
    }
}