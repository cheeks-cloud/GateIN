
// $(window).on("hashchange", function () {
// 	if (location.hash.slice(1) == "signup") {
// 		$(".page").addClass("extend");
// 		$("#login").removeClass("active");
// 		$("#signup").addClass("active");
// 	} else {
// 		$(".page").removeClass("extend");
// 		$("#login").addClass("active");
// 		$("#signup").removeClass("active");
// 	}
// });
// $(window).trigger("hashchange");

function signUp() {
	var mail = document.getElementById("email").value;
	var name = document.getElementById("name").value;
    var pno = document.getElementById("pnum").value;
    var vno = document.getElementById("vno").value;
    var address = document.getElementById("address").value;
	var idno = document.getElementById("idno").value;
    var gender = document.getElementById("gender").checked;
    var dob = document.getElementById("dob").value;


	if (mail == "" || name == "" || pno == ""  || vno == "" || address == "" || idno == ""||gender == "" || dob == "" ) {
		alert("Please fill the required fields")
		return false;
	}

	else if (pno.length < 10) {
		alert( "Your phone number must be 10 characters")
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}