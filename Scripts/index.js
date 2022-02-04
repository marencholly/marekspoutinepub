const toggle = document.querySelector(".toggle-button");
const nav = document.querySelector("nav");
nav.classList.remove("nav-visible");

function toggleMenu() {
    if (nav.classList.contains("nav-visible")) {
        // this means that the nav-visible class IS applied
        // therefore our menu IS open
        // we need to close it
        nav.classList.remove("nav-visible");
    } else {
        // this means that the nav-visible class ISN'T applied
        // therefore our menu ISN'T open
        // we need to open it
        nav.classList.add("nav-visible");
    }
}

// now we want to add the function to the click of our button
toggle.addEventListener("click", toggleMenu);
