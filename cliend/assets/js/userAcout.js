const userProfileBar = document.querySelector(".userProfileBar");
const resDeCrochBtn = document.querySelector(".resDeCrochBtn");
const userAcountSidebar = document.querySelector(".userAcountSidebar")


userProfileBar.addEventListener('click', function(){
    userAcountSidebar.style.display = "block";
})

resDeCrochBtn.addEventListener('click', function(){
    userAcountSidebar.style.display = "none";
})

window.addEventListener("click", function(event){
  if(event.target == userAcountSidebar){
    userAcountSidebar.style.display = "none";
  }
})


$('#userImage').change(function(){
  var curElement = $('.ProfileImage img');
  console.log(curElement);
  var reader = new FileReader();

  reader.onload = function (e) {
      curElement.attr('src', e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});


// Review Star Rating Script

let star = document.querySelectorAll(".starRatingInput");
let showValue = document.querySelector("#rating-value-pient");
const reviewMessage = document.querySelector(".userReciewProductRatingStarMesage");

let showValueTextContant =  showValue.textContent

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;
    showValue.innerHTML = i;
    if(i <= 1){
      reviewMessage.style.padding = "8px 10px"
      reviewMessage.style.background = "#fd9e9e"
      reviewMessage.style.borderColor = "#a10000"
      reviewMessage.innerHTML = "Terrible 😔"
    }
    else if( i <= 2){
    reviewMessage.style.padding = "8px 10px"
    reviewMessage.style.background = "#a96b6b"
    reviewMessage.style.borderColor = "#965353"
    reviewMessage.innerHTML = "Poor 😔"
    }
    else if(i <= 3){
      reviewMessage.style.padding = "8px 10px"
      reviewMessage.style.background = "#d1bd8d"
    reviewMessage.style.borderColor = "#beb192"
    reviewMessage.innerHTML = "Fair 🙁"
    }
    else if(i <= 4){
      reviewMessage.style.padding = "8px 10px"
      reviewMessage.style.background = "#10751a"
      reviewMessage.style.borderColor = "#07570f"
    reviewMessage.innerHTML = "Good 😲"
    }
    else if(i <= 5){
      reviewMessage.style.padding = "8px 10px"
    reviewMessage.style.background = "#008000"
    reviewMessage.style.borderColor = "#005a00"
    reviewMessage.innerHTML = "Excellent 🫡"
    }
  });
}



