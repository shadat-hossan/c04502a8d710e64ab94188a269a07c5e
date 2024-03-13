// singal Product Togal Image

const allGogalImage = document.querySelectorAll(".filtaringImageItem");
let productFinalImageShow = document.querySelector(
  ".productFinalImageShow img"
);
let singalProductPrice = document.querySelector(".singalProductPrice input");
let productContite = document.querySelector(".productContite");
const increment = document.querySelector(".increment");
const dickrement = document.querySelector(".dickrement");
let productContiteCount =  1;

const singalProductPriceInVa = document.querySelector(".singalProductPrice input")


increment.addEventListener("click", function(){
  productContiteCount += 1;
  productContite.value = productContiteCount
}) 


dickrement.addEventListener("click", function(){
  if(productContiteCount > 1){
    productContiteCount -= 1;
    productContite.value = productContiteCount
  }
})



let myimage = document.querySelector("#myimage");
let myresult = document.querySelector("myresult");

// console.log(productFinalImageShow.src);

allGogalImage.forEach(function (i) {
  i.addEventListener("click", function () {
    productFinalImageShow.src = i.childNodes[1].src;
    console.log(i.childNodes[1].src);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Handling changes for radio buttons with name="sizeHidden"
  var sizeHiddenRadios = document.querySelectorAll('input[type=radio][name="sizeHidden"]');
  sizeHiddenRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var value = this.value;
      var sizeRadios = document.querySelectorAll('input[type=radio][name="size"]');
      sizeRadios.forEach(function(sizeRadio) {
        if (sizeRadio.value === value) {
          sizeRadio.checked = true;
        }
      });
    });
  });

  // Handling changes for radio buttons with name="size"
  var sizeRadios = document.querySelectorAll('input[type=radio][name="size"]');
  sizeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var value = this.value;
      var sizeHiddenRadios = document.querySelectorAll('input[type=radio][name="sizeHidden"]');
      sizeHiddenRadios.forEach(function(sizeHiddenRadio) {
        if (sizeHiddenRadio.value === value) {
          sizeHiddenRadio.checked = true;
        }
      });
    });
  });

  // Handling changes for radio buttons with name="colorHide"
  var colorHideRadios = document.querySelectorAll('input[type=radio][name="colorHide"]');
  colorHideRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var value = this.value;
      var colorRadios = document.querySelectorAll('input[type=radio][name="color"]');
      colorRadios.forEach(function(colorRadio) {
        if (colorRadio.value === value) {
          colorRadio.checked = true;
        }
      });
    });
  });

  // Handling changes for radio buttons with name="color"
  var colorRadios = document.querySelectorAll('input[type=radio][name="color"]');
  colorRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var value = this.value;
      var colorHideRadios = document.querySelectorAll('input[type=radio][name="colorHide"]');
      colorHideRadios.forEach(function(colorHideRadio) {
        if (colorHideRadio.value === value) {
          colorHideRadio.checked = true;
        }
      });
    });
  });
});


