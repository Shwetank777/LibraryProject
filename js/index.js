function loginForm() {
	var formDiv = document.getElementById("form");
	var finalDivText = document.getElementById("login-form-text").innerHTML;
	formDiv.innerHTML = finalDivText;
}
function signupForm() {
	var formDiv = document.getElementById("form");
	var finalDivText = document.getElementById("signup-form-text").innerHTML;
	formDiv.innerHTML = finalDivText;
}
function focusLogin() {
	var pos = document
		.getElementsByClassName("login-box")[0]
		.getBoundingClientRect();
	x = pos.left;
	y = pos.top;
	window.scrollTo(x, y);
}
function focusSignup() {
	var pos = document
		.getElementsByClassName("signup-box")[0]
		.getBoundingClientRect();
	x = pos.left;
	y = pos.top;
	window.scrollTo(x, y);
}
async function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	queryObj = {
		username: username,
		password: password,
	};
	// console.log(queryObj);
	query = await makeAsyncPostRequest("/checkLogin/", queryObj);
	// console.log(query);
	if (query.result["status"] == true) {
		window.location.href = "library.html";
	} else {
		window.alert("Login Error!!!");
	}
}
async function insertSignup() {
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("emailid").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	queryObj = {
		name: name,
		phone: phone,
		email: email,
		username: username,
		password: password,
	};
	// console.log(queryObj);
	query = await makeAsyncPostRequest("/insertSignup/", queryObj);
	// console.log(query);
	if (query.result["status"] == true) {
		// console.log("hello");
		window.alert("Signup Succesfull");
		window.location.href = "index.html";
	} else {
		window.alert("try again");
	}
}
