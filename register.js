function signUp (e) {
	// prevent refresh
	e.preventDefault()

	var mail = document.getElementById("email").value;
	var name = document.getElementById("name").value;
    var pno = document.getElementById("pnum").value;
    var vno = document.getElementById("vno").value;
    var address = document.getElementById("address").value;
	var idno = document.getElementById("idno").value;
    var gender = document.getElementById("select-gender").value;
	var dob = document.getElementById("dob").value;

	function User (email, name, tel, vno, address, idno, gender, dob) {
		this.email = email
		this.name = name
		this.tel = tel
		this.vno = vno
		this.address = address
		this.idno = idno
		this.gender = gender
		this.dob = dob
		this.pin = this.generatePin()
	}

	User.prototype.generatePin = function () {
		return Math.floor(Math.random() * 10000)
	}

	const newUser = new User(mail, name, pno, vno, address, idno, gender, dob)
	console.log(newUser)

	// Send to localStorage
	function storeData (userInstance) {
		if (window.localStorage) {
			localStorage.setItem('user', JSON.stringify(userInstance))
			alert(JSON.parse(localStorage.getItem('user')).pin)

			window.location.replace('http://localhost:5501/login.html')
		} else {
			alert("Browser doesn't support localstorage")
		}
	}
	//call storedata funtion and pass the user object
	storeData(newUser)
}




