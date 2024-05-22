const questions = [
  {
    question: "Factorize \\( 3x^2 + 17x - 28 \\)?",
    options: ["(2x+1)(3x-1)", "(3x-4)(x+7)", "(3x+7)(x-4)", "(3x+2)(10x+1)"],
    answer: 1,
  },
  {
    question: "Factorize \\( x^4y + 27xy \\)",
    options: [
      "\\( xy(x+3)(x^3 - 3x + 9) \\)",
      "\\( xy(x+3)(x^3 - 3x - 9) \\)",
      "\\( x^2y(x+3)(x^3 + 3x + 12) \\)",
      "\\( xy^4(x+3)(x^3 + 3x + 9) \\)",
    ],
    answer: 0,
  },
  {
    question: "Factorize \\( x^2 + 5x - 14 \\)?",
    options: ["(x-5)(3x-1)", "(x-7)(x+2)", "(3x+7)(x-12)", "(x-2)(x+7)"],
    answer: 3,
  },
  {
    question: "Factorize \\( 20x^3 - 24xy - 25xy + 30y^2 \\)?",
    options: [
      "(4x+6)(3x-2)",
      "(5x-6y)(4x-5y)",
      "(3x+7)(2x-4)",
      "(5x+6y)(4x-5y)",
    ],
    answer: 1,
  },
  {
    question: "Factorize \\( x^2 - 5x + 6 \\)?",
    options: [
      "\\((x-2)(x-3)\\)",
      "\\((x+2)(x-3)\\)",
      "\\((x-1)(x-6)\\)",
      "\\((x+1)(x+6)\\)",
    ],
    answer: 0, // The correct factorization is \\((x-2)(x-3)\\)
  },
  {
    question:
      "Simplify \\( \\frac{2x - 3}{3x^2 - 11x + 6} - \\frac{x + 5}{3x^2 - 5x - 12} \\)",
    options: [
      "\\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)",
      "\\( \\frac{2x - 3}{(3x - 2)(x - 3)} \\)",
      "\\( \\frac{x + 5}{(3x + 4)(x - 3)} \\)",
      "\\( \\frac{3x - 2}{(x - 3)(3x^2 - 11x + 6)} \\)",
    ],
    answer: 0, // The correct answer is \\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)
  },

  {
    question: "Solve \\( 2m^2 + 10m + 4 = 0 \\) using the quadratic formula.",
    options: [
      "\\( \\frac{-5 + \\sqrt{17}}{2} \\) and \\( \\frac{-5 - \\sqrt{17}}{2} \\)",
      "\\( \\frac{-5 + \\sqrt{68}}{4} \\) and \\( \\frac{-5 - \\sqrt{68}}{4} \\)",
      "\\( \\frac{-10 + \\sqrt{68}}{4} \\) and \\( \\frac{-10 - \\sqrt{68}}{4} \\)",
      "\\( \\frac{-10 + \\sqrt{17}}{2} \\) and \\( \\frac{-10 - \\sqrt{17}}{2} \\)",
    ],
    answer: 0, // The correct answer is \\( \\frac{-5 + \\sqrt{17}}{2} \\) and \\( \\frac{-5 - \\sqrt{17}}{2} \\)
  },

  {
    question: "Solve \\( 3x^2 - 6x + 2 = 0 \\) using the quadratic formula.",
    options: [
      "\\( 1 + \\frac{2\\sqrt{3}}{3} \\) and \\( 1 - \\frac{2\\sqrt{3}}{3} \\)",
      "\\( 1 + \\frac{\\sqrt{12}}{6} \\) and \\( 1 - \\frac{\\sqrt{12}}{6} \\)",
      "\\( 1 + \\frac{\\sqrt{3}}{3} \\) and \\( 1 - \\frac{\\sqrt{3}}{3} \\)",
      "\\( \\frac{6 + \\sqrt{12}}{6} \\) and \\( \\frac{6 - \\sqrt{12}}{6} \\)",
    ],
    answer: 2, // The correct answer is \\( 1 + \\frac{\\sqrt{3}}{3} \\) and \\( 1 - \\frac{\\sqrt{3}}{3} \\)
  },

  {
    question: "Factorize \\( 6x^2 + 17x + 12 \\)",
    options: [
      "\\((2x + 4)(3x + 3)\\)",
      "\\((3x + 4)(2x + 3)\\)",
      "\\((2x + 3)(3x + 4)\\)",
      "\\((3x + 3)(2x + 4)\\)",
    ],
    answer: 2, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question: "Factorize \\( 12x^2 - 11x + 2 \\)",
    options: [
      "\\((3x - 1)(4x - 2)\\)",
      "\\((3x - 2)(4x - 1)\\)",
      "\\((2x - 1)(6x - 2)\\)",
      "\\((4x - 1)(3x - 2)\\)",
    ],
    answer: 1, // The correct factorization is \\((3x - 2)(4x - 1)\\)
  },

  {
    question: "Factor completely \\( 6x^3 - 2x^2 + 15x - 5 \\)",
    options: [
      "\\((3x^2 + 5)(2x - 1)\\)",
      "\\((2x^2 + 5)(3x - 1)\\)",
      "\\((6x^2 - 1)(x + 5)\\)",
      "\\((2x^2 + 3)(3x - 5)\\)",
    ],
    answer: 1, // The correct factorization is \\((2x^2 + 5)(3x - 1)\\)
  },

  {
    question: "Factor completely \\( 6xy - 14y - 15x - 35 \\)",
    options: [
        "\\((6x - 5)(y - 7)\\)",
        "\\((2x + 7)(3y - 5)\\)",
        "\\((3x - 5)(2y + 7)\\)",
        "\\((3x + 7)(2y - 5)\\)",
    ],
    answer: 3 // The correct factorization is \\((3x + 7)(2y - 5)\\)
  }
  


];

export default questions;
