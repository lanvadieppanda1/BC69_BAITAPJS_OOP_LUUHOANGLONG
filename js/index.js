const list = new ListPerson();

document.getElementById('userType').addEventListener('change', function () {
    const userType = this.value;
    document.getElementById('studentFields').style.display = (userType === 'Student') ? 'block' : 'none';
    document.getElementById('employeeFields').style.display = (userType === 'Employee') ? 'block' : 'none';
    document.getElementById('customerFields').style.display = (userType === 'Customer') ? 'block' : 'none';
});

document.getElementById('addPersonForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const userType = document.getElementById('userType').value;

    let person;

    if (userType === 'Student') {
        const math = parseFloat(document.getElementById('math').value);
        const physics = parseFloat(document.getElementById('physics').value);
        const chemistry = parseFloat(document.getElementById('chemistry').value);
        person = new Student(id, name, address, email, math, physics, chemistry);
    } else if (userType === 'Employee') {
        const workingDays = parseInt(document.getElementById('workingDays').value);
        const salaryPerDay = parseFloat(document.getElementById('salaryPerDay').value);
        person = new Employee(id, name, address, email, workingDays, salaryPerDay);
    } else if (userType === 'Customer') {
        const companyName = document.getElementById('companyName').value;
        const invoiceValue = parseFloat(document.getElementById('invoiceValue').value);
        const rating = document.getElementById('rating').value;
        person = new Customer(id, name, address, email, companyName, invoiceValue, rating);
    }

    list.addPerson(person);

    this.reset();
});

function sortByName() {
    list.sortByName();
}

function calculateAverageScores() {
    list.calculateAverageScores();
}

function calculateSalaries() {
    list.calculateSalaries();
}
