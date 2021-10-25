// import quest data
import quests from '../data/quest-data.js';

const mapLinks = document.getElementById('map-links');

for (let quest of quests){

    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}
