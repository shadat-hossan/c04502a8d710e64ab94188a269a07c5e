/* =====
    The Script is work cart Section.
    (twitter.com/Shahada37834874).
===== */


const cartIconSmall = document.querySelector(".cart_icon_small");
const cartListRowItem = document.querySelectorAll(".cart_list_area .cart_list_row");
const smallElement = document.createElement("small");

smallElement.innerHTML = cartListRowItem.length;

cartIconSmall.appendChild(smallElement)




document.querySelectorAll(".item .dickrement, .rightProductfullDetails .dickrement").forEach(element => {
  element.addEventListener("click", () => {
    const input = element.parentElement.querySelector("input");
    const hidenQuentityValue= document.querySelector("#hidenQuentityValue");
    if(hidenQuentityValue){
      hidenQuentityValue.value = input.value;
    }
    input.value = Math.max(parseInt(input.value) - 1, 1);
    input.dispatchEvent(new Event("change"));
    return false;
  });
});

document.querySelectorAll(".item .increment, .rightProductfullDetails .increment").forEach(element => {
  element.addEventListener("click", () => {
    const input = element.parentElement.querySelector("input");
    const productTotalPrice = element.parentElement.querySelector('[class*="productTotalPrice"]');
    const hidenQuentityValue= document.querySelector("#hidenQuentityValue");
    input.value = parseInt(input.value) + 1;
    if(hidenQuentityValue){
      hidenQuentityValue.value = input.value;
    }
    input.dispatchEvent(new Event("change"));
    if(productTotalPrice){
      productTotalPrice.innerText = "1000";
    }
    return false;
  });
});

document.querySelectorAll(".add_wishlist").forEach(element => {
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
});

// The Script is billing all Product price some return
const cartListwrap = document.querySelectorAll(".cart_list_item .cart_list_item_price");
var bTotalItem = document.querySelector(".total_item .total_item_value");
var cartListItemShipping = document.querySelector(".cart_list_item .cart_list_item_shipping")
var bTotalItemValueWidthShipping = document.querySelector(".total_item_value_width_shipping");

if(cartListwrap){
  var bTotalPrice = 0;
  cartListwrap.forEach(function(item) {
    var itemProductPrice = parseInt(item.textContent.substring(1));
    bTotalPrice += itemProductPrice;
  });
  bTotalItem.innerHTML = bTotalPrice;
  
  var cartListItemShippingInt = parseInt(cartListItemShipping.textContent.substring(1));
  bTotalPrice += cartListItemShippingInt
  
  bTotalItemValueWidthShipping.innerHTML= bTotalPrice
}

