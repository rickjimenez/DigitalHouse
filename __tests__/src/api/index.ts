import api from '../../../src/api';

test('the data is peanut butter', () => {
  api.getProducts().then(data => {
    expect(data).toBe([]);
  });
});
