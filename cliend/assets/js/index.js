jQuery(".menu_bar").click(function () {
  jQuery(".categorie_dropdown").slideToggle(400);
});

jQuery(document).ready(function () {
  jQuery(document).on("click", function (e) {
    if (!$(e.target).closest(".menu_box").length) {
      $(".categorie_dropdown").slideUp();
    }
  });
  jQuery(".menu_bar").on("click", function () {
    jQuery(this).siblings(".categorie_dropdown").slideToggle();
  });
});

$(document).ready(function () {
  $(".user_login").click(function () {
    var docClick = function (ev) {
      if (!$(ev.target).hasClass("user_login")) {
        closeDropdown();
      }
    };
    var closeDropdown = function () {
      $(".user_dropdown").removeClass("show-menu");
      $(document).unbind("click", docClick);
    };

    if ($(".user_dropdown").hasClass("show-menu")) {
      closeDropdown();
    } else {
      $(document).bind("click", docClick);
      $(".user_dropdown").addClass("show-menu");
    }

    $(".user_dropdown > li").click(function () {
      closeDropdown();
    });
    $(".user_dropdown > li").click(function () {
      $(".user_login").html($(this).html());
    });
  });
});

if (matchMedia("only screen and (max-width: 768px)").matches) {
  $(".categorie_dropdown ul > li.drop_child > a").click(function () {
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle("slow");
  });
}

// Flash Sales Time functionality

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ("0" + t.days).split(-2);
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000); // Day : hours : minutes : secounds
initializeClock("clockdiv", deadline);

var deadline2 = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000); // Day : hours : minutes : secounds
initializeClock("clockdiv2", deadline2);

