'bpo enable'

const mathjs = require('mathjs')

class Matrix {
  val = []

  constructor(array) {
    this.val = array
  }

  // Matrix with random values
  static random = (rows, cols, min, max) => {
    return new Matrix(mathjs.random([rows, cols], min, max))
  }

  // Hadamard product
  static operatorHadamard = (a, b) =>
    new Matrix(mathjs.dotMultiply(a.val, b.val))

  // Add
  static operatorAdd = (a, b) => new Matrix(mathjs.add(a.val, b.val))

  // Multiply
  static operatorMul = (a, b) => new Matrix(mathjs.multiply(a.val, b.val))

  // Subtract
  static operatorSub = (a, b) => new Matrix(mathjs.subtract(a.val, b.val))

  // Hadamard divide
  static operatorDiv = (a, b) => new Matrix(mathjs.dotDivide(a.val, b.val))

  // Transpose
  get T() {
    if (Array.isArray(this.val[0])) {
      return new Matrix(mathjs.transpose(this.val))
    }
    return new Matrix(mathjs.transpose([this.val]))
  }
}

module.exports = Matrix
