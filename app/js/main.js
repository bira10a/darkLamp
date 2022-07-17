$(function () {
  var mixer = mixitup('.bestseller__content');


  $('.bestseller__content-images').slick({
    prevArrow: false,
    nextArrow: false,
    fade: true,
    // autoplay: true,
    // autoplaySpead: 2000,
    dots: true,
  });
});


// HEADER - BTN SEARCH
document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.menu__icons-btn--search');
  const menuForm = document.querySelector('.menu__form');
  const menuFormBtn = document.querySelector('.menu__form-btn');

  search.addEventListener('click', () => {
    menuForm.classList.toggle('menu__form--active'); 
  });

  menuFormBtn.addEventListener('click', () => {
    menuForm.classList.toggle('menu__form--active');
  });
});


// HEADER - BTN BASkET
document.addEventListener('DOMContentLoaded', () => {
  const basket = document.querySelector('.menu__icons-btn--cart');
  const menuBasket = document.querySelector('.menu__basket');
  const basketExit = document.querySelector('.basket__exit');

  basket.addEventListener('click', () => {
    menuBasket.classList.toggle('menu__basket--active');
  });

  basketExit.addEventListener('click', () => {
    menuBasket.classList.toggle('menu__basket--active');
  });
});

//======================================================================================================================================================== БУРГЕР
// BURGER

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu__body'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__body--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu__body--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
  //Клик вне таргета
  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu__body--active');
      bodyLock.classList.remove('lock');
    }
  });
});

//======================================================================================================================================================== 
$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $(".header__menu").addClass("header__menu--sticky ");
  } else {
    $(".header__menu").removeClass("header__menu--sticky ");
  }
});