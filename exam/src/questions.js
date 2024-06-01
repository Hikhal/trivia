const questions = [
  {
    question:
      "Evaluate the expression \\( 3x - y(3y^2-x) \\) if x = -2 and y = 4",
    options: ["-206", "-121", "207", "-126"],
    answer: 0,
  },

  {
    question: "Factorize \\( 3x^2 + 17x - 28 \\)?",
    options: ["(2x+1)(3x-1)", "(3x-4)(x+7)", "(3x+7)(x-4)", "(3x+2)(10x+1)"],
    answer: 1,
  },

  {
    question: "Factorize \\( x^4y + 64xy \\)",
    options: [
      "\\( xy(x+3)(x^3 - 4x + 64) \\)",
      "\\( xy(x+4)(x^3 - 4x - 16) \\)",
      "\\( x^2y(x+3)(x^3 + 4x + 12) \\)",
      "\\( xy^4(x+3)(x^3 + 4x + 16) \\)",
    ],
    answer: 1,
  },
  {
    question: "Factorize \\( 20x^2 - 24xy - 25xy + 30y^2 \\)?",
    options: [
      "(4x+6)(3x-2)",
      "(5x-6y)(4x-5y)",
      "(3x+7)(2x-4)",
      "(5x+6y)(4x-5y)",
    ],
    answer: 1,
  },

  {
    question: "Simplify \\( \\frac{9}{2x - 7} + \\frac{3}{7 - 2x} \\)",
    options: [
      "\\( \\frac{6}{(2x - 7)} \\)",
      "\\( \\frac{-6}{(2x + 7)} \\)",
      "\\( \\frac{3}{(2x - 28)} \\)",
      "\\( \\frac{6}{(3x + 7)} \\)",
    ],
    answer: 0, // The correct answer is \\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)
  },

  {
    question: "Factorize \\( 3x^2 - 11x + 6 \\)",
    options: [
      "\\((3x - 2)(x - 3)\\)",
      "\\((3x + 2)(x + 3)\\)",
      "\\((2x - 3)(3x + 4)\\)",
      "\\((3x - 3)(2x + 4)\\)",
    ],
    answer: 0, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question: "Factorize \\( 6x^2 + 17x + 12 \\)",
    options: [
      "\\((3x - 1)(4x - 2)\\)",
      "\\((3x + 4)(2x + 3)\\)",
      "\\((3x - 1)(6x - 2)\\)",
      "\\((4x + 3)(x - 2)\\)",
    ],
    answer: 1, // The correct factorization is \\((3x - 2)(4x - 1)\\)
  },

  {
    question: "Factor completely \\( 6xy - 14y - 15x - 35 \\)",
    options: [
      "\\((6x - 5)(y - 7)\\)",
      "\\((2x + 7)(3y - 5)\\)",
      "\\((3x - 5)(2y + 7)\\)",
      "\\((3x + 7)(2y - 5)\\)",
    ],
    answer: 3, // The correct factorization is \\((3x + 7)(2y - 5)\\)
  },
  {
    question: "Simplify \\( \\frac{\\frac{2}{y} + 7y}{y + \\frac{3}{y}} \\)",
    options: [
      "\\( \\frac{2 + 7y^2}{y^2 + 4} \\)",
      "\\( \\frac{2y^2 + 7y^3}{y^2 + 3} \\)",
      "\\( \\frac{2 + 7y^2}{y^5 + 3} \\)",
      "\\( \\frac{2y^2 + 7y^3}{y + 3} \\)",
    ],
    answer: 0,
  },
  {
    question:
      "Simplify \\( \\frac{28x^3}{3x^2 - 16x - 12} * \\frac{6 - x}{7x^4} \\)",
    options: [
      "\\( \\frac{3x^2 - 14x - 2}{(3x - 2)(3x + 4)(x - 3)} \\)",
      "\\( \\frac{2x - 3}{(3x - 2)(x - 3)} \\)",
      "\\( \\frac{-4}{x(3x + 2)} \\)",
      "\\( \\frac{3x - 2}{(x - 3)(3x^2 - 11x + 6)} \\)",
    ],
    answer: 2,
  },

  {
    question:
      "Simplify \\( \\frac{3x^2 - 10x + 8}{2x^2 +3x - 14} * \\frac{18x}{24 - 18x} \\)",
    options: [
      "\\( \\frac{14x - 2}{(3x + 4)} \\)",
      "\\( \\frac{2x - 3}{(x - 3)} \\)",
      "\\( \\frac{-4}{x(3x + 2)} \\)",
      "\\( \\frac{-3x}{(2x + 7)} \\)",
    ],
    answer: 2,
  },

  {
    question: "Simplify \\( \\frac{\\frac{5}{z} + 6z}{z + \\frac{4}{z}} \\)",
    options: [
      "\\( \\frac{5 + 6z^2}{z^2 + 4} \\)",
      "\\( \\frac{5z^2 + 6z^3}{z^2 + 4} \\)",
      "\\( \\frac{5 + 6z^2}{z^8 + 4} \\)",
      "\\( \\frac{5z^2 + 6z^3}{z + 4} \\)",
    ],
    answer: 0,
  },

  {
    question: "Simplify \\( \\frac{3x-1}{2x-5} - \\frac{4x+2}{5-2x} \\)",
    options: [
      "\\( \\frac{3x^2 }{(3x - 2)} \\)",
      "\\( \\frac{2x - 3}{(x - 3)} \\)",
      "\\( \\frac{7x+1}{(2x - 5)} \\)",
      "\\( \\frac{3x - 2}{(x - 3)(3x + 2)} \\)",
    ],
    answer: 2,
  },
  {
    question:
      "Find the equation in slope-intercept form, of the line perpendicular to \\( y = 3x + 4 \\) passing through \\((-1,2) \\)",
    options: [
      "\\( y = -\\frac{1x}{3} - \\frac{5}{3} \\)",
      "\\(  y = \\frac{1x}{3} - \\frac{5}{3} \\)",
      "\\(  y = -3x + \\frac{5}{3} \\)",
      "\\(  y = -\\frac{1x}{5} - \\frac{5}{20} \\)",
    ],
    answer: 0,
  },
  {
    question:
      "Find the equation in slope-intercept form, of the line passing through \\((-1,6) \\) and \\((10,-2) \\)",
    options: [
      "\\( y = -\\frac{8x}{11} + \\frac{58}{11} \\)",
      "\\(  y = \\frac{11x}{8} + \\frac{58}{11} \\)",
      "\\(  y = -8x + \\frac{58}{11} \\)",
      "\\(  y = -\\frac{1x}{8} - \\frac{5}{20} \\)",
    ],
    answer: 0,
  },

  {
    question:
      "Find the center and radius of the circle given by \\(x^2 + y^2 -6y - 9 = 0 \\)",
    options: [
      "\\( Center = (0,3),  r = 3\\sqrt{2} \\)",
      "\\( Center = (3,1),  r = 3\\sqrt{15} \\)",
      "\\( Center = (3,0), r = 3\\sqrt{11} \\)",
      "\\(Center = (0,3), r = \\sqrt{2} \\)",
    ],
    answer: 0,
  },

  {
    question:
      "Find the center and radius of the circle given by \\(x^2 + y^2 + 6x -4y + 9 = 0 \\)",
    options: [
      "\\(Center = (-3,2),  r = \\sqrt{2} \\)",
      "\\(Center = (-3,2),  r = 2 \\)",
      "\\(Center = (3,2),   r = 3 \\)",
      "\\(Center = (2,3),   r = \\sqrt{8} \\)",
    ],
    answer: 1,
  },

  {
    question: "Simplify \\( \\sqrt{72x^3y^5} \\)",
    options: [
      "\\( 6x \\sqrt{2xy^5} \\)",
      "\\( 6xy^2 \\sqrt{2xy} \\)",
      "\\( 6xy \\sqrt{2xy^3} \\)",
      "\\( 6x \\sqrt{2x^2y^5} \\)",
    ],
    answer: 1, // The correct answer is \\( 6xy^2 \\sqrt{2xy} \\)
  },
  {
    question: "Simplify \\( \\sqrt[3]{108a^2b^7} \\)",
    options: [
      "\\( 3a^2b^2 \\sqrt[3]{4ab} \\)",
      "\\( 6ab^3 \\sqrt[3]{3b} \\)",
      "\\( 3ab^2 \\sqrt[3]{4a^2b} \\)",
      "\\( 6a \\sqrt[3]{3a^2b^7} \\)",
    ],
    answer: 0, // The correct answer is \\( 3a^2b^2 \\sqrt[3]{4ab} \\)
  },

  {
    question: "Simplify \\( \\sqrt[3]{54n^5} - \\sqrt[3]{16n^5} \\)",
    options: [
      "\\( 6n \\sqrt[3]{3n^4} \\)",
      "\\( 6n \\sqrt[3]{3n^4} \\)",
      "\\( n \\sqrt[3]{2n^2} \\)",
      "\\( n \\sqrt[3]{2n^4} \\)",
    ],
    answer: 2,
  },

  {
    question: "Simplify \\( \\sqrt[3]{9} * (4 - \\sqrt[3]{8}) \\)",
    options: [
      "\\( 12 \\sqrt[3]{9} \\)",
      "\\( -4\\sqrt[3]{9} \\)",
      "\\( 4 \\sqrt[3]{9} \\)",
      "\\( 2 \\sqrt[3]{9} \\)",
    ],
    answer: 3,
  },

  {
    question: "Simplify \\( (\\sqrt[4]{x^3})^2 * \\sqrt[8]{x}\\)",
    options: [
      "\\( \\sqrt[8]{x^{13}} \\)",
      "\\( \\sqrt[8]{x^6} \\)",
      "\\(  \\sqrt[8]{x^{14}} \\)",
      "\\( \\sqrt[8]{x^{10}} \\)",
    ],
    answer: 0,
  },

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
    question:
      "Simplify \\( \\frac{\\sqrt[6]{192y^8z^{13}}}{\\sqrt[6]{3yz^{11}}} \\)",
    options: [
      "\\( 5y \\sqrt[6]{yz^4} \\)",
      "\\( 2y\\sqrt[6]{yz^2} \\)",
      "\\( 3y \\sqrt[6]{yz} \\)",
      "\\( 2y\\sqrt[6]{y^2z} \\)",
    ],
    answer: 1,
  },

  {
    question: "Factorize \\( |3x - 2 | - 5 = 3 \\)",
    options: [
      "\\(x =\\frac{10}{3}, x = -2\\)",
      "\\(x = -3, x = -2\\)",
      "\\(x >= - 2\\)",
      "\\(x = \\frac{2}{3}, x = 5\\)",
    ],
    answer: 0, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question: "Factorize \\( |2x - 1 | <= 9 \\)",
    options: [
      "\\( (5, \\infty)\\)",
      "\\((-4,5)\\)",
      "\\((-\\infty, -4) u [5, \\infty)\\)",
      "\\([-4,5]\\)",
    ],
    answer: 3, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question:
      "Simplify \\( \\frac{\\frac{5}{3x^2} + \\frac{7}{5x}}{x + \\frac{1}{15}} \\)",
    options: [
      "\\( \\frac{25+21x}{x^2 (15x+1)} \\)",
      "\\( \\frac{30}{x^2 + x} \\)",
      "\\( \\frac{43}{x (15x + 1)} \\)",
      "\\( \\frac{15}{x + 1} \\)",
    ],
    answer: 0,
  },
  {
    question:
      "What is the solution to the following system of equations? \\[ \\begin{cases} 3x - y = -1 \\\\ 2x - 4y = 9 \\end{cases} \\]",
    options: [
      "\\( (-\\frac{13}{10}, -\\frac{29}{10}) \\)",
      "\\( (\\frac{13}{10}, -\\frac{29}{10}) \\)",
      "\\( (-\\frac{14}{10}, -\\frac{31}{10}) \\)",
      "\\( (\\frac{19}{10}, -\\frac{9}{10}) \\)",
    ],
    answer: 1, // Assuming the correct answer is (2, -1)
  },
  {
    question:
      "What is the \\( x \\)-coordinate of the solution to the following system of equations? \\[ \\begin{cases} 3x - 7y = 6 \\\\ 2x + y = -19 \\end{cases} \\]",
    options: [
      "\\( -\\frac{127}{17} \\)",
      "\\( -\\frac{129}{13} \\)",
      "\\( \\frac{123}{12} \\)",
      "\\( \\frac{127}{14}\\)",
    ],
    answer: 1, // Assuming the correct answer is -3
  },
  {
    question:
      "Find the hypotenuse of a right triangle with legs \\( 5\\sqrt{2} \\) and 11.",
    options: [
      "\\( 11\\sqrt{2} \\)",
      "\\( \\sqrt{171} \\)",
      "\\( \\sqrt{311} \\)",
      "\\( 11 \\)",
    ],
    answer: 1, // The correct answer is \\( \\sqrt{311} \\)
  },
  {
    question:
      "Find the third side of a right triangle with one leg of length \\( \\sqrt{3} \\) and the hypotenuse of length 10.",
    options: [
      "\\( 1 \\)",
      "\\( \\sqrt{51} \\)",
      "\\( \\sqrt{22} \\)",
      "\\( \\sqrt{97} \\)",
    ],
    answer: 3, // The correct answer is \\( \\sqrt{2} \\)
  },

  {
    question: "Factorize \\( |3x + 2 | >= 8 \\)",
    options: [
      "\\( (5, \\infty)\\)",
      "\\((-4,5)\\)",
      "\\((-\\infty, -\\frac{10}{3}] u [2, \\infty)\\)",
      "\\([-4,5]\\)",
    ],
    answer: 3, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question:
      "Solve for \\( x \\): \\[ \\frac{3}{x + 4} - \\frac{4}{x^2 - x - 20} = \\frac{7}{x - 5} \\]",
    options: [
      "\\( x = - \\frac{47}{4} \\)",
      "\\( x = -  \\frac{49}{4} \\)",
      "\\( x =  \\frac{51}{4} \\)",
      "\\( x =  \\frac{43}{4} \\)",
    ],
    answer: 0, // Assuming the correct answer is x = 5
  },
  {
    question:
      "Solve for \\( x \\): \\[ \\frac{x}{x - 5} - \\frac{5}{x + 5} = \\frac{10x}{x^2 - 25} \\]",
    options: [
      "\\( x = - \\frac{7}{4} \\)",
      "\\( x = -  \\frac{49}{4} \\)",
      "\\( x =  \\frac{51}{4} \\)",
      "\\( NO SOLUTION \\)",
    ],
    answer: 3, // Assuming the correct answer is x = 5
  },

  {
    question:
      "Divide: \\( \\left(y^3 - 7y + 3\\right) \\div \\left(y + 5\\right) \\)",
    options: [
      "\\( y^2 - 5y + 18 \\)",
      "\\( y^2 - 5y + 28 \\)",
      "\\( y^2 - 5y + 34 \\)",
      "\\( y^2 - 5y + 35 \\)",
    ],
    answer: 0, // Assuming the correct answer is y^2 - 5y + 28
  },
  {
    question:
      "Determine the remainder when \\( 2y^4 + 5y^3 - y + 6 \\) is divided by \\( y - 2 \\).",
    options: ["\\( 30 \\)", "\\( 28 \\)", "\\( 76 \\)", "\\( 34 \\)"],
    answer: 2, // Assuming the correct answer is 32
  },

  {
    question:
      "By completing the square, one can demonstrate that the quadratic equation \\( x^2 - 8x + 5 = 0 \\) is equivalent to.",
    options: [
      "\\( (x - 4)^2 - 11 = 0 \\)",
      "\\( (x - 4)^2 - 9 = 0 \\)",
      "\\( (x - 4)^2 - 7 = 0 \\)",
      "\\( (x - 4)^2 - 3 = 0 \\)",
    ],
    answer: 0, // The correct answer is \\( (x - 4)^2 - 7 = 0 \\)
  },
  {
    question:
      "By completing the square, one can demonstrate that the quadratic expression \\( x^2 + 6x + 3 \\) is equivalent to.",
    options: [
      "\\( (x + 3)^2 - 9 \\)",
      "\\( (x + 3)^2 - 6 \\)",
      "\\( (x + 3)^2 - 7 \\)",
      "\\( (x + 3)^2 - 3 \\)",
    ],
    answer: 1, // The correct answer is \\( (x + 3)^2 - 6 \\)
  },

  {
    question:
      "Rationalize the denominator: \\[ \\frac{2 + \\sqrt{3}}{1 + \\sqrt{3}} \\]",
    options: [
      "\\( \\frac{2 - \\sqrt{3}}{1 - \\sqrt{3}} \\)",
      "\\( \\frac{1 + \\sqrt{3}}{2} \\)",
      "\\( \\frac{2\\sqrt{3} - 3}{2} \\)",
      "\\( \\frac{1 + \\sqrt{3}}{-2} \\)",
    ],
    answer: 2, // The correct answer is \\( \\frac{2\\sqrt{3} - 3}{2} \\)
  },
  {
    question:
      "Rationalize the denominator: \\[ \\frac{2 + \\sqrt{3}}{\\sqrt{5} - 3} \\]",
    options: [
      "\\( -\\frac{2\\sqrt{5} + \\sqrt{15}+ 3\\sqrt{3} + 6}{4} \\)",
      "\\( \\frac{2\\sqrt{5} + 3\\sqrt{3}}{5 - 9} \\)",
      "\\( \\frac{2\\sqrt{5} + 3\\sqrt{5}}{5 - 3} \\)",
      "\\( \\frac{2\\sqrt{5} + 5\\sqrt{3}}{5 - 3} \\)",
    ],
    answer: 0, // The correct answer is \\( \\frac{2\\sqrt{5} + 2\\sqrt{3}}{5 - 9} \\)
  },
];

export default questions;
