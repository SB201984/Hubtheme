jQuery(document).ready(function($){
    $(".navbar-toggler").click(function(){
        if ( $('.sidenav, #main').hasClass('show') ) {
            $('.sidenav, #main').removeClass('show');
        } else {
            $('.sidenav, #main').removeClass('show');
            $('.sidenav, #main').addClass('show'); 
        }
    });

    //counter slider
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: function() {
              $this.text(this.countNum + "+");
            }
        });
    });

    //slick slider
    $('.counter-slick').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});