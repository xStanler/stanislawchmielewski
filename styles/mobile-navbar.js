const navButton = document.querySelector(".navbar-mobile");
const mobileNavButton = document.querySelector(".mobile-nav-button");

const mobileNavbar = document.querySelector(".mobile-nav");

const content = document.querySelector(".navbar-mobile i");
const mobileContent = document.querySelector(".mobile-nav-button i");

navButton.onclick = () => {
	content.className = "icon-cancel";

	showNavbar();
	transition();
}

mobileNavButton.onclick = () => {
	content.className = "icon-menu";

	hideNavbar();
	transition();
}

var showNavbar = () => {
	mobileNavbar.style.display = "block";
	mobileNavbar.style.right = "0";
}

var hideNavbar = () => {
	mobileNavbar.style.right = "-80%";
	// mobileNavbar.style.display = "none";
}

var transition = () => {
	mobileNavbar.style.transition = "right 1s ease";
}