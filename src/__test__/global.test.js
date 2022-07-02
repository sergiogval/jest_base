const text ='Hola Mundo' ;
const fruits = ['apple', 'melon', 'banana'];

test('Debe contener un string' , () => {
  expect(text).toMatch(/Mundo/)
});

test('Do we have bananas?', () => {
  expect(fruits).toContain('banana');  
});

test('Mayor que', () => { 
  expect(10).toBeGreaterThan(9);  
});

test('true', () => {
  expect(true).toBe(true);  
})

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
};

test('test a callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH')
  })
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }
    resolve(str.split('').reverse().join(''))
  });
};

test('Test a promise', () => {
  return reverseString2('Hola').then(str => {
    expect(str).toBe('aloH');
  });
});

test('test async/await', async () => { 
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
 });

// afterEach(() => console.log('Después de cada test'));
// afterAll(() => console.log('Después de todos los tests'));
// beforeEach(() => console.log('Antes de cada test'));
// beforeAll(() => console.log('Antes de todos los tests'));