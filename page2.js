function getSize() {
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;

  const div = document.getElementById('wh')
  div.innerHTML = `Screenheight = ${screenHeight}  Screenwidth = ${screenWidth}`

  
}
