const btn = document.getElementById("btn");
const passwordLength = document.getElementById("passwordLength");
const passwordResult = document.getElementById("passwordResult");

const kleinLetters: string = "azertyuiopqsdfghjklmwxcvbn";
const hoofdLetters: string = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const cijfers: string = "0123456789";
const specialeTekens: string = "&$*`£/+=-;?@#";

btn?.addEventListener("click", () => {
  const lengte: number = Number((passwordLength as HTMLInputElement).value);

  let samenVoegen: string =
    kleinLetters + hoofdLetters + cijfers + specialeTekens;

  let volledigWachtwoord: string = "";

  for (let i = 0; i < lengte; i++) {
    const willekeurigGetal: number = Math.floor(
      Math.random() * samenVoegen.length,
    );

    volledigWachtwoord += samenVoegen[willekeurigGetal];
  }

  if (passwordResult) {
    passwordResult.textContent = volledigWachtwoord;
  }
});
