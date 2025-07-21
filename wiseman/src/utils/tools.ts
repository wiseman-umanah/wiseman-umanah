const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


export function randomMatrixString(length: number) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += matrixChars[Math.floor(Math.random() * matrixChars.length)];
  }
  return str;
}
