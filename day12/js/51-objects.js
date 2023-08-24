
const employee = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-01-01',
    salary: 3000,
    department: {
        name: 'IT',
        location: 'London'
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;//this bu objede demek
    },
    increaseSalary: function (amount) {
        if (amount > 3000) return
        this.salary += amount;
    }
};

console.log(employee);
console.log(employee.firstName);
console.log(employee.department.location);

console.log(this);//window verir acilan sayfayi yani

const foo = () => {
    console.log(this);
}

foo();
employee.increaseSalary(1000);
console.log(employee.salary);

btn.addEventListener('click', function () {
    console.log(this);//eventlistener icinde ise target verir.yani olayi baslatan dom elementine referansolur
});
