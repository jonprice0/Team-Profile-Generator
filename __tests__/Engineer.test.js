const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});

test('a method that returns the engineer name', () => {
    const engineer = new Engineer();

    expect(engineer.getName()).toEqual(expect.stringMatching(engineer.name));
});

test('a method that returns the engineer id', () => {
    const engineer = new Engineer();

    expect(engineer.getId()).toEqual(expect.stringMatching(engineer.id));
});

test('a method that returns the engineer email', () => {
    const engineer = new Engineer();

    expect(engineer.getEmail()).toEqual(expect.stringMatching(engineer.email));
});

test('a method that returns the engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.stringMatching("Engineer"));
});

test('a method that returns the engineer github', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.stringMatching(engineer.github));
});