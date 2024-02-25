$(document).ready(function() {
    // $('.dickrement').click(function () {
    //   var $input = $(this).parent().find('input');
    //   var count = parseInt($input.val()) - 1;
    //   count = count < 1 ? 1 : count;
    //   $input.val(count);
    //   $input.change();
    //   return false;
    // });
    // $('.increment').click(function () {
    //   var $input = $(this).parent().find('input');
    //   var $productToralPrice = $(this).parent().find('[class*="productToralPrice"]');
    //   console.log($productToralPrice)
    //   $input.val(parseInt($input.val()) + 1);
    //   $input.change();
    //   $productToralPrice.text(1000);
    //   return false;
    // });

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



function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}
$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('.btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
    $('body').addClass('body-fixed');
  });
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('.btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      $('body').removeClass('body-fixed');
    }
  });
  
  
  $(".toggle-password").click(function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      input = $(this).parent().find("input");
      if (input.attr("type") == "password") {
          input.attr("type", "text");
      } else {
          input.attr("type", "password");
      }
  });


  });


  // For decrement button

  document.querySelectorAll('.dickrement').forEach(function(button) {
    button.addEventListener('click', function() {
      var input = this.parentNode.querySelector('input');
      var inoutValueNumber = parseInt(input.value);
      if (inoutValueNumber > 1) {
        var singalProduvtPriceValue = this.parentNode.parentNode.parentNode.querySelector(".singalProduvtPriceValue").textContent;
        var productTotalPriceElemrnt = this.parentNode.parentNode.parentNode.querySelector(".productToralPrice");
        var newTotalPrice = parseInt(productTotalPriceElemrnt.textContent) - parseInt(singalProduvtPriceValue);
        newTotalPrice = Math.max(newTotalPrice, parseInt(singalProduvtPriceValue));
        
        var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var inputCheckbox = this.parentNode.parentNode.parentNode.parentNode.querySelector(".checkbox_item input");
    if(inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - parseInt(singalProduvtPriceValue);
    }
        
        productTotalPriceElemrnt.innerHTML = newTotalPrice;
        input.value = inoutValueNumber - 1;
      }
      
      input.dispatchEvent(new Event('change'));
      return false;
  });
});

// For increment button
document.querySelectorAll('.increment').forEach(function(button) {
  button.addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    var singalProduvtPriceValue = this.parentNode.parentNode.parentNode.querySelector(".singalProduvtPriceValue").textContent;
    var productTotalPriceElemrnt = this.parentNode.parentNode.parentNode.querySelector(".productToralPrice");
    var productTotalPriceString = productTotalPriceElemrnt.textContent.toString();
    var inoutValueNumber = parseInt(input.value);

    var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var productTotalPriceElemrntInt = parseInt(productTotalPriceString);
    var inputCheckbox = this.parentNode.parentNode.parentNode.parentNode.querySelector(".checkbox_item input");

    if(inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + parseInt(singalProduvtPriceValue);
    }


    productTotalPriceElemrnt.innerHTML = productTotalPriceElemrntInt +  parseInt(singalProduvtPriceValue)

    input.value = inoutValueNumber + 1;
    input.dispatchEvent(new Event('change'));
    return false;
  });
});


document.querySelectorAll('.cart_list_row .checkmark').forEach(function(checkmark) {
  checkmark.addEventListener("click", function(){
    var inputCheckbox = this.parentNode.querySelector("input");
    var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var productTotalPriceElemrnt = this.parentNode.parentNode.querySelector(".productToralPrice").textContent;
    var productTotalPriceElemrntInt = parseInt(productTotalPriceElemrnt);

    if(!inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + productTotalPriceElemrntInt;
    } else {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrnt
    }
  });
});


document.querySelectorAll('.cart_list_row .remove_cart').forEach(function(remove) {
  remove.addEventListener("click", function(){
    var inputCheckbox = this.parentNode.querySelector("input");
    var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var productTotalPriceElemrnt = this.parentNode.parentNode.querySelector(".productToralPrice").textContent;
    var productTotalPriceElemrntInt = parseInt(productTotalPriceElemrnt);


      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrnt;
  });
});


const cartSidebar = document.querySelector(".cart_pop_area");

window.addEventListener("click", function(e){
  if(e.target == cartSidebar){
    cartSidebar.classList.add("close");
    cartSidebar.classList.remove("active");
  }
})
