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
