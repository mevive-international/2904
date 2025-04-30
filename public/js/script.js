jQuery(document).ready(function ($) {

    $('.category-inner').not('.slick-initialized').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
        }
      }
    ]
    });
    
    });


function openNav() {
  document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


   
    $(document).ready(function(){
$('.hot-carousel').owlCarousel({
loop:true,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
nav:true,
dots:false,
responsive:{
    0:{
        items:1
    },
    320:{
        items:2
    },
    480:{
        items:2
    },
    600:{
        items:3
    },
    767:{
        items:3
    },
    991:{
        items:5
    },
    1200:{
        items:5
    }
}
})
$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa fa-angle-right"></i>');

});	

$(document).ready(function(){
    $('.timeline-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:2
        },
        767:{
            items:3
        },
        991:{
            items:3
        },
        1200:{
            items:3
        }
    }
    })
    $( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa fa-angle-right"></i>');
    
    });	



      $(document).ready(function(){
$('.hot-carousell').owlCarousel({
loop:true,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
nav:true,
dots:false,
responsive:{
    0:{
        items:1
    },
    320:{
        items:1
    },
    480:{
        items:2
    },
    600:{
        items:2
    },
    767:{
        items:2
    },
    991:{
        items:3
    },
    1200:{
        items:3
    }
}
})
$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa fa-angle-right"></i>');

}); 


   $(document).ready(function(){
$('.hot-carouseel').owlCarousel({
loop:true,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
nav:true,
dots:false,
responsive:{
    0:{
        items:1
    },
    320:{
        items:2
    },
    480:{
        items:2
    },
    600:{
        items:3
    },
    767:{
        items:3
    },
    991:{
        items:3
    },
    1200:{
        items:3
    }
}
})
$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa fa-angle-right"></i>');

}); 


$(document).ready(function(){
  $('.application-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      320:{
          items:1
      },
      480:{
          items:2
      },
      600:{
          items:2
      },
      767:{
          items:4
      },
      991:{
          items:5
      },
      1200:{
          items:5
      }
  }
  })
  $( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
  $( ".owl-next").html('<i class="fa fa-angle-right"></i>');
  
  });	

  $(document).ready(function(){
    $('.testi-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:2
        },
        1200:{
            items:3
        }
    }
    })
    $( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa fa-angle-right"></i>');
    
    });	
    

//scroll-back-top//
  
        var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

