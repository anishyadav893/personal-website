window.addEventListener("load", () => {
	document.querySelector(".main").classList.remove("hidden");
	document.querySelector(".home-section").classList.add("active");
	/* page loader */
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(() => {
		document.querySelector(".page-loader").style.display = "none";
	}, 600);
});

/* toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
	hideSection();
	toggleNavbar();
	document.body.classList.toggle("hide-scrolling");
})

function hideSection() {
	document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
	document.querySelector(".header").classList.toggle("active");
}

/* active section */
document.addEventListener("click", (e) => {
	if(e.target.classList.contains("link-item") && e.target.hash !== ""){
		document.querySelector(".overlay").classList.add("active");
		navToggler.classList.add("hide");
		if(e.target.classList.contains("nav-item")){
			toggleNavbar();
		}
		else{
			hideSection();
			document.body.classList.add("hide-scrolling");
		}
		setTimeout(() => {
			document.querySelector("section.active").classList.remove("active", "fade-out");
			document.querySelector(e.target.hash).classList.add("active");
			window.scrollTo(0, 0);
			document.body.classList.remove("hide-scrolling");
			navToggler.classList.remove("hide");
			document.querySelector(".overlay").classList.remove("active");
		}, 500);
	}
})

/* about tabs */
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
	if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});

/* portfolio popup */
document.addEventListener("click", (e) => {
	if(e.target.classList.contains("view-project-btn")) {
		togglePortfolioPopup();
		document.querySelector(".portfolio-popup").scrollTo(0, 0);
		portfolioItemDetails(e.target.parentElement);
	}
})

function togglePortfolioPopup() {
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// popu ide when clicked outside of it
document.addEventListener("click", (e) => {
	if(e.target.classList.contains("pp-inner")) {
		togglePortfolioPopup();
	}
})

function portfolioItemDetails(portfolioItem) {
	document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
	document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
	document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// set up text to print, each item in array is new line
var aText = new Array(
"An ordinary person,",
"with extraordinary dreams"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();