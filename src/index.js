'bpo enable'

const mathjs = require('mathjs')

class Matrix {
  val = []

  constructor(array) {
    this.val = array
  }

  static operatorHadamard = (a, b) =>
    new Matrix(mathjs.dotMultiply(a.val, b.val))
}

// const a = new Matrix([2, 5])
// const b = new Matrix([4, 4])

// console.log(a .* b)

module.exports = Matrix
