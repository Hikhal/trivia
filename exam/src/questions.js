// const questions = [
//   {
//     question: "Factorize \\( 3x^2 + 17x - 28 \\)?",
//     options: ["(2x+1)(3x-1)", "(3x-4)(x+7)", "(3x+7)(x-4)", "(3x+2)(10x+1)"],
//     answer: 1,
//   },
//   // {
//   //   question: "Factorize \\( 3x^2 + 17x - 28 \\)?",
//   //   options: ["(2x+1)(3x-1)", "(3x-4)(x+7)", "(3x+7)(x-4)", "(3x+2)(10x+1)"],
//   //   answer: 1,
//   // },
//   {
//     question: "Factorize \\( x^4y + 27xy \\)",
//     options: [
//       "\\( xy(x+3)(x^3 - 3x + 9) \\)",
//       "\\( xy(x+3)(x^3 - 3x - 9) \\)",
//       "\\( x^2y(x+3)(x^3 + 3x + 12) \\)",
//       "\\( xy^4(x+3)(x^3 + 3x + 9) \\)",
//     ],
//     answer: 0,
//   },
//   {
//     question: "Factorize \\( x^2 + 5x - 14 \\)?",
//     options: ["(x-5)(3x-1)", "(x-7)(x+2)", "(3x+7)(x-12)", "(x-2)(x+7)"],
//     answer: 3,
//   },
//   {
//     question: "Factorize \\( 20x^3 - 24xy - 25xy + 30y^2 \\)?",
//     options: [
//       "(4x+6)(3x-2)",
//       "(5x-6y)(4x-5y)",
//       "(3x+7)(2x-4)",
//       "(5x+6y)(4x-5y)",
//     ],
//     answer: 1,
//   },
//   {
//     question: "Factorize \\( x^2 - 5x + 6 \\)?",
//     options: [
//       "\\((x-2)(x-3)\\)",
//       "\\((x+2)(x-3)\\)",
//       "\\((x-1)(x-6)\\)",
//       "\\((x+1)(x+6)\\)",
//     ],
//     answer: 0, // The correct factorization is \\((x-2)(x-3)\\)
//   },
// {
//   question:
//     "Simplify \\( \\frac{2x - 3}{3x^2 - 11x + 6} - \\frac{x + 5}{3x^2 - 5x - 12} \\)",
//   options: [
//     "\\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)",
//     "\\( \\frac{2x - 3}{(3x - 2)(x - 3)} \\)",
//     "\\( \\frac{x + 5}{(3x + 4)(x - 3)} \\)",
//     "\\( \\frac{3x - 2}{(x - 3)(3x^2 - 11x + 6)} \\)",
//   ],
//   answer: 0, // The correct answer is \\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)
// },

//   {
//     question: "Solve \\( 2m^2 + 10m + 4 = 0 \\) using the quadratic formula.",
//     options: [
//       "\\( \\frac{-5 + \\sqrt{17}}{2} \\) and \\( \\frac{-5 - \\sqrt{17}}{2} \\)",
//       "\\( \\frac{-5 + \\sqrt{68}}{4} \\) and \\( \\frac{-5 - \\sqrt{68}}{4} \\)",
//       "\\( \\frac{-10 + \\sqrt{68}}{4} \\) and \\( \\frac{-10 - \\sqrt{68}}{4} \\)",
//       "\\( \\frac{-10 + \\sqrt{17}}{2} \\) and \\( \\frac{-10 - \\sqrt{17}}{2} \\)",
//     ],
//     answer: 0, // The correct answer is \\( \\frac{-5 + \\sqrt{17}}{2} \\) and \\( \\frac{-5 - \\sqrt{17}}{2} \\)
//   },

//   {
//     question: "Solve \\( 3x^2 - 6x + 2 = 0 \\) using the quadratic formula.",
//     options: [
//       "\\( 1 + \\frac{2\\sqrt{3}}{3} \\) and \\( 1 - \\frac{2\\sqrt{3}}{3} \\)",
//       "\\( 1 + \\frac{\\sqrt{12}}{6} \\) and \\( 1 - \\frac{\\sqrt{12}}{6} \\)",
//       "\\( 1 + \\frac{\\sqrt{3}}{3} \\) and \\( 1 - \\frac{\\sqrt{3}}{3} \\)",
//       "\\( \\frac{6 + \\sqrt{12}}{6} \\) and \\( \\frac{6 - \\sqrt{12}}{6} \\)",
//     ],
//     answer: 2, // The correct answer is \\( 1 + \\frac{\\sqrt{3}}{3} \\) and \\( 1 - \\frac{\\sqrt{3}}{3} \\)
//   },

//   {
//     question: "Factorize \\( 6x^2 + 17x + 12 \\)",
//     options: [
//       "\\((2x + 4)(3x + 3)\\)",
//       "\\((3x + 4)(2x + 3)\\)",
//       "\\((2x + 3)(3x + 4)\\)",
//       "\\((3x + 3)(2x + 4)\\)",
//     ],
//     answer: 2, // The correct factorization is \\((2x + 3)(3x + 4)\\)
//   },

