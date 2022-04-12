console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
`Salvador`,
`São Paulo`,
`Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPAssagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis: ");
//listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}

for(let i = 0; cont < 3; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        //break;
    }
    
}

