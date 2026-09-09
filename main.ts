const kleinLetters: string = "azertyuiopqsdfghjklmwxcvbn";
const hoofdLetters: string = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const cijfers: string = "0123456789";
const specialeTekens: string = "&$*`£/+=-;?@#";
const lengteWachtwoord: number = 12;

let samenVoegen: string =
  kleinLetters + hoofdLetters + cijfers + specialeTekens;

let volledigWachtwoord: string = "";

for (let i = 0; i < lengteWachtwoord; i++) {
  const willekeurigGetal: number = Math.floor(
    Math.random() * samenVoegen.length,
  );

  volledigWachtwoord += samenVoegen[willekeurigGetal];
}

console.log("Generated password:", volledigWachtwoord);
