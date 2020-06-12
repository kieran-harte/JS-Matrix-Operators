'bpo enable'

const Matrix = require('../src/index')

// Hadamard product
test('should calculate hadamard product of two matrices', () => {
  const a = new Matrix([2, 5])
  const b = new Matrix([4, 4])

  const res = a .* b

  expect(res.val).toEqual([8, 20])
})
