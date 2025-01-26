"use strict"


// BURGER

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.header__burger')) {
		document.body.classList.toggle('burger-open');
	}
}


// SPOLLER

document.addEventListener("DOMContentLoaded", () => {
	const spoller = document.querySelector(".popular-categories");
	const spollerButton = document.querySelector(".popular-categories__button");
	const spollerBody = document.querySelector(".popular-categories__body");
 
	spollerButton.addEventListener("click", () => {
	  spoller.classList.toggle("active");
	  spollerButton.classList.toggle("active");
	  spollerBody.classList.toggle("active")
	  
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


// SLIDER HERO

const heroSlider = document.querySelector('.hero');

if(heroSlider) {

	const swiper = new Swiper('.hero', {
		loop: true,
		autoheight: true,
		speed: 800,
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

			550: {
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