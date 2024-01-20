const sidebar = document.querySelector(".b-sidebar");
const iconNavbar = document.querySelector(".icon-navbar");
const iconNavbarSidebar = document.querySelector(".b-sidebar .icon-navbar");
const body = document.querySelector("body");

const myName = document.querySelector(".upper-header > h1");
const bigProfile = document.querySelector(".icon-bg-profile");
const hiThere = document.querySelector(".lower-header > div:nth-of-type(2)");

switch (true) {
    case window.innerWidth > "1132":
        iconNavbar.classList.add("not-visible");
        iconNavbarSidebar.classList.add("not-visible");
        sidebar.classList.remove("not-visible");
        sidebar.classList.add("navbar-visible");
        break;

    case window.innerWidth <= "1132":
        iconNavbar.classList.remove("not-visible");
        iconNavbarSidebar.classList.remove("not-visible");
        sidebar.classList.add("not-visible");
        sidebar.classList.remove("navbar-visible");

        if (window.innerWidth <= "537") {
            myName.classList.add("not-visible");
            bigProfile.classList.add("not-visible");
            hiThere.classList.add("not-visible");
        }
        break;
}

window.addEventListener("resize", () => {
    switch (true) {
        case window.innerWidth > "1132":
            iconNavbar.classList.add("not-visible");
            iconNavbarSidebar.classList.add("not-visible");
            sidebar.classList.remove("not-visible");
            sidebar.classList.add("navbar-visible");
            break;

        case window.innerWidth <= "1132":
            iconNavbar.classList.remove("not-visible");
            iconNavbarSidebar.classList.remove("not-visible");
            sidebar.classList.add("not-visible");
            sidebar.classList.remove("navbar-visible");

            if (window.innerWidth <= "537") {
                myName.classList.add("not-visible");
                bigProfile.classList.add("not-visible");
                hiThere.classList.add("not-visible");
            }
            break;
    }
});

iconNavbar.addEventListener("click", (e) => {
    switch (true) {
        case sidebar.classList.contains("navbar-visible"):
            sidebar.classList.add("not-visible");
            sidebar.classList.remove("navbar-visible");
            break;

        case sidebar.classList.contains("not-visible"):
            sidebar.classList.remove("not-visible");
            sidebar.classList.add("navbar-visible");
            break;
    }
});

iconNavbarSidebar.addEventListener("click", (e) => {
    sidebar.classList.add("not-visible");
    sidebar.classList.remove("navbar-visible");
});
