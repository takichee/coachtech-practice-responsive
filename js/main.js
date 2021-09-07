/* Full-width SideNavigation & CrossButton */
function openNav() {
    this.classList.toggle('nav-button--cross');
    document.getElementById('nav-menu').classList.toggle('in');
}

document.getElementById('nav-btn').addEventListener('click', openNav);