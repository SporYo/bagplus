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
    displayedItems: 4,
    showItems: 4,
    button: {
      'class': 'gallery-first__button',
      'text': 'Показать еще'
    }
  });
})


// popup

$(document).ready(function () {
  PopUpHide();
});

function PopUpShow() {
  $(".popup-callback").show();
}

function PopUpHide() {
  $(".popup-callback").hide();
  // $(".popup-tnx").hide();
}

$(document).mouseup(function (e) {
  var container = $(".popup-callback");
  if (container.has(e.target).length === 0){
      container.hide();
  }
});