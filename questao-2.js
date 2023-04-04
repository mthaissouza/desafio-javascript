function isPalindrome(string) {
  //converte a string em caixa baixa
  let stringConvert = string.toLowerCase();
  //converte a string para array => inverte o array => converte o array para string
  let reversed = stringConvert.split("").reverse().join("");
  return stringConvert === reversed;
}

console.log(isPalindrome("Deleveled"));
console.log(isPalindrome("eleveled"));
