document.querySelectorAll('.item .dickrement,.rightProductfullDetails .dickrement').forEach(function(element) {
    element.addEventListener('click', function() {
        var input = this.parentElement.querySelector('input');
        var count = parseInt(input.value) - 1;
        count = count < 1 ? 1 : count;
        input.value = count;
        input.dispatchEvent(new Event('change'));
        return false;
    });
});
document.querySelectorAll('.item .increment,.rightProductfullDetails .increment').forEach(function(element) {
    element.addEventListener('click', function() {
        var input = this.parentElement.querySelector('input');
        var productTotalPrice = this.parentElement.querySelector('[class*="productTotalPrice"]');
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('change'));
        productTotalPrice.innerText = '1000';
        return false;
    });
});

document.querySelectorAll('.add_wishlist').forEach(function(element) {
    element.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });
});


$(document).ready(function() {
   $('.single-product-view').click(function () {
      $('.product_popup_area').fadeToggle('slow');
    });

    $('.remove_cart').click(function () {
      $(this).parents('.cart_list_row').hide();
    });

    $('.cart_icon_box').click(function () {
      $('.cart_pop_area').addClass('active');
      $('.cart_pop_area').removeClass('close');
    });

    $('.pop_close').click(function () {
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


  document.querySelectorAll(".productfiltaringBottom").forEach(function(element) {
    element.addEventListener("click", function() {
        this.classList.add("active");
        this.closest('.item').classList.add("cart-active");
      });
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
    var cartListWrap = document.querySelector(".cart_list_item").childNodes;
    var productName = this.parentNode.parentNode.parentNode.querySelector("h5").textContent;

  

    if (window.location.pathname == "/cart.html") {
      
      
    }
    

    if(inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + parseInt(singalProduvtPriceValue);
    }


    productTotalPriceElemrnt.innerHTML = productTotalPriceElemrntInt +  parseInt(singalProduvtPriceValue)

    input.value = inoutValueNumber + 1;
    input.dispatchEvent(new Event('change'));
    return false;
  });
});


document.querySelectorAll('.cart_list_row .checkmark').forEach(function(checkmark, i) {
  checkmark.addEventListener("click", function(){
    var inputCheckbox = this.parentNode.querySelector("input");
    var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var productTotalPriceElemrnt = this.parentNode.parentNode.querySelector(".productToralPrice").textContent;
    var productTotalPriceElemrntInt = parseInt(productTotalPriceElemrnt);
    var cartListWrap = document.querySelector(".cart_list_wrap");
    var productName = this.parentNode.parentNode.querySelector(".product_cart_info h5").textContent;

    if (window.location.pathname == "/cart.html") {
      if (!inputCheckbox.checked) {
          var cartListItem = document.createElement("div");
          cartListItem.classList.add("cart_list_item", "flex-nowrap", "space-between");
          var itemName = document.createElement("span");
          itemName.textContent = i + 1 + ". " + productName;
          var itemPrice = document.createElement("strong");
          itemPrice.textContent = `৳ ${productTotalPriceElemrntInt}`;
          cartListItem.appendChild(itemName);
          cartListItem.appendChild(itemPrice);
          cartListItem.setAttribute("data-cart-item-id", i);
  
          cartListWrap.appendChild(cartListItem);
      } else {
          var cartListItemToRemove = cartListWrap.querySelector(`[data-cart-item-id="${i}"]`);
          if (cartListItemToRemove) {
              cartListWrap.removeChild(cartListItemToRemove);
          }
      }
  }
  

    if(!inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + productTotalPriceElemrntInt;
    } else {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrnt
    }
  });
});


document.querySelectorAll('.cart_list_row .remove_cart').forEach(function(remove) {
  remove.addEventListener("click", function(){
    var inputCheckbox = this.parentNode.parentNode.parentNode.querySelector(".checkbox_item input")
    var cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
    var cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
    var productTotalPriceElemrnt = this.parentNode.parentNode.querySelector(".productToralPrice").textContent;
    var productTotalPriceElemrntInt = parseInt(productTotalPriceElemrnt);

    if(inputCheckbox.checked) {
      cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrntInt;
    } 
  });
});


const cartSidebar = document.querySelector(".cart_pop_area");

window.addEventListener("click", function(e){
  if(e.target == cartSidebar){
    cartSidebar.classList.add("close");
    cartSidebar.classList.remove("active");
  }
})



// The Script is billing all Product price some return
const cartListwrap = document.querySelectorAll(".cart_list_item .cart_list_item_price");
var totalItem = document.querySelector(".total_item .total_item_value");
var cartListItemShipping = document.querySelector(".cart_list_item .cart_list_item_shipping")
var totalItemValueWidthShipping = document.querySelector(".total_item_value_width_shipping");


if(window.location.pathname ==  "/billing.html"){

  var totalPrice = 0;
  cartListwrap.forEach(function(item) {
    var itemProductPrice = parseInt(item.textContent.substring(1));
    totalPrice += itemProductPrice;
  });
  totalItem.innerHTML = totalPrice;
  
  var cartListItemShippingInt = parseInt(cartListItemShipping.textContent.substring(1));
  totalPrice += cartListItemShippingInt
  
  totalItemValueWidthShipping.innerHTML= totalPrice
}


// The Script is Wishilist filter out.

var removeButtons = document.querySelectorAll(".userProfileAllProductListItemRemove");

        removeButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var row = this.closest("tr");
                row.parentNode.removeChild(row);
            });
        });
