var contador=0
var res = document.getElementById('res') 


function clicou(){
    contador++
    res.innerHTML=`${contador} cliques.`
}

function reset(){
    contador=0
    res.innerHTML=`${contador} cliques.`
}



