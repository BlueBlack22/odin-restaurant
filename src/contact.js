function createContact() {
    const contact = createDiv('contact');

    contact.appendChild(createParagraph('Contact', 'contact-header'));
    
    const hours = createDiv(undefined, 'contact-hours');
    hours.appendChild(createParagraph('Opening hours', 'contact-section-header'));
    
    const hoursList = document.createElement('ul');
    hoursList.appendChild(createLi('Monday: closed'));
    hoursList.appendChild(createLi('Monday - Friday: 1pm - 9pm'));
    hoursList.appendChild(createLi('Saturday - Sunday: 2pm - 10pm'));
    hours.appendChild(hoursList);
    contact.appendChild(hours);

    const location = createDiv(undefined, 'contact-location');
    location.appendChild(createParagraph('Location', 'contact-section-header'));
    
    const map = document.createElement('img');
    map.src = '';
    map.alt = 'map picture';
    location.appendChild(map);
    contact.appendChild(location);

    return contact;
};

function createParagraph(text, className) {
    const para = document.createElement('p');
    para.classList.add('para');

    if (className !== undefined) {
        para.classList.add(className);
    }
    
    para.innerText = text;

    return para;
};

function createLi(text) {
    const li = document.createElement('li');
    li.textContent = text;

    return li;
}

function createDiv(id, className) {
    const div = document.createElement('div');
    
    if (id !== undefined) {
        div.setAttribute('id', id);
    }
    if (className !== undefined) {
        div.classList.add(className);
    }

    return div;
};

export { createContact }