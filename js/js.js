/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('#cc_strinfo_summary_zayoosuf a').removeAttr('href');
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Stops default link travel on now playing links of radio
$(document).ready(function(){
    $('#cc_strinfo_summary_zayoosuf a').removeAttr('href');
});

function aud_play_pause() {
  var radioAudio = document.getElementById("radioAudio");
  if (radioAudio.paused) {
    radioAudio.play();
    $('#play-stop-button').removeClass('fa-play').addClass('fa-stop');
  } else {
    radioAudio.pause();
    $('#play-stop-button').removeClass('fa-stop').addClass('fa-play');
  }
}