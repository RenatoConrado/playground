export default function getRandomNumber(max: number, min: number = 0): number {
  const delta = max - min + 1;
  const randomNumber = Math.random() * delta + min;
  return Math.floor(randomNumber);
}
