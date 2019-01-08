$(function() {
  const d = new Date();
  const hours = d.getHours();

  const night = (hours >= 19) || (hours <= 7); // between 7pm and 7am
  const morning = (hours >= 0 && hours < 12);
  const afternoon = (hours >= 12 && hours < 17);
  const evening = (hours >= 17 && hours < 19 );
  const heading = document.getElementById('hello');
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > introHeight) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  }, false);

  topButton.addEventListener('click', function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() { waveOnLoad(); }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', {viewFactor: 0.2});
  sr.reveal('.featured-projects', {viewFactor: 0.1});
  sr.reveal('.other-projects', {viewFactor: 0.05});

/*
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day =  today.getDate();
  var mo = today.getMonth();
  


  if (h > 12) {  
    console.log("LOL");
     document.getElementById('txt').innerHTML = (mo +  1) + "." + day + ".18" + "  " + (h-12) + ":" + m + " PM";

    }
    else if (h == 0) {
        document.getElementById('txt').innerHTML = (mo +  1) + "." + day + ".18" + "  " + (h+12) + ":" + m + " AM";
    
    }
    else 
    {
      document.getElementById('txt').innerHTML = (mo +  1) + "." + day + ".18" + "  " + (h) + ":" + m + " PM";
    }*/
/*
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d =  today.getDate();
    var mo = today.getMonth();

    m = checkTime(m);
    s = checkTime(s);

    if (h > 12) {  
     document.getElementById('txt').innerHTML = (mo +  1) + "." + d + ".18" + "  " + (h-12) + ":" + m + " PM";

    }
    else if (h == 0) {
        document.getElementById('txt').innerHTML = (mo +  1) + "." + d + ".18" + "  " + (h+12) + ":" + m + " AM";
    
    }
    else 
    {

    document.getElementById('txt').innerHTML = (mo +  1) + "." + d + ".18" + "  " + (h) + ":" + m + " AM";
    
  }

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}﻿ */
 $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });
});
