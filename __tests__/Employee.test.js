const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jonathan', 1, 'jonprice0@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test('a method that returns the employee name', () => {
    const employee = new Employee('Jonathan', 1, 'jonprice0@gmail.com');

    expect(employee.getName()).toEqual(expect.stringMatching(employee.name));
});

test('a method that returns the employee id', () => {
    const employee = new Employee('Jonathan', 1, 'jonprice0@gmail.com');

    expect(employee.getId()).toBe(employee.id);
});

test('a method that returns the employee email', () => {
    const employee = new Employee('Jonathan', 1, 'jonprice0@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringMatching(employee.email));
});

test('a method that returns the employee role', () => {
    const employee = new Employee('Jonathan', 1, 'jonprice0@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringMatching("Employee"));
});