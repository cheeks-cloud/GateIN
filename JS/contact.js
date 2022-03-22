$(document).ready(function () {
 $("form.user-message").submit(function (event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var email = $("input#email").val();
    var phone = $("input#phoneNumber").val();
    var message = $("textarea#message").val();

    if (firstName && lastName && email && phone && message) {
      alert(
        "Hey " +
          firstName +
          ", we have received your message. Thank you for reaching out to us. We shall get back to you shortly."
      );
      $("form").reset();
    } else {
      alert("Please fill the form correctly");
    }
    event.preventDefault();
});
  });