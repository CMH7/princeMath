const randomizer = (/** @type number*/ len) => {
  if (len == 1) return Math.floor(Math.random() * 10);
  if (len == 2) return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  if (len == 3) return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  return 0
}

export default randomizer