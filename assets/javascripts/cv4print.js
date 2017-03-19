function printMe(printArea) {
	var printContent = document.getElementById(printArea).innerHTML;
	var originalContent = document.body.innerHTML;
	document.body.innerHTML = printContent;

	window.print();

	document.body.innerHTML = originalContent;
}
function closeMe() {
	window.close();
}
