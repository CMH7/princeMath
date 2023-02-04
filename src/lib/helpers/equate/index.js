/**
 * 
 * @param {number} operation 
 * @param {number} num1 
 * @param {number} num2 
 * 
 * @return number
 */
const solve = (operation, num1, num2) => {
  if (operation == 1) return num1 + num2
  if (operation == 2) return num1 - num2
  if (operation == 3) return num1 * num2
  if (operation == 4) return num1 / num2
  if (operation == 5) return num1 % num2
  return 0
}

export default solve
