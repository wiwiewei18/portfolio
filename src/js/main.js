import $ from "jquery"
// common
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// common end

// navbar
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("nav-scrolled")
  } else {
    $("nav").removeClass("nav-scrolled")
  }
})
// navbar end
