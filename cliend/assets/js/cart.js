// let Increment = document.querySelectorAll(".increment");
// let Dickrement = document.querySelectorAll(".dickrement");
// let numberCount = document.querySelectorAll(".numberCount");

// let count = 1;

// Increment.addEventListener("click", function () {
//   count += 1;
//   numberCount.innerHTML = count;
// });

// Dickrement.addEventListener("click", function () {
//   if (count > 1) {
//     count -= 1;
//     numberCount.innerHTML = count;
//   }
// });


$(document).ready(function() {
    $('.dickrement').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.increment').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    $('.remove_cart').click(function () {
      $(this).parents('.cart_list_row').hide();
    });
    $('.cart_icon_box').click(function () {
      // $('.cart_pop_area').fadeIn('slow');
      $('.cart_pop_area').addClass('active');
      $('.cart_pop_area').removeClass('close');
    });

    $('.pop_close').click(function () {
      // $('.cart_pop_area').fadeOut('slow');
      $('.cart_pop_area').removeClass('active');
      $('.cart_pop_area').addClass('close');
    });

    $('.filter_item').click(function () {
      $('.category_filter').fadeToggle('slow');
    });
    $('.category_filter .pop_close').click(function () {
      $('.category_filter').fadeOut('slow');
    });

    (function() {

      var parent = document.querySelector(".range-slider");
      if(!parent) return;

      var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);

          if (slide1 > slide2) {
            [slide1, slide2] = [slide2, slide1];
            // var tmp = slide2;
            // slide2 = slide1;
            // slide1 = tmp;
          }

          numberS[0].value = slide1;
          numberS[1].value = slide2;
        }
      });

      numberS.forEach(function(el) {
        el.oninput = function() {
          var number1 = parseFloat(numberS[0].value),
              number2 = parseFloat(numberS[1].value);
          
          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }

          rangeS[0].value = number1;
          rangeS[1].value = number2;

        }
      });

    })();

  });