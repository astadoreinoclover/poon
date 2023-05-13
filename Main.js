"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Dog_1 = require("./Dog");
const teclado = (0, prompt_sync_1.default)();
const nome = teclado("Digite o nome do Pet: ");
const porte = teclado("Digite o porte do Pet (P/M/G): ");
const raca = teclado("Digite a raça do Pet: ");
// Definição do personagem
const cachorro = new Dog_1.Dog(nome, porte, raca);
console.log('cachorro :>> ', cachorro);
let abandonar = false;
while (true) {
    if (abandonar) {
        break;
    }
    console.log('+--------------------------------+');
    console.log('| 1. Latir                       |');
    console.log('| 2. Comer                       |');
    console.log('| 3. Dormir                      |');
    console.log('| 4. Correr                      |');
    console.log('| 5. Reproduzir                  |');
    console.log('| 6. Beber                       |');
    console.log('| 9. Abandonar                   |');
    console.log('+--------------------------------+');
    let opcao = +teclado("Escolha uma opção: ");
    switch (opcao) {
        case 1:
            const numeroDeLatidas = +teclado('Número de latidas: ');
            cachorro.latir(numeroDeLatidas);
            break;
        case 2:
            const quantidadeEmGramas = +teclado('Quantidade de ração em gramas: ');
            cachorro.comer(quantidadeEmGramas);
            break;
        case 3:
            const numeroDeHoras = +teclado('Horas dormidas: ');
            cachorro.dormir(numeroDeHoras);
            break;
        case 9:
            abandonar = true;
            break;
        default:
            break;
    }
    console.log(cachorro.status());
    if (cachorro.isAlive()) {
        console.log('Seu pet foi de comis e bebis.');
        abandonar = true;
    }
}
