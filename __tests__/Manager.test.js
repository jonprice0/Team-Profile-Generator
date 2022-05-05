const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Jonathan', 1, 'jonprice0@gmail.com', 21);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('a method that returns the manager name', () => {
    const manager = new Manager('Jonathan', 1, 'jonprice0@gmail.com', 21);

    expect(manager.getName()).toEqual(expect.stringMatching(manager.name));
});

test('a method that returns the manager id', () => {
    const manager = new Manager('Jonathan', 1, 'jonprice0@gmail.com', 21);

    expect(manager.getId()).toBe(manager.id);
});

test('a method that returns the manager email', () => {
    const manager = new Manager('Jonathan', 1, 'jonprice0@gmail.com', 21);

    expect(manager.getEmail()).toEqual(expect.stringMatching(manager.email));
});

test('a method that returns the manager role', () => {
    const manager = new Manager('Jonathan', 1, 'jonprice0@gmail.com', 21);

    expect(manager.getRole()).toEqual(expect.stringMatching("Manager"));
});