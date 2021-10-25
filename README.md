# Adventure Quest
## Plan
* ! ! Test ALL the things ! !
* Create HTML/CSS shell


## Front page
**HTML**
* name input
* character type radio buttons
* submit button

**EVENTS**
* formSubmit
    * generate user object
    * store user object in LS
    * redirect to map

## Map
**HTM**
* List of links
    * only clickable if user has not completed quest

**GAME LOGIC**
* TBD

## Quest details
**HTML**
* Quest title
* Image
* Storyline paragraph
* Radio button choices
* Submit button

**EVENTS**
* Page load
    * dynamically generate quest content
* formSubmit
    * update the user object
    * redirect



## Events


## CSS

## HTML

---
---
---

## Notes
URL SEARCH PARAMETERS
* displays new content without creating a new page.


### Points Break Down
* A user should be able to enter their name and pick a character
* A user's data should be stored in local storage and displayed on the page
* A user should be presented with a list of quests and links to each unique quest page
* A user should be able to visit a unique quest pages based on a URL query parameter
* A user should be presented with a list of options to pick from on the quest detail page

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section | 1
Meta Data: 3 or more quests plus user choices | 1
Home Page: Collect User Information | 1
Storage Functions: TDD Functions to create User and store User in Local Storage | 2
Map Page / Quest List: List of Quests using URLSearchParam links | 2
Quest Detail Page uses query id to load correct data | 1
Quest Detail Page: Shows quest information (images, description) | 1
Quest Detail Page: Presents Quest Choices | 1
