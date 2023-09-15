function createContact() {
    const contact = createDiv(contact);

    contact.appendChild(createParagraph('Opening hours', 'contact-header'));
    

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