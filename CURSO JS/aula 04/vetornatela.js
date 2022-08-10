var vetor=[8,2,3,4,5,6,1]
/*
for (var i=0;i<vetor.length;i++){
    console.log(`A posição ${i} tem valor ${vetor[i]}`)
}
*/
vetor.sort()
for(var i in vetor){
    console.log(`A posição ${i} tem valor ${vetor[i]}`)
}//forma nova for para vetores e objetos

var procura=vetor.indexOf(8)
console.log(procura)
procura=vetor.indexOf(18)
console.log(procura)
//procurar valores em vetor, retorna a posição, quando nao acha, retorna -1