$(document).ready(function () {
  $(".single-product-view").click(function () {
    $(".product_popup_area").fadeToggle("slow");
  });

  $(".cart_icon_box").click(function () {
    $(".cart_pop_area").addClass("active");
    $(".cart_pop_area").removeClass("close");
  });

  $(".pop_close").click(function () {
    $(".cart_pop_area").removeClass("active");
    $(".cart_pop_area").addClass("close");
  });

  $(".filter_item").click(function () {
    $(".category_filter").fadeToggle("slow");
  });

  $(".category_filter .pop_close").click(function () {
    $(".category_filter").fadeOut("slow");
  });

  (function () {
    var parent = document.querySelector(".range-slider");
    if (!parent) return;

    var rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
      el.oninput = function () {
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
      };
    });

    numberS.forEach(function (el) {
      el.oninput = function () {
        var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);

        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }

        rangeS[0].value = number1;
        rangeS[1].value = number2;
      };
    });
  })();

  function closeForm() {
    $(".form-popup-bg").removeClass("is-visible");
  }



  $(document).ready(function ($) {

    $(".editaddress_pop").on("click", function (event) {
        event.preventDefault();

        $("#editmyaccount").addClass("is-visible");
        $("body").addClass("body-fixed");
      });

    $(".opennewaddress").on("click", function (event) {
        event.preventDefault();

        $("#newaddress").addClass("is-visible");
        $("body").addClass("body-fixed");
      });


    $(".btnOpenForm").on("click", function (event) {
      event.preventDefault();

      $(".form-popup-bg").addClass("is-visible");
      $("body").addClass("body-fixed");
    });

    //close popup when clicking x or off popup
    $(".form-popup-bg").on("click", function (event) {
      if (
        $(event.target).is(".form-popup-bg") ||
        $(event.target).is(".btnCloseForm")
      ) {
        event.preventDefault();
        $(this).removeClass("is-visible");
        $("body").removeClass("body-fixed");
      }
    });

    $(".toggle-password").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      input = $(this).parent().find("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });

    document
      .querySelectorAll(".productfiltaringBottom")
      .forEach(function (element) {
        element.addEventListener("click", function () {
          this.classList.add("active");
          this.closest(".item").classList.add("cart-active");
        });
      });


    document.querySelectorAll(".singalProduvtPriceValue").forEach(item =>{
      const priceTotal = item.closest(".cart_list_row").querySelector(".productToralPrice");
      priceTotal.innerHTML = item.textContent;
    })

      // The Script is work for dickrement value (twitter.com/Shahada37834874).

    document.querySelectorAll(".dickrement").forEach(button => {
      button.addEventListener("click", () => {
        const input = button.parentNode.querySelector("input");
        const inoutValueNumber = parseInt(input.value);

        if (inoutValueNumber > 1) {
          const singalProduvtPriceValue = button.closest(".cart_list_row").querySelector(".singalProduvtPriceValue").textContent;
          const productTotalPriceElemrnt = button.closest(".cart_list_row").querySelector(".productToralPrice");
          const newTotalPrice = Math.max(parseInt(productTotalPriceElemrnt.textContent) - parseInt(singalProduvtPriceValue), parseInt(singalProduvtPriceValue));

          const cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
          const cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
          const inputCheckbox = button.closest(".cart_list_row").querySelector(".checkbox_item input");
          const sidbarHidenCard = document.querySelector(".sidbarHidenCard");
          const singalProduct = button.closest(".cart_list_row");

          if (inputCheckbox.checked) {
            cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - parseInt(singalProduvtPriceValue);
          }

          productTotalPriceElemrnt.textContent = newTotalPrice;
          input.value = inoutValueNumber - 1;

          const productsInSidebar = sidbarHidenCard.querySelectorAll(".cart_list_row");
          productsInSidebar.forEach(product => {
            if (product.getAttribute("id") === singalProduct.getAttribute("id")) {
              const updatequentite = product.querySelector(".numberCount input");
              updatequentite.value = input.value;
            }
          });
        }

        input.dispatchEvent(new Event("change"));

       

        return false;
      });
    });

    // The Script is work for increment value (twitter.com/Shahada37834874).

    document.querySelectorAll(".increment").forEach(button => {
      button.addEventListener("click", () => {
        const input = button.parentNode.querySelector("input");
        const singalProduvtPriceValue = button.closest(".cart_list_row").querySelector(".singalProduvtPriceValue").textContent;
        const productTotalPriceElemrnt = button.closest(".cart_list_row").querySelector(".productToralPrice");
        const inoutValueNumber = parseInt(input.value);

        const cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
        const cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
        const productTotalPriceElemrntInt = parseInt(productTotalPriceElemrnt.textContent);
        const inputCheckbox = button.closest(".cart_list_row").querySelector(".checkbox_item input");
        const sidbarHidenCard = document.querySelector(".sidbarHidenCard");
        const singalProduct = button.closest(".cart_list_row");

        if (inputCheckbox.checked) {
          cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + parseInt(singalProduvtPriceValue);
        }

        productTotalPriceElemrnt.textContent = productTotalPriceElemrntInt + parseInt(singalProduvtPriceValue);

        input.value = inoutValueNumber + 1;
        input.dispatchEvent(new Event("change"));

        const productsInSidebar = sidbarHidenCard.querySelectorAll(".cart_list_row");
          productsInSidebar.forEach(product => {
            if (product.getAttribute("id") === singalProduct.getAttribute("id")) {
              const updatequentite = product.querySelector(".numberCount input");
              updatequentite.value = input.value;
            }
          });



        return false;
      });
    });

    // The Script is work for check out the product (twitter.com/Shahada37834874).

    document.querySelectorAll(".cart_list_row .checkmark").forEach(checkmark => {
      checkmark.addEventListener("click", () => {
        const inputCheckbox = checkmark.parentNode.querySelector("input");
        const cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
        const cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
        const productTotalPriceElemrntInt = parseInt(checkmark.parentNode.parentNode.querySelector(".productToralPrice").textContent);
        const sidbarHidenCard = document.querySelector(".sidbarHidenCard");
        const singalProduct = checkmark.closest(".cart_list_row");
        let clonedProduct = singalProduct.cloneNode(true);
    
        if (!inputCheckbox.checked) {
          cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt + productTotalPriceElemrntInt;
          sidbarHidenCard.appendChild(clonedProduct);
        } else {
          cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrntInt;
    

          const productsInSidebar = sidbarHidenCard.querySelectorAll(".cart_list_row");
          productsInSidebar.forEach(product => {
            if (product.getAttribute("id") === singalProduct.getAttribute("id")) {
              sidbarHidenCard.removeChild(product);
            }
          });
        }
      });
    });
    
    
  
    // The Script is work for cart remove Product (twitter.com/Shahada37834874).

    document.querySelectorAll(".cart_list_row .remove_cart").forEach(remove => {
      remove.addEventListener("click", () => {
        const cartListRow = remove.closest(".cart_list_row");
        const inputCheckbox = remove.closest(".cart_list_row").querySelector(".checkbox_item input");
        const productTotalPriceElemrntInt = parseInt(remove.parentNode.parentNode.querySelector(".productToralPrice").textContent);
        const cardAllProductTotalPrice = document.querySelector(".cardAllProductTotalPrice");
        const cardAllProductTotalPriceInt = parseInt(cardAllProductTotalPrice.textContent);
        const cartRemoveConfirmation = document.querySelector(".cartRemoveConfirmationPopupBox");
        const removeConfirm = document.querySelector(".cartRemoveConfirmationBtn .removeConfirm");
        const removeCancel = document.querySelector(".cartRemoveConfirmationBtn .removeCancel");
        const sidbarHidenCard = document.querySelector(".sidbarHidenCard");
        const singalProduct = remove.closest(".cart_list_row");
        
        removeConfirm.addEventListener("click", () => {
          cartRemoveConfirmation.classList.remove("sdowConPo");
          if (cartListRow) cartListRow.remove();
          if (inputCheckbox.checked) cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt - productTotalPriceElemrntInt;
          else cardAllProductTotalPrice.textContent = cardAllProductTotalPriceInt;
        });

        const productsInSidebar = sidbarHidenCard.querySelectorAll(".cart_list_row");
          productsInSidebar.forEach(product => {
            if (product.getAttribute("id") === singalProduct.getAttribute("id")) {
              sidbarHidenCard.removeChild(product);
            }
          });


        removeCancel.addEventListener("click", () => {
          cartRemoveConfirmation.classList.remove("sdowConPo");
        });

        cartRemoveConfirmation.classList.add("sdowConPo");
      });



    });

    // The Script is work for Close cart bar (twitter.com/Shahada37834874).

    const cartSidebar = document.querySelector(".cart_pop_area");
    window.addEventListener("click", e => {
      if (e.target == cartSidebar) {
        cartSidebar.classList.add("close");
        cartSidebar.classList.remove("active");
      }
    });
  });
});


// === exrta table desine (twitter.com/Shahada37834874)

const allTotalPriceInput = document.querySelector("#TotalValueSomeResult #allTotalPrice input");

function updateTotalPrice() {
  let totalPriceSome = 0;
  document.querySelectorAll("#priceCalco #productPrice input").forEach((item) => {
    const { value: productPrice } = item;
    const { value: productQuantiy } = item.closest("tr").querySelector("#productQuantiy input");
    const totalPriceInput = item.closest("tr").querySelector("#totalPrice input");

    const totalPriceMany = +productPrice * +productQuantiy;

    totalPriceInput.value = totalPriceMany;
    totalPriceSome += totalPriceMany;
  });

  if(allTotalPriceInput){
    allTotalPriceInput.value = totalPriceSome;
  }
}

updateTotalPrice();
document.querySelectorAll("#priceCalco #productPrice input").forEach((item) => {
  item.addEventListener('input', updateTotalPrice);
});


// This is input Chinge Event
document.querySelectorAll("#priceCalco #productQuantiy input").forEach((item) => {
  item.addEventListener('input', updateTotalPrice);
});








