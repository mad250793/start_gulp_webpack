//=========  1 варик =======
function hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

if (hasClass(lazyImage, "active")) {


} else {

    lazyImage.classList.add("active")


}
///=======  2 варик ========
if (el.classList.contains("active") != true) {}

