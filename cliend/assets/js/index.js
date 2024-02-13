//menu responsive click
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// menu scroll effect
document.addEventListener("scroll", function () {
  var navbarContainer = document.querySelector(".navbar-container");
  var logo = document.querySelector(".slogo");
  var menuItems = document.querySelectorAll(
    ".navbar-container .navbar-menu ul li a"
  );
  if (document.documentElement.scrollTop > 80) {
    navbarContainer.classList.add("shrink");
    logo.classList.add("logoShirnk");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.add("menuItemsAllA");
    });
  } else {
    navbarContainer.classList.remove("shrink");
    logo.classList.remove("logoShirnk");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("menuItemsAllA");
    });
  }
});


jQuery(".menu_bar").click(function() {  
    jQuery ('.categorie_dropdown') .slideToggle(400);
});

 jQuery(document).ready(function(){
  jQuery(document).on('click', function(e) {
    if (!$(e.target).closest('.menu_box').length) {
      $('.categorie_dropdown').slideUp();
    }
  });
  jQuery('.menu_bar').on('click', function(){
    jQuery(this).siblings('.categorie_dropdown').slideToggle();
  });
});


$(document).ready(function(){
  $(".user_login").click(function() {
    
    var docClick = function(ev){
        if(!$(ev.target).hasClass('user_login')) {
          closeDropdown();
        }
     }
    var closeDropdown = function() {
      $(".user_dropdown").removeClass("show-menu");
      $(document).unbind('click', docClick);
    }
    
    if($(".user_dropdown").hasClass("show-menu")) {
       closeDropdown();
    }else{
      $(document).bind('click', docClick )
      $(".user_dropdown").addClass("show-menu");
    }
    
    $(".user_dropdown > li").click(function(){
      closeDropdown();
    });
    $(".user_dropdown > li").click(function() {
      $(".user_login").html($(this).html());
    });
  });
});
