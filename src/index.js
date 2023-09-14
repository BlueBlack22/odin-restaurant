import './style.css';
import { createHome } from "./home";

const content = document.getElementById('content');

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.appendChild(container);

container.appendChild(createHome());