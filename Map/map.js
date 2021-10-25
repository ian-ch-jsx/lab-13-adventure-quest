// import quest data
import { quests } from '../data/quest-data.js';
// get map-links element
const mapLinks = document.getElementById('map-links');
// loop through each quest
for (let quest of quests){
// generate an <a> for each quest with href="/quest?id=questId"
// append the link to the map-links element
    const a = document.createElement('a');
    a.href = `../quest?id=${quest.id}`;
    a.textContent = quest.title;
    // append the link to the map-links element
    mapLinks.appendChild(a);
}
