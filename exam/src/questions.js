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
    question: "Simplify \\( (\\sqrt{5} + 3) * (\\sqrt{5} - 2) \\)",
    options: [
      "\\( -1 +  \\sqrt{5} \\)",
      "\\( 1 +  \\sqrt{6} \\)",
      "\\( 2 +  \\sqrt{3} \\)",
      "\\( 4 +  \\sqrt{8} \\)",
    ],
    answer: 0,
  },
  {
    question: "Simplify \\( \\frac{\\sqrt[6]{192y^8z^{13}}}{\\sqrt[6]{3yz^{11}}} \\)",
    options: [
      "\\( 5y \\sqrt[6]{yz^4} \\)",
      "\\( 2y\\sqrt[6]{yz^2} \\)",
      "\\( 3y \\sqrt[6]{yz} \\)",
      "\\( 2y\\sqrt[6]{y^2z} \\)",
    ],
    answer: 1,
  },
  {
    question: "Simplify \\( \\sqrt[3]{-250x^7z^{25}} \\)",
    options: [
      "\\( -5x^2z^8 \\sqrt[3]{2xz} \\)",
      "\\( -10x^3z^7 \\sqrt[3]{3xz^2} \\)",
      "\\( -5xz \\sqrt[3]{3xz} \\)",
      "\\( -10x^3z^2 \\sqrt[3]{2xz} \\)",
    ],
    answer: 0,
  },
  {
    question: "Simplify \\( \\sqrt[4]{162} + 4\\sqrt[4]{32}\\)",
    options: [
      "\\( 11\\sqrt[4]{2} \\)",
      "\\( 2\\sqrt[4]{2} \\)",
      "\\( 8\\sqrt[4]{5} \\)",
      "\\( 10\\sqrt[4]{3} \\)",
    ],
    answer: 0,
  },
];

export default questions;
