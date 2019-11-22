// меню бургер
(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);


// maskinput

$(function () {
  $(".phone_mask").mask("8(999) 999-9999");
});

// плавный якорь

$(document).ready(function () {
  $("main").on("click", ".arr-down", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

// slick

$(document).ready(function () {
  $('.first-block__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
  autoplaySpeed: 2000
  });
});

// loadMore
$(document).ready(function () {
  $('.gallery-first__items').loadMoreResults({
    displayedItems: 8,
    showItems: 4,
    button: {
      'class': 'gallery-first__button',
      'text': 'Показать еще'
    }
  });
})


// popups

var callbackOpen = document.querySelector('#callback__btn')
var callbackOpen2 = document.querySelector('#callback__btn2')
var callbackOpen3 = document.querySelector('#callback__btn3')
var callbackOpen4 = document.querySelector('#callback__btn4')
var callbackOpen5 = document.querySelector('#callback__btn5')
var popupCallback = document.querySelector('.popup-callback')

var confidentialityOpen = document.querySelector('.confidentiality__btn')
var confidentialityOpen2 = document.querySelector('.confidentiality__btn2')
var popupConfidentiality = document.querySelector('.popup-confidentiality')

var popupClose = document.querySelector('.popap__close')
var popupClose2 = document.querySelector('.popap__close2')


callbackOpen.addEventListener('click', function(e) {
  popupCallback.classList.remove('hidden')
  e.preventDefault();
})
callbackOpen2.addEventListener('click', function(e) {
  popupCallback.classList.remove('hidden')
  e.preventDefault();
})
callbackOpen3.addEventListener('click', function(e) {
  popupCallback.classList.remove('hidden')
  e.preventDefault();
})
callbackOpen4.addEventListener('click', function(e) {
  popupCallback.classList.remove('hidden')
  e.preventDefault();
})
callbackOpen5.addEventListener('click', function(e) {
  popupCallback.classList.remove('hidden')
  e.preventDefault();
})


confidentialityOpen.addEventListener('click', function(e) {
  popupConfidentiality.classList.remove('hidden')
  e.preventDefault();
})
confidentialityOpen2.addEventListener('click', function(e) {
  popupConfidentiality.classList.remove('hidden')
  popupCallback.classList.add('hidden')
  e.preventDefault();
})

popupClose.addEventListener('click', function(e) {
  popupCallback.classList.add('hidden')
  e.preventDefault();
})
popupClose2.addEventListener('click', function(e) {
  popupConfidentiality.classList.add('hidden')
  e.preventDefault();
})

var popupTnx = document.querySelector('.popup-tnx')
var tnxOpen = document.querySelector('.popup-tnx')
var popupClose3 = document.querySelector('.popup__close3')

popupClose3.addEventListener('click', function() {
  tnxOpen.classList.toggle('hidden')
})

var popupClose2 = document.querySelector('.popap__close2')
popupClose2.addEventListener('click', function() {
  popupConfidentiality.classList.add('hidden')
})

// uniMail

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      popupTnx.classList.remove('hidden')
      popupCallback.classList.add('hidden')
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(".popup-callback").on('click', function (e) {
  if (e.target == this) $(".popup-callback").addClass('hidden');
})

$(".popup-tnx").on('click', function (e) {
  if (e.target == this) $(".popup-tnx").addClass('hidden');
})

$(".popup-confidentiality").on('click', function (e) {
  if (e.target == this) $(".popup-confidentiality").addClass('hidden');
})


var checkValid = document.querySelector('.check__valid')

var ch = document.getElementById("check");
function myFunc() {
  checkValid.classList.remove('hidden')
}
