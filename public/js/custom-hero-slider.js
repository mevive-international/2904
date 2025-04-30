$(function () {
    var scene = document.getElementById("scene");
    var scene2 = document.getElementById("scene2");
    var scene3 = document.getElementById("scene3");
    var scene4 = document.getElementById("scene4");
    // var scene5 = document.getElementById('scene5');

    var parallax = new Parallax(scene);
    var parallax = new Parallax(scene2);
    var parallax = new Parallax(scene3);
    var parallax = new Parallax(scene4);
    // var parallax = new Parallax(scene5);
});

$(document).ready(function () {
    setInterval(() => {
        $("ul.cd-slider-navigation a.next-slide").click();
    }, 6000);
});2
