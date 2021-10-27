// import quest data
import quests from '../data/quest-data.js';
import { getUser } from '../utils.js';

const userImage = document.getElementById('user-image');
userImage.src = `../assets/${getUser().class}.png`;

const userName = document.getElementById('user-name');
userName.textContent = 'Name: ' + getUser().name;

const userSanity = document.getElementById('user-sanity');
userSanity.textContent = 'Sanity: ' + getUser().sanity;

const userEvidence = document.getElementById('user-evidence');
userEvidence.textContent = 'Evidence: ' + getUser().evidence;

const mapLinks = document.getElementById('map-links');

const user = getUser();

for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    mapLinks.appendChild(a);
}


function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title + ': completed';
    mapLinks.appendChild(span);
}