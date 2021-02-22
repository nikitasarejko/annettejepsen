const bodyTag = document.querySelector('body');
const menuToggle = document.querySelector('div.burger-menu');
const mobileNavigation = document.querySelector('nav.navigation-mobile');

window.addEventListener(
	'load',
	function load()
	{
		window.removeEventListener('load', load, false);
		document.body.classList.remove('preload');
	},
	false);

menuToggle.addEventListener('click', function () {
	mobileNavigation.classList.toggle('visible');
	const allMobileLinks = document.querySelectorAll('nav.navigation-mobile a')
	
	if (mobileNavigation.classList.contains('visible')) {
		bodyTag.classList.add('locked');
		
		gsap.to(menuToggle, { rotation: 135, transformOrigin: '50% 50%' });
		gsap.from(allMobileLinks, { xPercent: 25, yPercent: 10, opacity: 0, stagger: 0.125, delay: 0.45 });
	} else {
		bodyTag.classList.remove('locked');
		
		gsap.to(menuToggle, { rotation: 0 });
	}
	
	const mobileLinks = mobileNavigation.querySelectorAll('a');
	
	mobileLinks.forEach(link => {
		link.addEventListener('click', function () {
			if (mobileNavigation.classList.contains('is-open')) {
				mobileNavigation.classList.remove('is-open')
				bodyTag.classList.remove('locked')
			}
		})
	})
});