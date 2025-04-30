$(document).ready(function () {
    let id = window.location.pathname.split("/").join("_");
    setTimeout(() => {
        $(".exzoom_product_slider_" + id + "").exzoom({
            navWidth: 92,
            navHeight: 92,
            navItemNum: 6,
            navItemMargin: 5,
            navBorder: 1,
            autoPlay: true,
            autoPlayTimeout: 5000,
        });
    }, 100);
});
