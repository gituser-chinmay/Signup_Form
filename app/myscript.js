const validated = new Map([
	['fname',0],
	['lname',0],
	['email',0],
	['password',0]
])

function validateInput(obj) {
	var item = document.getElementById(obj).value;
	var error_id = "error-" + obj;

	if (item == null || item == "") {
		document.getElementById(error_id).style.display = "block";
		document.getElementById(obj).style.border = "1px solid hsl(0, 100%, 74%)";
		validated.set(obj,0)
	} else {
		document.getElementById(error_id).style.display = "none";
		document.getElementById(obj).style.border = "1px solid #d3d3d3";
		validated.set(obj,1)
	}
}

function submitForm() {
	for (const [key,value] of validated.entries()) {
		if (value=='0') {
			console.log('inavlid form');
			break;
		} else {
			continue;
		}
	}
}