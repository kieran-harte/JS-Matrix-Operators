'bpo enable'

const mathjs = require('mathjs')

class Matrix {
  val = []

  constructor(array) {
    this.val = array
  }

  static operatorHadamard = (a, b) =>
    new Matrix(mathjs.dotMultiply(a.val, b.val))

  static operatorAdd = (a, b) => new Matrix(mathjs.add(a.val, b.val))

  static operatorMul = (a, b) => new Matrix(mathjs.multiply(a.val, b.val))

  get T() {
    if (Array.isArray(this.val[0])) {
      return new Matrix(mathjs.transpose(this.val))
    }
    return new Matrix(mathjs.transpose([this.val]))
  }
}

// const a = new Matrix([2, 5])

module.exports = Matrix
