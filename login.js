function login (e) {
    e.preventDefault()

    //get form inputs
    const email = document.getElementById('email').value
    const pin = document.getElementById('pin').value

    // confirm user credentials
    function checkCredentials (email, pin) {
        
        // request user data from local storage
        const storedEmail = JSON.parse(localStorage.getItem('user')).email
        const storedPin = JSON.parse(localStorage.getItem('user')).pin

        // validate if their match
        if (email === storedEmail && pin == storedPin) {
            window.location.replace('http://localhost:5501/Profile/profile.html')
        } else {
            alert('No such user exists in our database')
        }
    }

    checkCredentials(email, pin)
}