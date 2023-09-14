function createHome() {
    const home = document.createElement('div');
    home.classList.add('home')

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