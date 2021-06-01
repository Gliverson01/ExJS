function verificar() { // função
  var data = new Date() //data atual
  var ano = data.getFullYear() //ano atual
  var fano = document.getElementById('txtano') // ano digitado pelo usuario
  var res = document.querySelector('div#res') // transformar res em variavel.
  if (fano.value.length == 0 || Number(fano.value) > ano ) { //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.
      window.alert('Erro')
  } else {
      var fsex = document.getElementsByName('radsex') //existe a opção [0] e [1].
      var idade = ano - Number(fano.value) //ano atual menos ano digitado pelo usuario.
      var gênero = '' // string vazia
      var img = document.createElement('img') // elemento para criar foto
      img.setAttribute('id' , 'foto')  //igual criar no html <img id = "foto">.
      if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
          } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-m.png')
          } else if (idade < 50)  {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
          } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
          }    
      } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
          // Criança
          img.setAttribute('src', 'foto-bebe-f.png')
    } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', 'foto-jovem-f.png') 
    } else if (idade < 50)  {
          // Adulto
          img.setAttribute('src', 'foto-adulto-f.png')
    } else {
          // Idoso
          img.setAttribute('src', 'foto-idoso-f.png')
    } 
      }
      res.style.textAlign = 'center'//estilo para deixar no centro
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
}

}