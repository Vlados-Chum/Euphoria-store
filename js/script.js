"use strict"

// BURGER

document.addEventListener("click", handleClick);

function handleClick(e) {
	const targetElement = e.target;

	if (targetElement.closest('.header__burger')) {
		document.body.classList.toggle('burger-open');
	}
}


// SPOLLER-FOOTER

document.addEventListener("DOMContentLoaded", () => {
	const spoller = document.querySelector(".popular-categories");
	const spollerButton = document.querySelector(".popular-categories__button");
	const spollerBody = document.querySelector(".popular-categories__body");
 
	spollerButton.addEventListener("click", () => {
	  spoller.classList.toggle("active");
	  spollerButton.classList.toggle("active");
	  spollerBody.classList.toggle("active");
	  
	  if (spollerBody.classList.contains("active")) {
      spollerBody.style.maxHeight = spollerBody.scrollHeight + "px";
    	} else {
      spollerBody.style.maxHeight = 0;
    };
	});
 });

//  Как работает код:
// HTML: Имеется кнопка со стрелкой и скрытый блок с контентом (popular-categories__body).
// CSS:
// У блока со стрелкой (popular-categories__img) добавлена анимация поворота (transform: rotate(180deg)).
// Скрытие/показ контента выполнено с помощью display: none и класса .active.
// JavaScript:
// При клике на кнопку добавляется/удаляется класс active для кнопки и блока контента.
// Анимация поворота стрелки происходит за счёт добавления класса active у кнопки.


// SPOLLER-FILTER

document.addEventListener("DOMContentLoaded", () => {
	const spoller = document.querySelector(".catalog__spoller-filter");
	const spollerButton = document.querySelector(".filter__header");
	const spollerBody = document.querySelector(".filter__body");
 
	// Открываем спойлер по умолчанию
	spoller.classList.add("opened");
	spollerButton.classList.add("opened");
	spollerBody.classList.add("opened");
	spollerBody.style.maxHeight = spollerBody.scrollHeight + "px";

	// Активируем спойлер
	spollerButton.addEventListener("click", () => {
	  spoller.classList.toggle("opened");
	  spollerButton.classList.toggle("opened");
	  spollerBody.classList.toggle("opened");
	  
	  if (spollerBody.classList.contains("opened")) {
      spollerBody.style.maxHeight = spollerBody.scrollHeight + "px";
    	} else {
      spollerBody.style.maxHeight = 0;
    };
	});

	// SPOLLERS ALL ON THE PAGE

	const spollers = document.querySelectorAll(".section-filter__spoller");

	spollers.forEach(spoller => {
		 const spollerButton = spoller.querySelector(".section-filter__header");
		 const spollerBody = spoller.querySelector(".section-filter__box-spoller");

		 // Открываем спойлер по умолчанию
		 spoller.classList.add("opened");
		 spollerButton.classList.add("opened");
		 spollerBody.classList.add("opened");
		 spollerBody.style.maxHeight = spollerBody.scrollHeight + "px";

		 // Активируем спойлер при клике
		 spollerButton.addEventListener("click", () => {
			  const isOpened = spoller.classList.toggle("opened");

			  spollerButton.classList.toggle("opened");
			  spollerBody.classList.toggle("opened");

			  if (isOpened) {
				spollerBody.style.maxHeight = spollerBody.scrollHeight + spollerBody.offsetHeight + "px";
			  } else {
					spollerBody.style.maxHeight = "0px";
			  }
		 });
	});
 });

// SLIDER HERO

const heroSlider = document.querySelector('.hero');

if(heroSlider) {

	const swiper = new Swiper('.hero', {
		loop: true,
		autoHeight: true,
		speed: 1000,
		parallax: true, //добавляет эффект параллакса с добавлением на элемент слайдера атрибута data-swiper-parallax="80%"
	
		pagination: {
		  el: '.swiper-pagination-horizontal',
		  clickable: true,
		},
	
		navigation: {
		  nextEl: '.hero__arrow--next',
		  prevEl: '.hero__arrow--prev',
		},
	});

}

// / SLIDER NEW

const newSlider = document.querySelector('.new');

if(newSlider) {

	new Swiper('.new__swiper', {
		loop: true,
		autoheight: true,
		speed: 800,
		spaceBetween: 38,
		slidesPerView: 4,
	
		navigation: {
		  nextEl: '.new__arrow--next',
		  prevEl: '.new__arrow--prev',
		},

		breakpoints: {
			320: {
				slidesPerView: 1.5,
				spaceBetween: 20
			}, 

			480: {
				slidesPerView: 2,
				spaceBetween: 20
			}, 

			650: {
				slidesPerView: 3,
				spaceBetween: 25
			},

			991: {
				slidesPerView: 4,
				spaceBetween: 38
			}
		}
	});

}

// SLIDER REVIEWS

const reviewsSlider = document.querySelector('.reviews');

if(reviewsSlider) {

	new Swiper('.reviews__slider', {
		loop: true,
		autoheight: true,
		speed: 800,
		spaceBetween: 24,
		slidesPerView: 3,
	
		pagination: {
			el: '.swiper-pagination-horizontal',
			clickable: true,
		 },

		breakpoints: {
			200: {
				slidesPerView: 1.5,
				spaceBetween: 18
			}, 

			650: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			991: {
				slidesPerView: 3,
				spaceBetween: 24
			}
		}
	});
}

