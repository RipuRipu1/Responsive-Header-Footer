const sideNavbar = document.querySelector('.navbar-anchors');

document.querySelector('#hamburger-menu').onclick = () => {
    sideNavbar.classList.toggle('active');
}