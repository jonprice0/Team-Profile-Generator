const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test('a method that returns the employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.stringMatching(employee.name));
});

test('a method that returns the employee id', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.stringMatching(employee.id));
});

test('a method that returns the employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.stringMatching(employee.email));
});

test('a method that returns the employee role', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual(expect.stringMatching("Employee"));
});