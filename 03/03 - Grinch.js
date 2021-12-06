export default function isValid(letter) {
  const InvalidRegExp = /[{}[\]]/i;
  const filteredLetters = []
  letter.split(' ').map(x => {
    if (!InvalidRegExp.test(x)) { filteredLetters.push(x) }
  })
  const newLetter = filteredLetters.join(' ');
  return newLetter.includes("(") && newLetter.includes(")") && !newLetter.includes("()")
}