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

function createHome() {
    const home = document.createElement('div');

    const paraMain = createParagraph('Grey Kitten Sushi');
    paraMain.classList.add('para-main');
    home.appendChild(paraMain);

    const paraSecondary = createParagraph('Best sushi restaurant in your city since 1998!');
    paraSecondary.classList.add('para-secondary');
    home.appendChild(paraSecondary);

    const paraDesc = createParagraph('Proudly making the best sushi in your city using only the freshest, locally caught fish and locally grown ingredients.');
    paraDesc.classList.add('para-desc');
    home.appendChild(paraDesc);

    return home;
};

function createParagraph(text) {
    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent = text;

    return para;
};

export { createHome };