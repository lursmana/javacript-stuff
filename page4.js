function getOptions() {
  var select = document.getElementById('mySelect');
  var selectedColor = select.options[select.selectedIndex].text; 
  window.alert("Selected color: " + selectedColor); 
}