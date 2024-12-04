function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	// Функция для открытия и закрытия навигации
	const toggleNav = () => {
		const isOpen = nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
		navBtn.setAttribute('aria-expanded', isOpen);
	};

	// Обработчик для кнопки навигации
	navBtn.addEventListener('click', (event) => {
		toggleNav();
	});

	// Обработчик для клика вне меню и по элементам меню
	nav.addEventListener('click', (event) => {
		if (nav.classList.contains('mobile-nav--open')) {
			toggleNav();
		}
	});
}

export default mobileNav;
