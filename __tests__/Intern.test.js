const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});

test('a method that returns the intern name', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.getName()).toEqual(expect.stringMatching(intern.name));
});

test('a method that returns the intern id', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.getId()).toBe(intern.id);
});

test('a method that returns the intern email', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.getEmail()).toEqual(expect.stringMatching(intern.email));
});

test('a method that returns the intern role', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual(expect.stringMatching("Intern"));
});

test('a method that returns the intern school', () => {
    const intern = new Intern('Jonathan', 1, 'jonprice0@gmail.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringMatching(intern.school));
});