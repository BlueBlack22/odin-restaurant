import './style.css';
import { createHome } from "./home";
import { createNavBar } from './navbar';

const content = document.getElementById('content');

content.appendChild(createNavBar());

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.appendChild(container);

container.appendChild(createHome());