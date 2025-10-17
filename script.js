function carregar() {
              var msg = window.document.getElementById('msg')
              var img = document.getElementById('imagem')
              var agora = new Date()
              var hora = agora.getHours()              
              var minuto = agora.getMinutes()
              if (hora >= 0 && hora < 12) {
                  img.src = "src/img/Manhã.png"
                  msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto} minutos.`
                  document.body.style.background = 'linear-gradient(#fd990eff, #ebc751ff, #75a8f1ff, #316accff, #106a66ff, #093f37ff)'
              } else if (hora >= 12 && hora < 18) {
                  img.src = "src/img/Tarde.png"
                  msg.innerHTML = `Boa tarde! Agora são ${hora}:${minuto}.`
                  document.body.style.background = 'linear-gradient(#5c9af2ff, #6f8db8ff, #cc7c4bff, #110968ff)'
                  document.querySelector('h1').style.color = '#453535ff'
                  document.querySelector('div#msg').style.color ='#453535ff'
              } else {
                  img.src = "src/img/Noite.png"
                  msg.innerHTML = `Boa noite! Agora são ${hora}:${minuto}.`
                  document.body.style.background = 'linear-gradient(#0c0032ff, #34254bff, #5b375bff, #87375eff)'
                  document.querySelector('h1').style.color = '#ffffff'
                  document.getElementById('msg').style.color ='#ffffff'
                  document.querySelector('footer p').style.color = '#ffffff'

              }
}
