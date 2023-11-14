
function validateForm() {
  let x = document.forms["Form"]["input-email"].value;
  if (x == "") {
    alert("E-mail field must be filled out before submitting!");
    return false;
  }

};