// RATE COUNT

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.rate__input')) {
		const currentElement = targetElement.closest('.rate__input');
		const currentParrentElement = targetElement.closest('.rate');
		starRate(currentParrentElement, currentElement);
	}
}

function starRate(currentParrentElement, currentElement) {

	const rateItems = currentParrentElement.querySelectorAll('.rate__item');
	
	// для примера
	const resultRate = +currentElement.value;

	// для Бэк энда
	// const rateValue = +currentElement.value;
	// const resultRate = 3.7;

	const resultInt = parseInt(resultRate);
	const resultFloat = resultRate - resultInt;

	rateItems.forEach((rateItem, index) => {
		rateItem.classList.remove('active');
		rateItem.querySelector('span')?.remove();

		if (index <= (resultInt - 1)) {
			rateItem.classList.add('active'); 
		}
		if (index === resultInt && resultFloat) {
			rateItem.insertAdjacentHTML("beforeend", `<span style="width:${resultFloat * 100}%"></span>`);
		}
	});
}


// NOUISLIDER

const filterRange = document.querySelector('.price-filter__range');

if(filterRange) {
	const filterRangeFrom = document.querySelector('.price-filter__input--from');
	const filterRangeTo = document.querySelector('.price-filter__input--to');
	noUiSlider.create(filterRange, {
		start: [0, 1000],
		connect: true,
		range: {
			'min': 0,
			'max': 1000
		},
		// убираем десятичные у чисел и добавляем приставку валюты
		format: wNumb({
			prefix: '$',
			decimals: 0,
			thousand: ''
		})
	});

	filterRange.noUiSlider.on('update', function(values, handle) {
		filterRangeFrom.value = `${values[0]}`,
		filterRangeTo.value = `${values[1]}`
	});
	filterRangeFrom.addEventListener('change', function() {
		filterRange.noUiSlider.setHandle(0, filterRangeValue);
	});
	filterRangeTo.addEventListener('change', function() {
		filterRange.noUiSlider.setHandle(1, filterRangeValue);
	});
}

// THUMBS SLIDER

document.addEventListener("DOMContentLoaded", function () {

if(document.querySelector('.main-product__thumbs') && document.querySelector('.main-product__slider')) {
   // Миниатюры
   const thumbsSwiper = new Swiper(".main-product__thumbs", {
   	slidesPerView: 3,
   	freeMode: true,
   	watchSlidesProgress: true,
   	direction: "vertical",
		loop: true,
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	//   },
   });

   // Основной слайдер
   const mainSwiper = new Swiper(".main-product__slider", {
		 slidesPerView: 1,
		 loop: true,
		 navigation: {
			nextEl: ".swiper-button-prev",
			prevEl: ".swiper-button-next",
	  },
       
       thumbs: {
           swiper: thumbsSwiper, // Привязываем миниатюры
       },
   });
}

});


// TABS

// document.addEventListener("click", tabsClick);

// function tabsClick(e) {
// 	const targetElement = e.target;

// 	if (targetElement.closest('[data-tabs-button]')) {
// 		const currentElement = targetElement.closest('[data-tabs-button]');
// 		setTab(currentElement);
// 	}
// }

// function setTab(tabElement){
// 	const TabsParent = tabElement.closest('[data-tabs]');

// 	const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
// 	const tabsActiveButton = TabsParent.querySelector('[data-tabs-button].active');
// 	tabsActiveButton.classList.remove('active');
// 	tabElement.classList.add('active');

// 	const currentButtonIndex = tabsButtons.indexOf(tabElement);

// 	const tabsElements = TabsParent.querySelectorAll('[data-tabs-element]');

// 	tabsElements.forEach(tabElement => {
// 		tabElement.hidden = true
// 	});

// 	tabsElements[currentButtonIndex].hidden = false;
// }

document.addEventListener("click", tabsClick);

function tabsClick(e) {
    const targetElement = e.target;
    
    if (targetElement.closest('[data-tabs-button]')) {
        const currentElement = targetElement.closest('[data-tabs-button]');
        setTab(currentElement);
    }
}

function setTab(tabElement) {
    const TabsParent = tabElement.closest('[data-tabs]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsActiveButton = TabsParent.querySelector('[data-tabs-button].active');

    if (tabsActiveButton) {
        tabsActiveButton.classList.remove('active');
    }

    tabElement.classList.add('active');
    const currentButtonIndex = tabsButtons.indexOf(tabElement);

    const tabsElements = TabsParent.querySelectorAll('[data-tabs-element]');

    tabsElements.forEach(tabElement => {
        tabElement.hidden = true;
    });

    if (tabsElements[currentButtonIndex]) {
        tabsElements[currentButtonIndex].hidden = false;
    }
}

// ЭФФЕКТ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
document.addEventListener('DOMContentLoaded', isInViewport);

// Функция для проверки видимости элемента
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		 rect.top <= window.innerHeight &&
		 rect.bottom >= 0
	);
}

// Обработчик для скролла
function handleScroll() {
	const hiddenElements = document.querySelectorAll('.hidden');
	hiddenElements.forEach(element => {
		 if (isInViewport(element)) {
			  element.classList.add('visible'); // Добавляем класс для анимации
			  element.classList.remove('hidden'); // Убираем "скрытость"
		 }
	});
}

// Привязываем обработчик к событию scroll
window.addEventListener('scroll', handleScroll);

// Инициализация: вызываем handleScroll, чтобы проверить элементы, уже видимые на экране
handleScroll();