const footerYear = document.querySelector('.footer__year');
const mainNav = document.querySelector('.navbar__menu');
const hamburger =document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	mainNav.classList.toggle('active')
})

document.querySelectorAll('.navbar__menu--links').forEach(n =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active')
		mainNav.classList.remove('active')
	})
)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

lightbox.option({
	resizeDuration: 200,
	wrapAround: true,
})


