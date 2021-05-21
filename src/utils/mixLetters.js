export default function mixLetters(newArray, oldArray) {
  const arr = new Set([...newArray, ...oldArray]);

  return Array.from(arr);
}
