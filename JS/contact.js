$(document).ready(function () {

  $('form .alert').hide()

  $("form.user-message").submit(function (e) {
    e.preventDefault()
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();

    $('form #formname').text(firstName + ' ' + lastName)
    $('form .alert').toggle()
    $("form").reset();
  });
});