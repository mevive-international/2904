function myBlogScrollFunction() {
    let divElement = document.querySelector("article.blog-article");
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    let height = divElement
        ? divElement.offsetHeight
        : document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    if (document.getElementById("myBar")) {
        myBlogScrollFunction();
    }
};
