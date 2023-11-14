// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
}
function validateForm() {
  let x = document.forms["Form"]["input-email].value;
  if (x == "") {
    alert("E-mail field must be filled out before submitting!");
    return false;
  }
}
});
