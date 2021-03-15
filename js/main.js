document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const tabs = () => {
		const tabsSetElems = document.querySelectorAll('.tabs-set');
		const tabsElems = document.querySelectorAll('.tabs');
		const tabContentElems = document.querySelectorAll('.section2-tabs__tab1__content');

		const hideAll = () => {
			for (let i = 0; i < tabsSetElems.length; i++) {

				tabsSetElems[i].classList.remove('tab__active');
				tabsElems[i].classList.remove('n__active');
				tabContentElems[i].classList.remove('tab__active');

			}
		}
		for (let i = 0; i < tabsSetElems.length; i++) {
			tabsSetElems[i].addEventListener('click', () => {
				hideAll();
				tabsSetElems[i].classList.add('tab__active');
				tabsElems[i].classList.add('n__active');
				tabContentElems[i].classList.add('tab__active');
			});
		}

	}



	tabs();



});