function backToIndex() {
	window.location.href = "index.html";
}
function initialize() {
	var temp1 = document.getElementById("mobile");
	var temp2 = document.getElementById("computer");
	var finTemp = document.getElementById("main-container");
	// console.log("bjdnc");
	if (window.innerWidth <= 800) {
		finTemp.innerHTML = temp1.innerHTML;
		// console.log("1");
	} else {
		finTemp.innerHTML = temp2.innerHTML;
		// console.log("2");
	}
}
