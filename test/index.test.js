'bpo enable'

const Matrix = require('../src/index')

// Hadamard product
test('should calculate hadamard product of two matrices', () => {
  const a = new Matrix([[2, 5]])
  const b = new Matrix([[4, 4]])

  expect((a .* b).val).toEqual([[8, 20]])
})

// Multiply
test('should multiply two matrices', () => {
  const a = new Matrix([
    [1, 2],
    [0, 1],
    [2, 3]
  ])
  const b = new Matrix([
    [2, 5, 1],
    [6, 7, 1]
  ])
  expect((a * b).val).toEqual([
    [14, 19, 3],
    [6, 7, 1],
    [22, 31, 5]
  ])
})

// Add
test('should add two matrices', () => {
  const a = new Matrix([[4, 6, 9]])
  const b = new Matrix([[7, 1, 2]])

  expect((a + b).val).toEqual([[11, 7, 11]])
})

// Subtract
test('should subtract two matrices', () => {
  const a = new Matrix([[4, 6, 9]])
  const b = new Matrix([[7, 1, 2]])

  expect((a - b).val).toEqual([[-3, 5, 7]])
})

// Transpose
test('should traspose a single row matrix', () => {
  const a = new Matrix([[3, 4, 5]])
  expect(a.T.val).toEqual([[3], [4], [5]])
})

test('should traspose a single column matrix', () => {
  const a = new Matrix([[3], [4], [5]])
  expect(a.T.val).toEqual([[3, 4, 5]])
})

test('should traspose a multi-row multi-col matrix', () => {
  const a = new Matrix([
    [3, 4, 5],
    [3, 2, 1]
  ])
  expect(a.T.val).toEqual([
    [3, 3],
    [4, 2],
    [5, 1]
  ])
})

// Transpose first
test('should transpose before multiply', () => {
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ])
  const b = new Matrix([
    [9, 8, 7],
    [6, 5, 4]
  ])

  expect((a * b.T).val).toEqual([
    [46, 28],
    [118, 73]
  ])
})
test('should transpose before add', () => {
  const a = new Matrix([[1, 2, 3]])
  const b = new Matrix([[4], [5], [6]])

  expect((a + b.T).val).toEqual([[5, 7, 9]])
  expect((b.T + a).val).toEqual([[5, 7, 9]])
})
test('should transpose before subtract', () => {
  const a = new Matrix([[1, 2, 3]])
  const b = new Matrix([[4], [5], [6]])

  expect((a - b.T).val).toEqual([[-3, -3, -3]])
})
test('should transpose before divide', () => {
  const a = new Matrix([[8, 20, 42]])
  const b = new Matrix([[4], [5], [6]])

  expect((a / b.T).val).toEqual([[2, 4, 7]])
})
test('should transpose before hadamard', () => {
  const a = new Matrix([[1, 2, 3]])
  const b = new Matrix([[4], [5], [6]])

  expect((a .* b.T).val).toEqual([[4, 10, 18]])
  expect((b.T .* a).val).toEqual([[4, 10, 18]])
})

test('should multiply before add', () => {
  const a = new Matrix([
    [1, 2],
    [0, 1]
  ])
  const b = new Matrix([
    [2, 5],
    [6, 7]
  ])
  const c = new Matrix([
    [4, 9],
    [1, 2]
  ])

  expect((c + a * b).val).toEqual([
    [18, 28],
    [7, 9]
  ])

  expect((a * b + c).val).toEqual([
    [18, 28],
    [7, 9]
  ])
})
test('should multiply before subtract', () => {
  const a = new Matrix([
    [1, 2],
    [0, 1]
  ])
  const b = new Matrix([
    [2, 5],
    [6, 7]
  ])
  const c = new Matrix([
    [4, 9],
    [1, 2]
  ])

  expect((c - a * b).val).toEqual([
    [-10, -10],
    [-5, -5]
  ])

  expect((a * b - c).val).toEqual([
    [10, 10],
    [5, 5]
  ])
})

// multiply, divide and hadamard in order
test('multiply, divide, hadamard in order', () => {
  const a = new Matrix([[9, 5, 1]])
  const b = new Matrix([[1, 2, 3]])
  const c = new Matrix([
    [5, 3, 8],
    [8, 2, 7]
  ])
  const d = new Matrix([[2, 10]])
  expect((a - b * c.T .* d).val).toEqual([[66, 560]])
})
// add and subtract in order
test('add and subtract in order', () => {
  const a = new Matrix([[9, 5, 1]])
  const b = new Matrix([[1, 2, 3]])
  const c = new Matrix([[6, -2, 8]])
  const d = new Matrix([[3, 4, 7]])

  expect((a + b - c + d).val).toEqual([[7, 13, 3]])
})
