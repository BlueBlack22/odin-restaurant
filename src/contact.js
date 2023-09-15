function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    
};

function createParagraph(text, className) {
    const para = document.createElement('p');
    para.classList.add(className);
    para.innerText = text;

    return para;
};