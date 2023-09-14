function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const menuHeader = document.createElement('p');
    menuHeader.classList.add('menu-header');
    menu.appendChild(menuHeader);

    menu.appendChild(createCard('', 'Nigiri', '$3'));
    menu.appendChild(createCard('', 'Maki', '$2'));
    menu.appendChild(createCard('', 'Uramaki', '$4'));
    menu.appendChild(createCard('', 'Gunkan Maki', '$5'));
    menu.appendChild(createCard('', 'Inari', '$3'));
    menu.appendChild(createCard('', 'Temari', '$4'));

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
    title.classList.add(card-title);
    title.innerText = name;
    card.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('card-price');
    price.innerText = priceValue;
    card.appendChild(price);

    return card;
};

export { createMenu };