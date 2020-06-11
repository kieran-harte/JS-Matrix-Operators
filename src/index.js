'bpo enable'
const mathjs = require('mathjs')

// class Math extends mathjs {}

// let math = new Math()

class Matrix {
	val = []

  constructor(array) {
		this.val = array	
	}

	static operatorHadamard = (a,b) => {
    return new Matrix(mathjs.dotMultiply(a.val, b.val))
	}
	
}

let a = new Matrix([2, 5])
let b = new Matrix([4, 4])

console.log(a .* b)