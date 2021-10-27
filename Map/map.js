// import quest data
import quests from '../data/quest-data.js';
import { getUser } from '../utils.js';

const mapLinks = document.getElementById('map-links');

for (let quest of quests){

    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}

const userImage = document.getElementById('user-image');
userImage.src = `../assets/${getUser().class}.png`;
