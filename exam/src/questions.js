const questions = [
  {
    question:
      "Evaluate the expression \\( \\frac{x^2 + y - 2}{y^2 - 5z} \\) if x = 3  y = 2 and z = 4",
    options: ["\\(-\\frac{9}{16} \\)", "-9", "16", "\\(\\frac{16}{9}\\)"],
    answer: 0,
  },

  {
    question:
      "Simplify \\( \\frac{9x^2-16}{3x^2 + 17x - 28} \\div \\frac{3x^2 - 2x - 8}{x^2 + 5x - 14} \\)",
    options: [
      "\\( 1 \\)",
      "\\( \\frac{2x - 3}{(3x - 2)(x - 3)} \\)",
      "\\( \\frac{-4}{x(3x + 2)} \\)",
      "\\( \\frac{3x - 2}{(x - 3)(3x^2 - 11x + 6)} \\)",
    ],
    answer: 0,
  },

  {
    question: "Factorize \\( x^4y + 64xy \\)",
    options: [
      "\\( xy(x+3)(x^3 - 4x + 64) \\)",
      "\\( xy(x+4)(x^3 - 4x - 16) \\)",
      "\\( x^2y(x+3)(x^3 + 4x + 12) \\)",
      "\\( xy^4(x+3)(x^3 - 4x + 16) \\)",
    ],
    answer: 3,
  },
  {
    question:
      "Which one of the options is a factor of:  \\( 2x^3 - x^2 + 14x - 7 \\)?",
    options: ["\\(2x - 2\\)", "\\(2x + 1\\)", "\\(x^2 + 7\\)", "\\(x^2 - 2\\)"],
    answer: 2,
  },

  {
    question: "\\( (-4x^2 + 8x - 1) - (-5x^2 + 6x - 7) \\)",
    options: [
      "\\( x^2 + 2x + 6 \\)",
      "\\( x^2 + 6x + 2\\)",
      "\\( x^2 - 10x + 9\\)",
      "\\( x^2 + 2\\)",
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
    question:
      "Simplify the expression: \\[ \\left( \\frac{2x^3y^{-3}}{x^{-2}y^5} \\right)^{-3} \\]",
    options: [
      "\\( \\frac{2^{-3}x^{-15}y^{24}}{1} \\)",
      "\\( 8x^{-15}y^{24} \\)",
      "\\( \\frac{y^{24}}{8x^{15}} \\)",
      "\\( 8x^{15}y^{-24} \\)",
    ],
    answer: 2, // The correct answer is \\( 8x^{15}y^{-24} \\)
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
      "Find the equation in slope-intercept form, of the line perpendicular to \\( y = 5x - 2 \\) passing through \\((-2,3) \\)",
    options: [
      "\\( y = -\\frac{1x}{5} + \\frac{13}{5} \\)",
      "\\(  y = \\frac{1x}{3} - \\frac{5}{3} \\)",
      "\\(  y = -3x + \\frac{5}{3} \\)",
      "\\(  y = -\\frac{1x}{5} - \\frac{5}{20} \\)",
    ],
    answer: 0,
  },
  {
    question:
      "Find the equation in slope-intercept form, of the line passing through \\((2,-4) \\) and \\((4,6) \\)",
    options: [
      "\\( y = -\\frac{8x}{11} + \\frac{58}{11} \\)",
      "\\(  y = \\frac{11x}{8} + \\frac{58}{11} \\)",
      "\\(  y = 5x - 14 \\)",
      "\\(  y = -\\frac{1x}{8} - \\frac{5}{20} \\)",
    ],
    answer: 2,
  },

  {
    question:
      "Find the center and radius of the circle given by \\(x^2 + y^2 +6x - 4y + 9 = 0 \\)",
    options: [
      "\\( Center = (1,2),  r = 7 \\)",
      "\\( Center = (2,1),  r = 49 \\)",
      "\\( Center = (-3,2), r = 2 \\)",
      "\\(Center = (2,-1), r = \\sqrt{7} \\)",
    ],
    answer: 2,
  },

  {
    question:
      "Find the center and radius of the circle  \\((x-4)^2 + (y - 3)^2  = 25 \\)",
    options: [
      "\\(Center = (-3,2),  r = \\sqrt{2} \\)",
      "\\(Center = (-3,2),  r = 2 \\)",
      "\\(Center = (4,3),   r = 5 \\)",
      "\\(Center = (2,3),   r = \\sqrt{8} \\)",
    ],
    answer: 2,
  },

  {
    question: "Simplify \\( \\sqrt{125x^7y^8} \\)",
    options: [
      "\\( 5x^3y^4\\sqrt{5x} \\)",
      "\\( 5xy^2 \\sqrt{5x^2y} \\)",
      "\\( 5xy \\sqrt{2xy^3} \\)",
      "\\( 5x \\sqrt{2x^2y^5} \\)",
    ],
    answer: 0, // The correct answer is \\( 6xy^2 \\sqrt{2xy} \\)
  },
  {
    question: "Simplify \\( \\sqrt[3]{-250x^7z^25} \\)",
    options: [
      "\\( -5x^2z^8 \\sqrt[3]{2xz} \\)",
      "\\(-5x^2z^4 \\sqrt[3]{2xz^4}  \\)",
      "\\( -5xz^8 \\sqrt[3]{2xz}  \\)",
      "\\( -5x^2z \\sqrt[3]{2xz}  \\)",
    ],
    answer: 0, // The correct answer is \\( 3a^2b^2 \\sqrt[3]{4ab} \\)
  },

  {
    question: "Simplify \\( (a^{-5}b^{15})^-\\frac{4}{5} \\)",
    options: [
      "\\(  \\frac{a^4}{b^{12}}\\)",
      "\\(\\frac{a^6}{b^{13}} \\)",
      "\\(  \\frac{a^12}{b^{6}} \\)",
      "\\(\\frac{a^2}{b^{3}} \\)",
    ],
    answer: 0,
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
    question: "Simplify \\( \\sqrt[6]{y^2} * \\sqrt{y}\\)",
    options: [
      "\\( \\sqrt[6]{y^5} \\)",
      "\\( \\sqrt[6]{y^6} \\)",
      "\\(  \\sqrt[6]{y^{14}} \\)",
      "\\( \\sqrt[6]{y^{10}} \\)",
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
      "Simplify \\( \\frac{\\sqrt[6]{190y^8z^{13}}}{\\sqrt[6]{5yz^{11}}} \\)",
    options: [
      "\\( 2y \\sqrt[6]{yz^4} \\)",
      "\\( y\\sqrt[6]{38yz^2} \\)",
      "\\( 3y \\sqrt[6]{yz} \\)",
      "\\( 4y\\sqrt[6]{y^2z} \\)",
    ],
    answer: 1,
  },

  {
    question: "\\( 6|x + 5 | + 2 = 20 \\)",
    options: [
      "\\(x = -2, x = -8\\)",
      "\\(x = -3, x = -2\\)",
      "\\(x >= - 2\\)",
      "\\(x = \\frac{2}{3}, x = 5\\)",
    ],
    answer: 0, // The correct factorization is \\((2x + 3)(3x + 4)\\)
  },

  {
    question: "\\( 4|5x - 2| \\leq 16 \\)",
    options: [
      "\\( (5, \\infty)\\)",
      "\\((-4,5)\\)",
      "\\((-\\infty, -6) u (4, \\infty)\\)",
      "\\([-4,5]\\)",
    ],
    answer: 2, // The correct factorization is \\((2x + 3)(3x + 4)\\)
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
      "What is the solution to the following system of equations? \\[ \\begin{cases} 2x + 2y = 9 \\\\ 6x + 7y = 11 \\end{cases} \\]",
    options: [
      "\\( (-\\frac{13}{10}, -\\frac{29}{10}) \\)",
      "\\( (\\frac{41}{2}, -16) \\)",
      "\\( (-\\frac{14}{10}, -\\frac{31}{10}) \\)",
      "\\( (\\frac{19}{10}, -\\frac{9}{10}) \\)",
    ],
    answer: 1, // Assuming the correct answer is (2, -1)
  },
  {
    question:
      "What is the \\( x \\)-coordinate of the solution to the following system of equations? \\[ \\begin{cases} 3x - 2y = 2 \\\\ 4x + 3y = 14 \\end{cases} \\]",
    options: [
      "\\( -4 \\)",
      "\\( -3 \\)",
      "\\( 2\\)",
      "\\( 5\\)",
    ],
    answer: 2, // Assuming the correct answer is -3
  },
  {
    question:
      "Find the hypotenuse of a right triangle with legs \\( 2\\sqrt{10} \\) and 4.",
    options: [
      "\\( 2\\sqrt{14} \\)",
      "\\( 3\\sqrt{11} \\)",
      "\\( 3\\sqrt{311} \\)",
      "\\( 11 \\)",
    ],
    answer: 0, // The correct answer is \\( \\sqrt{311} \\)
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
    question:
      "Find the equation in slope-intercept form, of the line passing through \\((4,-6) \\) and \\((2,6) \\)",
    options: [
      "\\( y = 4x + \\frac{58}{11} \\)",
      "\\(  y = 2x + \\frac{58}{11} \\)",
      "\\(  y = -6x + 18 \\)",
      "\\(  y = -\\frac{1x}{8} - \\frac{5}{20} \\)",
    ],
    answer: 2,
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
      "By completing the square, one can demonstrate that the quadratic expression \\( x^2 + 6x - 72 = 0 \\) to solve.",
    options: [
      "\\( x = 10, x = 4\\)",
      "\\( x = 8, x = -2\\)",
      "\\( x = 7, x = 3 \\)",
      "\\( x = 1, x = 5\\)",
    ],
    answer: 0,
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
      "Determine the remainder when \\( x^3 + 2\\) is divided by \\( x - 1 \\).",
    options: ["\\( 3 \\)", "\\( 2 \\)", "\\( 7 \\)", "\\( 4 \\)"],
    answer: 0, // Assuming the correct answer is 32
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
      "Rationalize the denominator: \\[ \\frac{\\sqrt{3} + \\sqrt{5}}{\\sqrt{3} - \\sqrt{5}} \\]",
    options: [
      "\\( -4 - \\sqrt{15} \\)",
      "\\(4 - \\sqrt{152}  \\)",
      "\\( 6 + \\sqrt{15}  \\)",
      "\\( 3 + \\sqrt{17}  \\)",
    ],
    answer: 0, // The correct answer is \\( \\frac{2\\sqrt{3} - 3}{2} \\)
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
  {
    question: "Find the distance between \\( (4, -3) \\) and \\( (2, -7) \\).",
    options: [
      "\\( 2\\sqrt{5} \\)",
      "\\( \\sqrt{22} \\)",
      "\\( \\sqrt{23} \\)",
      "\\( \\sqrt{25} \\)"
    ],
    answer: 0 // The correct answer is \\( \\sqrt{20} \\)
  },
  {
    question: "Find the midpoint between \\( (-8, -6) \\) and \\( (7, -9) \\).",
    options: [
      "\\( (-\\frac{1}{2}, -\\frac{15}{2}) \\)",
      "\\( (-\\frac{1}{2}, -\\frac{11}{2}) \\)",
      "\\( (-\\frac{1}{3}, -\\frac{15}{2}) \\)",
      "\\((-\\frac{1}{4}, -\\frac{15}{1}) \\)"
    ],
    answer: 0 // The correct answer is \\( (-0.5, -7.5) \\)
  }
];

export default questions;
