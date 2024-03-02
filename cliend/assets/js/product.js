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
