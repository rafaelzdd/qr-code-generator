/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const perguntas = [
  {
    type: "input", //tipo de dado
    name: "url", //atributo que o objeto vai acessar
    message: "Digite a URL desejada:", //prompt
  },
];

inquirer.prompt(perguntas).then((answers) => {
  fs.writeFile("input.txt", answers.url, (err) => {
    if (err) throw err;
    console.log("A URL foi salva!");
  });
  var qr_png = qr.image(answers.url, { type: "png" });
  qr_png.pipe(fs.createWriteStream("qr-code.png"));
});