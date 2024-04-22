// Navbar Function
window.onscroll = function() {
    fixedNavbar(),
    fixedAside();
}

function fixedNavbar() {
    const navbar = document.getElementById("navbar");
    const navTop = navbar.offsetTop;
    const verticalScrollNav = window.scrollY;

    if (verticalScrollNav > navTop) {
        navbar.style = "position: fixed; top: 0; width: 100%;";
    } else {
        navbar.style = "position: static; top: 0; width: 100%;";
    }
}

// Show & Hide Sidebar
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "none";
}

// Aside Function
function fixedAside() {
    const aside = document.getElementById("aside");
    const verticalScroll = window.scrollY;

    if (verticalScroll > 800) {
        aside.style = "position: sticky; top: 150px; right: 10px; width: 25%;";
    } else {
        aside.style = "position: static; top: 0;";
    }
}
