// console.log("Hallo World");

//set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", () => {
	headerEl.classList.toggle("nav-open");
});

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const href = link.getAttribute("href");

		// scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		// scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// close mobilenav
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		// adding
		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}
		// removing
		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

// browser support for safari

function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
