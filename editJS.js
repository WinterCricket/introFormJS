function startEdit() {
	var element = document.getElementById('editElement');
	element.contentEditable = true;
	element.focus();
}


function endEdit() {
	var element = document.getElementById('editElement');
	element.contentEditable = false;
	alert("You wrote: \n" + element.innerHTML);
}


document.getElementById('startButt').onclick=function(){
	startEdit();
}


document.getElementById('endButt').onclick=function(){
	endEdit();
}