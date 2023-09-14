import './style.css';
import { createHome } from "./home";
import { createNavBar } from './navbar';
import { createMenu } from './menu';

const content = document.getElementById('content');

content.appendChild(createNavBar());

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.appendChild(container);

function createPage(tab) {
    container.innerText = '';

    switch (tab) {
        case 'home': {
            container.appendChild(createHome());
            break;
        }
        case 'menu': {
            container.appendChild(createMenu());
            break;
        }
        case 'contact': {
            container.appendChild(createContact());
            break;
        }
    }
};

const menuTab = document.getElementById('menu-tab');
menuTab.addEventListener('click', (e) => createPage('menu'));

const homeTab = document.getElementById('home-tab');
homeTab.addEventListener('click', (e) => createPage('home'));

const contactTab = document.getElementById('contact-tab');
contactTab.addEventListener('click', (e) => createPage('contact'));

createPage('home');