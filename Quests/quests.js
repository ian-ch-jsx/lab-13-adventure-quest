import quests from '../data/quest-data.js';
// import { loadProfile } from '../render-utils.js';
import { findById, getUser } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'make your choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();

    const SelectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, SelectedRadio.value);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');

    const questResults = document.getElementById('quest-results');
    const resultsP = document.createElement('p');
    resultsP.textContent = choice.result;

    questResults.append(resultsP, returnMapContainer);
    returnMapContainer.append(returnMapBtn);
    questResults.classList.remove('hidden');
});

const returnMapContainer = document.createElement('div');
returnMapContainer.classList.add('return-container');

const returnMapBtn = document.createElement('button');
returnMapBtn.textContent = 'continue';
returnMapBtn.classList.add('return-button');

returnMapBtn.addEventListener('click', ()=>{
    window.location.replace('../map');
});



const userImage = document.getElementById('user-image');
userImage.src = `../assets/${getUser().class}.png`;

const userName = document.getElementById('user-name');
userName.textContent = 'Name: ' + getUser().name;

const userSanity = document.getElementById('user-sanity');
userSanity.textContent = 'Sanity: ' + getUser().sanity;

const userEvidence = document.getElementById('user-evidence');
userEvidence.textContent = 'Evidence: ' + getUser().evidence;
