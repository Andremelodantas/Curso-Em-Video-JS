function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res=document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML='Impossivel contar'
        //alert('Preencha os dados corretamente!')
    }else{
        
        //res.innerHTML+=`<br\>Inicio ${Number(inicio.value)} fim ${Number(fim.value)} passo ${Number(passo.value)}`
        res.innerHTML=`Contando...<br\>`
        var a=Number(inicio.value)
        var b=Number(fim.value)
        var c=Number(passo.value)
        if (c==0){
            alert("Passo invalido, considerando como 1.")
            c=1
        }
        if (a<b){
            for (a;a<=b;a+=c){
                res.innerHTML+=`${a} \u{1F449} `
            }
        }else{
            for (a;b<=a;a-=c){
                res.innerHTML+=`${a} \u{1F449} `
            }
        }
        res.innerHTML+="Fim.\u{1F3C1}"  
    }
}