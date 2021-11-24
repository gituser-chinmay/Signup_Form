function verifyCredentials() {
	var fname = document.getElementById("fname").value;
	var lname= document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var pwd = document.getElementById("password").value;

	if (fname==null || fname==""){
		document.getElementById("error-fname").style.display="block";
		document.getElementById("fname").style.border="1px solid hsl(0, 100%, 74%)"
	}
	if (lname==null || lname==""){
		document.getElementById("error-lname").style.display="block";
		document.getElementById("lname").style.border="1px solid hsl(0, 100%, 74%)"
	}
	if (email==null || email==""){
		document.getElementById("error-email").style.display="block";
		document.getElementById("email").style.border="1px solid hsl(0, 100%, 74%)"
	}
	if (pwd==null || pwd==""){
		document.getElementById("error-pwd").style.display="block";
		document.getElementById("pwd").style.border="1px solid hsl(0, 100%, 74%)"
	}

}