function showHamburgerNav() {
	var x = document.getElementById("menu");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}