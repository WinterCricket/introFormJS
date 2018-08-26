
document.getElementById("submit").onclick=function() {
	var doSubmit = validateForm();
	if(doSubmit == false) {
		return false;
	}
}


function validateForm() {

	var funnyName = document.getElementById('funnyName');
	var theValue = funnyName.value;
	if(theValue != "Smimey Coats") {
		console.log("WARNING! You are attempting to breach Winter Cricket security!");

		var messageHolder = document.getElementById('target');
		messageHolder.style.color = "red";
		messageHolder.innerHTML = "<h2>WARNING: Enter your correct Funny Name!</h2>";
		funnyName.select();
		//funnyName.focus();

		return false;

		//console.log("BREACH ATTEMPTED!");
	} 





}