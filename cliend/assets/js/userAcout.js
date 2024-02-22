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