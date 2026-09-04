const kleinLetters: string = "azertyuiopqsdfghjklmwxcvbn";
const hoofdLetters: string = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const cijfers: string = "0123456789";
const specialeTekens: string = "&$*`£/+=-;?@#";
const lengteWachtwoord: number = 12;

const samenVoegen: string =
  kleinLetters + hoofdLetters + cijfers + specialeTekens;

console.log(samenVoegen);
