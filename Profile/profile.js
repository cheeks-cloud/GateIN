window.onload = function () {

    const name = document.getElementById('name')
    const dob = document.getElementById('dob')
    const id = document.getElementById('id')
    const gender = document.getElementById('gender')
    const address = document.getElementById('address')
    const tel = document.getElementById('tel')
    const email = document.getElementById('email')
    const vno = document.getElementById('vno')

    function getUserData () {
        const storedAddress = JSON.parse(localStorage.getItem('user')).address
        const storedName = JSON.parse(localStorage.getItem('user')).name
        const storedDob = JSON.parse(localStorage.getItem('user')).dob
        const storedEmail = JSON.parse(localStorage.getItem('user')).email
        const storedGender = JSON.parse(localStorage.getItem('user')).gender
        const storedIdno = JSON.parse(localStorage.getItem('user')).idno
        const storedPin = JSON.parse(localStorage.getItem('user')).pin
        const storedTel = JSON.parse(localStorage.getItem('user')).tel
        const storedVno = JSON.parse(localStorage.getItem('user')).vno

        name.textContent = storedName
        dob.textContent = storedDob
        id.textContent = storedIdno
        gender.textContent = storedGender
        address.textContent = storedAddress
        tel.textContent = storedTel
        email.textContent = storedEmail
        vno.textContent = storedVno
    }

    getUserData()

}

function sendToHome(e) {
    window.location.replace('http://localhost:5501/index.html')
}