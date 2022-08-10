

function adicionar(){
    var res=document.querySelector("div#res")
    var numtxt=document.getElementById('txtn')
    var numadd=Number(numtxt.value)
    var tab=document.getElementById('numbers')
    if(numtxt.value.length==0 || numadd>100 || numadd<1){
        alert('Preencha os dados corretamente.')
    }
    
    else if(numeros.indexOf(numadd) != -1){
        alert("Número ja adicionado.")
        //res.innerHTML=`${numeros.indexOf(numadd)}`
    }
    else{
        numeros.push(numadd)
        var item = document.createElement('option')
        item.text = `Valor ${numadd} foi adicionado`
        //item.value= `tab${i}`
        tab.appendChild(item)
        
    }
    res.innerHTML=''
    numtxt.value = ""
    numtxt.focus()
}


var numeros=[]


function finalizar(){
    if (numeros.length==0){
        alert("Adicione valores primeiro.")
    }else{
        var soma=0
        var media=0
        for(var i in numeros){
            soma+=numeros[i]
            
        }
        media=soma/numeros.length
        res.innerHTML=`<p>Ao todo, temos ${numeros.length} números cadastrados.<p\>`
        numeros.sort()
        res.innerHTML+=`<p>O maior valor foi ${numeros[(numeros.length)-1]}<p\>`
        res.innerHTML+=`<p>O menor valor foi ${numeros[0]}<p\>`
        res.innerHTML+=`<p>A soma dos valores foi ${soma}<p\>`
        res.innerHTML+=`<p>A media dos valores foi ${media}<p\>`
    }

}