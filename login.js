
// function logIn() {
// 	var mail = document.getElementById("email").value;
// 	var pin = document.getElementById("pin").value;

// 	if (mail == "" || pin == "") {
// 		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
// 		return false;
// 	}

// 	else if (password.length < 8) {
// 		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
// 		return false;
// 	}
// 	else {
// 		alert("Successfully logged in");
// 		return true;
// 	}
// }

function login (e) {
    e.preventDefault()

    //get form inputs
    const pin = document.getElementById('pin').value

    // confirm user credentials
    function checkCredentials (pin) {
        
        // request user data from local storage
        const storedPin = JSON.parse(localStorage.getItem('user')).pin

        // validate if their match
        if (pin == storedPin) {
            window.location.replace('https://cheeks-cloud.github.io/GateIN/Profile/profile.html')
        } else {
            alert('No such user exists in our database')
        }
    }

    checkCredentials(pin)
}