//   {
//     question: "Factorize \\( 12x^2 - 11x + 2 \\)",
//     options: [
//       "\\((3x - 1)(4x - 2)\\)",
//       "\\((3x - 2)(4x - 1)\\)",
//       "\\((2x - 1)(6x - 2)\\)",
//       "\\((4x - 1)(3x - 2)\\)",
//     ],
//     answer: 1, // The correct factorization is \\((3x - 2)(4x - 1)\\)
//   },

//   {
//     question: "Factor completely \\( 6x^3 - 2x^2 + 15x - 5 \\)",
//     options: [
//       "\\((3x^2 + 5)(2x - 1)\\)",
//       "\\((2x^2 + 5)(3x - 1)\\)",
//       "\\((6x^2 - 1)(x + 5)\\)",
//       "\\((2x^2 + 3)(3x - 5)\\)",
//     ],
//     answer: 1, // The correct factorization is \\((2x^2 + 5)(3x - 1)\\)
//   },

//   {
//     question: "Factor completely \\( 6xy - 14y - 15x - 35 \\)",
//     options: [
//         "\\((6x - 5)(y - 7)\\)",
//         "\\((2x + 7)(3y - 5)\\)",
//         "\\((3x - 5)(2y + 7)\\)",
//         "\\((3x + 7)(2y - 5)\\)",
//     ],
//     answer: 3 // The correct factorization is \\((3x + 7)(2y - 5)\\)
//   }

// ];
// const questions = [
  // {
  //   question: "Simplify \\( \\frac{\\frac{2}{y} + 7y}{y + \\frac{3}{y}} \\)",
  //   options: [
  //     "\\( \\frac{2 + 7y^2}{y^2 + 4} \\)",
  //     "\\( \\frac{2y^2 + 7y^3}{y^2 + 3} \\)",
  //     "\\( \\frac{2 + 7y^2}{y^5 + 3} \\)",
  //     "\\( \\frac{2y^2 + 7y^3}{y + 3} \\)",
  //   ],
  //   answer:0,
  // },
  // {
  //   question:
  //     "Simplify \\( \\frac{28x^3}{3x^2 - 16x - 12} * \\frac{6 - x}{7x^4} \\)",
  //   options: [
  //     "\\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)",
  //     "\\( \\frac{2x - 3}{(3x - 2)(x - 3)} \\)",
  //     "\\( \\frac{-4}{x(3x + 2)} \\)",
  //     "\\( \\frac{3x - 2}{(x - 3)(3x^2 - 11x + 6)} \\)",
  //   ],
  //   answer: 2,
  // },

  // {
  //   question:
  //     "Simplify \\( \\frac{3x^2 - 10x + 8}{2x^2 +3x - 14} * \\frac{18x}{24 - 18x} \\)",
  //   options: [
  //     "\\( \\frac{14x - 2}{(3x + 4)} \\)",
  //     "\\( \\frac{2x - 3}{(x - 3)} \\)",
  //     "\\( \\frac{-4}{x(3x + 2)} \\)",
  //     "\\( \\frac{-3x}{(2x + 7)} \\)",
  //   ],
  //   answer: 2,
  // },

  // {
  //   question: "Simplify \\( \\frac{\\frac{5}{z} + 6z}{z + \\frac{4}{z}} \\)",
  //   options: [
  //     "\\( \\frac{5 + 6z^2}{z^2 + 4} \\)",
  //     "\\( \\frac{5z^2 + 6z^3}{z^2 + 4} \\)",
  //     "\\( \\frac{5 + 6z^2}{z^8 + 4} \\)",
  //     "\\( \\frac{5z^2 + 6z^3}{z + 4} \\)",
  //   ],
  //   answer: 0,
  // },
  // {
  //   question: "Simplify \\( \\frac{\\frac{4}{a} + 8a}{a + \\frac{6}{a}} \\)",
  //   options: [
  //     "\\( \\frac{4 + 8a^2}{a^2 + 6} \\)",
  //     "\\( \\frac{4a^2 + 8a^3}{a^2 + 6} \\)",
  //     "\\( \\frac{4 + 8a^2}{a^9 + 6} \\)",
  //     "\\( \\frac{4a^2 + 8a^3}{a + 6} \\)",
  //   ],
  //   answer: 0,
  // },
  // {
  //   question: "Simplify \\( \\frac{\\frac{6}{b} + 9b}{b + \\frac{2}{b}} \\)",
  //   options: [
  //     "\\( \\frac{6 + 9b^2}{b^2 + 2} \\)",
  //     "\\( \\frac{6b^2 + 9b^3}{b^2 + 2} \\)",
  //     "\\( \\frac{6 + 9b^2}{b^3 + 2} \\)",
  //     "\\( \\frac{6b^2 + 9b^3}{b + 2} \\)",
  //   ],
  //   answer: 0,
  // },

  // {
  //   question: "Simplify \\( \\frac{3x-1}{2x-5} - \\frac{4x+2}{5-2x} \\)",
  //   options: [
  //     "\\( \\frac{3x^2 }{(3x - 2)} \\)",
  //     "\\( \\frac{2x - 3}{(x - 3)} \\)",
  //     "\\( \\frac{7x+1}{(2x - 5)} \\)",
  //     "\\( \\frac{3x - 2}{(x - 3)(3x + 2)} \\)",
  //   ],
  //   answer: 2,
  // },

  // {
  //   question:
  //     "Simplify \\( \\frac{3r - 9}{12r^2 + 24r} * \\frac{6r + 12}{6r - 18} \\)",
  //   options: [
  //     "\\( \\frac{1}{(4r)} \\)",
  //     "\\( \\frac{4r}{r^4} \\)",
  //     "\\( \\frac{-4}{4(2r + 2)} \\)",
  //     "\\( \\frac{3r - 2}{(r)} \\)",
  //   ],
  //   answer: 0,
  // },
