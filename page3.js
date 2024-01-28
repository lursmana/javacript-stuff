function getFormvalue() {
  event.preventDefault();
  var fname = document.getElementsByName("fname")[0].value;
  var lname = document.getElementsByName("lname")[0].value;
  var result = document.getElementsByClassName("result")[0];
  result.textContent = "First Name: " + fname + ", Last Name: " + lname;
}
