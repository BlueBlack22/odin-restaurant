function createNavBar() {    
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');

    navBar.appendChild(createTab('Menu', 'menu-tab'));
    navBar.appendChild(createTab('Home', 'home-tab'))
    navBar.appendChild(createTab('Contact', 'contact-tab'))

    return navBar;
};

function createTab(text, id) {
    const tab = document.createElement('div');
    tab.classList.add('nav-tab')
    tab.setAttribute('id', id);
    tab.textContent = text;

    return tab;
};

export { createNavBar }