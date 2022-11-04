function verificar() {
    var hoje = new Date()
    var anohj = hoje.getFullYear()
    var ano = document.getElementById('idade')
    var genero = document.getElementsByName('inputsex')
    var img2 = document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var ano2 = Number(idade.value)
    var idade2 = anohj - ano2  
    if (idade2 == 2022){
        txt.innerHTML=`ERRO! Verifique seus dados novamente.`
        img2.src=''
    } else {
    if (genero[1].checked) {
        if (idade2 >= 0 && idade2 < 10) {
        txt.innerHTML=`Você tem ${idade2} anos e do sexo feminino`
        img2.src='foto-bebe-m.png'
        } else if (idade2 < 21) {
        txt.innerHTML=`Você tem ${idade2} anos  e do sexo feminino!`
        img2.src='foto-jovem-f.png'
        } else if (idade2 < 60) {
        txt.innerHTML=`Você tem ${idade2} anos  e do sexo feminino`
        img2.src='foto-adulto-f.png'
        } else {
        txt.innerHTML=`Você tem ${idade2} anos  e do sexo feminino`
        img2.src='foto-idoso-f.png'
        }
    } else if (genero[0].checked) {
        if (idade2 >= 0 && idade2 < 10) {
        txt.innerHTML=`Você tem ${idade2} anos e do sexo masculino`
        img2.src='foto-bebe-m.png'
        } else if (idade2 < 21) {
        txt.innerHTML=`Você tem ${idade2} anos e do sexo masculino`
        img2.src='foto-jovem-m.png'
        } else if (idade2 < 60) {
        txt.innerHTML=`Você tem ${idade2} anos e do sexo masculino`
        img2.src='foto-adulto-m.png'
        } else {
        txt.innerHTML=`Você tem ${idade2} anos e do sexo masculino`
        img2.src='foto-idoso-m.png'
        }
    }
}
}
