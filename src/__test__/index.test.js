const randomString = require('../index');

describe('Probar funcionalidades de randomStrings', () => {
  test('Debe retornar un string', () => {
    expect(typeof randomString()).toBe('string');
  });
  test('Comprobar que existe una ciudad', () => {
  expect(randomString()).not.toMatch(/Cordoba/);
  });
});