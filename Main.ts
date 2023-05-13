import prompt from 'prompt-sync';
import { Dog } from './Dog';

const teclado = prompt();
const nome = teclado("Digite o nome do Pet: ");
const porte = teclado("Digite o porte do Pet (P/M/G): ");
const raca = teclado("Digite a raça do Pet: ");

// Definição do personagem
const cachorro: Dog = new Dog(nome, porte, raca);

console.log('cachorro :>> ', cachorro);
let abandonar:boolean = false;
while(true){
  
  if(abandonar){
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
  
  

  let opcao: number = +teclado("Escolha uma opção: ")

  switch (opcao) {
    case 1:
      const numeroDeLatidas = +teclado('Número de latidas: ');
      cachorro.latir(numeroDeLatidas);
      
      break;
    case 2:
      const quantidadeEmGramas = +teclado('Quantidade de ração em gramas: ')
      cachorro.comer(quantidadeEmGramas);

      break;
    case 3:
      const numeroDeHoras = +teclado('Horas dormidas: ')
      cachorro.dormir(numeroDeHoras);

      break;
    case 9:
      abandonar = true;
      
      break;
  
    default:
      break;
  }
  console.log(cachorro.status());
  
  if(cachorro.isAlive()) {
    console.log('Seu pet foi de comis e bebis.');
    abandonar = true;
  }
}
