console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
`Salvador`,
`São Paulo`,
`Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPAssagemComprada = true;

console.log("Destinos possíveis: ");
listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log(listaDeDestinos);

/*if (idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);//removendo item

} else if (estaAcompanhada){
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1,1);//removendo item
}else{
        console.log("Não é maior de idade e não posso vender");
}*/



// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true){
        console.log("Boa viagem!!!");
        listaDeDestinos.splice(2,1);//removendo item
    
} else {
        console.log("Não é maior de idade e não posso vender");
}

console.log("\nEmbarque: \n\n");
if(idadeComprador >= 18 && temPAssagemComprada){
        console.log("Boa viagem!!!");
} else{
        console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);


