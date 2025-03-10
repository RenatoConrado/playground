
/**
 * Generates a random Integer Number
 * @param max Max Interger Number
 * @param [min=0] default `0`, Min Interger Number
 * @example getRandomNumber(6, 1); // Range 1 to 6
 */
export default function getRandomNumber(max: number, min: number = 0): number {
  const delta = max - min + 1;
  const randomNumber = Math.random() * delta + min;
  return Math.floor(randomNumber);
}