// ];

const questions = [
  {
    question: "Simplify \\( \\sqrt{72x^3y^5} \\)",
    options: [
      "\\( 6x \\sqrt{2xy^5} \\)",
      "\\( 6xy^2 \\sqrt{2xy} \\)",
      "\\( 6xy \\sqrt{2xy^3} \\)",
      "\\( 6x \\sqrt{2x^2y^5} \\)"
    ],
    answer: 1 // The correct answer is \\( 6xy^2 \\sqrt{2xy} \\)
  },
  {
    question: "Simplify \\( \\sqrt[3]{108a^2b^7} \\)",
    options: [
      "\\( 3a^2b^2 \\sqrt[3]{4ab} \\)",
      "\\( 6ab^3 \\sqrt[3]{3b} \\)",
      "\\( 3ab^2 \\sqrt[3]{4a^2b} \\)",
      "\\( 6a \\sqrt[3]{3a^2b^7} \\)"
    ],
    answer: 0 // The correct answer is \\( 3a^2b^2 \\sqrt[3]{4ab} \\)
  },
  {
    question: "Simplify \\( \\sqrt[4]{200k^5m^3} \\)",
    options: [
      "\\( 2k \\sqrt[4]{50k^4m^3} \\)",
      "\\( k^2m \\sqrt[4]{2k^4m} \\)",
      "\\( 3k^2m \\sqrt[4]{2km} \\)",
      "\\( 2k^2m \\sqrt[4]{12km} \\)"
    ],
    answer: 1 // The correct answer is \\( k^2m \\sqrt[4]{2k^4m} \\)
  },
  {
    question: "Simplify \\( \\sqrt[5]{180p^4q^6} \\)",
    options: [
      "\\( pq \\sqrt[5]{36p^4q^6} \\)",
      "\\( p^2q \\sqrt[5]{36pq} \\)",
      "\\( 3pq \\sqrt[5]{4p^3q^4} \\)",
      "\\( p^2q \\sqrt[5]{36p^2q^2} \\)"
    ],
    answer: 3 // The correct answer is \\( p^2q \\sqrt[5]{36p^2q^2} \\)
  },
  {
    question: "Simplify \\( \\sqrt[6]{50x^6y^2} \\)",
    options: [
      "\\( xy \\sqrt[6]{50x^5y} \\)",
      "\\( 5xy \\sqrt[6]{2x^5y} \\)",
      "\\( 2x^3y \\sqrt[6]{5} \\)",
      "\\( 5x \\sqrt[6]{2x^6y^2} \\)"
    ],
    answer: 2 // The correct answer is \\( 2x^3y \\sqrt[6]{5} \\)
  },
  {
    question: "Simplify \\( \\sqrt{80m^5n^4} \\)",
    options: [
      "\\( 4mn^2 \\sqrt{5m^3} \\)",
      "\\( 4m^2n^2 \\sqrt{5m} \\)",
      "\\( 4m^2n \\sqrt{5mn^3} \\)",
      "\\( 4mn \\sqrt{5m^4n^2} \\)"
    ],
    answer: 1 // The correct answer is \\( 4m^2n^2 \\sqrt{5m} \\)
  },
  {
    question: "Simplify \\( \\sqrt[3]{245r^7s^2} \\)",
    options: [
      "\\( 5r^2s \\sqrt[3]{49rs} \\)",
      "\\( 7r^2s \\sqrt[3]{5rs} \\)",
      "\\( 7r^3s \\sqrt[3]{5r} \\)",
      "\\( 7r^2s \\sqrt[3]{5r^3s^2} \\)"
    ],
    answer: 1 // The correct answer is \\( 7r^2s \\sqrt[3]{5rs} \\)
  },
  {
    question: "Simplify \\( \\sqrt[4]{180u^4v^6} \\)",
    options: [
      "\\( uv \\sqrt[4]{180u^3v^2} \\)",
      "\\( uv^2 \\sqrt[4]{180uv^4} \\)",
      "\\( u^2v \\sqrt[4]{45v^2} \\)",
      "\\( u^2v \\sqrt[4]{45u^2v^2} \\)"
    ],
    answer: 3 // The correct answer is \\( u^2v \\sqrt[4]{45v^2} \\)
  }
];




export default questions;
