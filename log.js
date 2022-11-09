var objPeople = [
	{ // Object @ 0 index
		username: "teacher@gmail.com",
		password: "123456"
	},
    {
        username: "teacher2@gmail.com",
		password: "456789"
    }

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.href = "index.html"
			alert(username + " is logged in!!!")
            return;
		}
	}
    alert("Incorrect username or Password")
}