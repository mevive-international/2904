$(document).ready(function () {
    setTimeout(() => {
        $(".hot-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                320: {
                    items: 2,
                },
                480: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                767: {
                    items: 3,
                },
                991: {
                    items: 5,
                },
                1200: {
                    items: 5,
                },
            },
        });
        $(".owl-prev").html('<i class="fa fa-angle-left"></i>');
        $(".owl-next").html('<i class="fa fa-angle-right"></i>');
    }, 1000);
});
