
function logIn() {
	var mail = document.getElementById("email").value;
	var pin = document.getElementById("pin").value;

	if (mail == "" || pin == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}