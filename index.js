function abrirPopup(popup){
  const elementoPopup = document.getElementById(popup)
  elementoPopup.showModal()
}

function fecharPopup(popup){
  const elementoPopup = document.getElementById(popup)
  elementoPopup.close() 
}