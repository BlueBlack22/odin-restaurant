function navBar() {    
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');
    
    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu';
    navBar.appendChild(menuTab);

    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.textContent = 'Home';
    navBar.appendChild(homeTab);

    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact';
    navBar.appendChild(contactTab);

    return navBar;
};