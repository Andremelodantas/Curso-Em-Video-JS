function verificou(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('idadetxt')
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value)>ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        //alert('OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''
        var img = document.createElement('img')//criançao de imagem dinamica
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade<11){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovemh.png')
            }
            else if(idade <50){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade<11){
                img.setAttribute('src', 'menina.png')
            }else if(idade <21){
                img.setAttribute('src', 'jovemm.png')
            }
            else if(idade <50){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos!`
        res.style.textAlign = 'center'
        res.appendChild(img)

    }
}