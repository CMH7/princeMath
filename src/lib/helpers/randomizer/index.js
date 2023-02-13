/**
 * 
 * @param {number} len 
 * @param {number} max 
 * @param {number} min 
 * @returns {number}
 */
const randomizer = (len, max, min) => {
  if (len == 1) return Math.floor(Math.random() * (max - min + 1) + min);
  if (len == 2) return Math.floor(Math.random() * (max - min + 1) + min);
  if (len == 3) return Math.floor(Math.random() * (max - min + 1) + min);
  return 0
}

export default randomizer