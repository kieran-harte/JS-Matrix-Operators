# JS Matrix Operators

Overloaded and custom operators for easier to read matrix math in JavaScript

- Uses the [mathjs](https://mathjs.org/) library
- Uses [babel-plugin-operator](https://www.npmjs.com/package/babel-plugin-operator)

### Operators

| Operation        | Operator |
| ---------------- | -------- |
| Add              | +        |
| Subtract         | -        |
| Multiply         | \*       |
| Hadamard Divide  | /        |
| Hadamard Product | .\*      |
| Transpose        | foo.T    |

### To run

1. Clone repository
2. Run `npm i` to install dependencies
3. To test - `npm run test` or `npm run test-watch`
4. To use, import _Matrix.js_ - see examples folder

### Usage

```js
// Declare matrices
const a = new Matrix([
  [2, 6],
  [5, 3]
])

const b = new Matrix([
  [1, 3],
  [2, 6]
])

// Addition
let c = a + b
c.val ===
  [
    [3, 9],
    [7, 9]
  ]

// Subtraction
c = a - b
c.val ===
  [
    [1, 3],
    [3, -3]
  ]

// Multiplication
c = a * b
c.val ===
  [
    [14, 42],
    [11, 33]
  ]

// Hadamard division (elementwise division)
c = a / b
c.val ===
  [
    [2, 2],
    [2.5, 0.5]
  ]

// Hadamard product (elementwise multiplication)
c = a .* b
c.val ===
  [
    [2, 18],
    [10, 18]
  ]

// Transpose
c = a.T
c.val ===
  [
    [2, 5],
    [6, 3]
  ]
```

> _Note: Hadamard operator takes precedence over multiplication and division, so for matrices a,b,c
> a * b .* c === a * (b .* c)_
