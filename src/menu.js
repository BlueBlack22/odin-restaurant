import nigiriImg from './images/nigiri.png';
import makiImg from './images/maki.png';
import uramakiImg from './images/uramaki.png';
import gunkanMakiImg from './images/gunkan-maki.png';
import inariIng from './images/inari.png';
import temariImg from './images/temari.png';

function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const menuHeader = document.createElement('p');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Menu';
    menu.appendChild(menuHeader);

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    menuContent.appendChild(createCard(nigiriImg, 'Nigiri', '$3'));
    menuContent.appendChild(createCard(makiImg, 'Maki', '$2'));
    menuContent.appendChild(createCard(uramakiImg, 'Uramaki', '$4'));
    menuContent.appendChild(createCard(gunkanMakiImg, 'Gunkan Maki', '$5'));
    menuContent.appendChild(createCard(inariIng, 'Inari', '$3'));
    menuContent.appendChild(createCard(temariImg, 'Temari', '$4'));

    menu.appendChild(menuContent);

    return menu;
};

function createCard(img, name, priceValue) {
    const card = document.createElement('div');
    card.classList.add('menu-card');
    
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src = img;
    cardImg.alt = 'sushi picture';
    card.appendChild(cardImg);

    const title = document.createElement('p');
    title.classList.add('card-title');
    title.innerText = name;
    card.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('card-price');
    price.innerText = priceValue;
    card.appendChild(price);

    return card;
};

export { createMenu };