function calcular(){
    var txtnum=document.getElementById('txtnum')
    var num=Number(txtnum.value)
    var tab=document.getElementById('seltab')
    if (txtnum.value.length == 0){
        alert("Por favor digite um numero!")
    }else{
        tab.innerHTML=""
        for (var i=0;i<=10;i++){
            //res.innerHTML+=`${num} x ${i} = ${num*i}<br\>`
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value= `tab${i}`
            tab.appendChild(item)

        }
    }
    
}