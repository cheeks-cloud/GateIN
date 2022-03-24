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
            window.location.replace('http://localhost:5501/Profile/profile.html')
        } else {
            alert('No such user exists in our database')
        }
    }

    checkCredentials(pin)
}