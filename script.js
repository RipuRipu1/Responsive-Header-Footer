const sideNavbar = document.querySelector('.navbar-anchors');

document.querySelector('#hamburger-menu').onclick = () => {
    sideNavbar.classList.toggle('active');
}

const menu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(cursor){
    if (!menu.contains(cursor.target) && !menu.contains(cursor.target)) {
        sideNavbar.classList.remove('active');
    }
})