let myImage = document.querySelector("img");

myImage.addEventListener("click", function() {
	let mySrc = myImage.getAttribute("src");
	if(mySrc === "01.png"){
	  myImage.setAttribute("src", "02.png");
	} else {
	  myImage.setAttribute("src", "01.png");
	}
});