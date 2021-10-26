# Adventure Quest
## Plan
1. ~~Display proper quest information on quest pages~~
2. ~~Display quest choices~~
3. complete metadata
3. **submit first half**


## Front page
**HTML**
* ~~name input~~
* ~~character type radio buttons~~
* ~~submit button~~

**EVENTS**
* ~~formSubmit~~
    * ~~generate user object~~
    * ~~store user object in LS~~
    * ~~redirect to map~~

## Map
**HTML**
* ~~List of links~~
    * only clickable if user has not completed quest
    * ~~should contain a URL search parameter containing the quest ID~~

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
    * update the user data in localStorage
    * redirect

---
---
---

### Points Break Down
* ~~A user should be able to enter their name and pick a character~~
* A user's data should be stored in local storage and displayed on the page
* ~~A user should be presented with a list of quests and links to each unique quest page~~
* ~~A user should be able to visit a unique quest pages based on a URL query parameter~~
* ~~A user should be presented with a list of options to pick from on the quest detail page~~

## part one
* Hosted on GitHub with URL in About section
* ~~Meta Data: 3 or more quests plus user choices~~
* ~~Home Page: Collect User Information~~
* ~~Storage Functions: TDD Functions to create User and store User in Local Storage~~
* ~~Map Page / Quest List: List of Quests using URLSearchParam links~~
* ~~Quest Detail Page uses query id to load correct data~~
* ~~Quest Detail Page: Shows quest information (images, description)~~
* ~~Quest Detail Page: Presents Quest Choices~~

## part 2
* Handle form submit on quest page and update user object	
* List Page handles completed tasks	
* List Page detects end conditions and navigates to end page	
* Evaluation of result	
* End Page design and information display	
