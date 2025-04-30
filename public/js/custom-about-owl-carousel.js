$(document).ready(function () {
    setTimeout(() => {
        $(".timeline-carousel").owlCarousel({
            loop: false,
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
                    items: 1,
                },
                480: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
            },
        });
        $(".testi-carousel").owlCarousel({
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
                    items: 1,
                },
                480: {
                    items: 2,
                },
                600: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
        $(".owl-prev").html('<i class="fa fa-angle-left"></i>');
        $(".owl-next").html('<i class="fa fa-angle-right"></i>');
    }, 1000);
});
