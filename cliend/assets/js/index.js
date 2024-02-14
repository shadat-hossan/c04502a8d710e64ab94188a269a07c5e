
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

if (matchMedia('only screen and (max-width: 768px)').matches) {
  $(".categorie_dropdown ul > li.drop_child > a").click(function() {
    $(this).toggleClass('active');
    $(this).next('ul').slideToggle('slow');
  });
}