import { getUser } from './utils.js';

export function loadProfile() {
    const user = getUser();

    const img = document.getElementById('user-image');
    img.src = `../assets/${user.class}.png`;

    const name = document.getElementById('name');
    name.textContent = 'Name: ' + user.name;

    const sanity = document.getElementById('user-sanity');
    sanity.textContent = 'Sanity: ' + user.sanity;

    const evidence = document.getElementById('user-evidence');
    evidence.textContent = 'Evidence: ' + user.evidence;
}