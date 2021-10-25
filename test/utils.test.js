import { generateUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    const expected = {
        completed:{},
        gold: 0,
        hp: 15,
        name: 'Ian',
        class: 'ghost hunter',
    };

    const formData = new FormData();
    formData.set('name', 'Ian');
    formData.set('class', 'ghost hunter');

    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});