import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
//use search params to determine which quest to display
const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));

//update all our html elements with the quest data
const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../asssets/assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;
