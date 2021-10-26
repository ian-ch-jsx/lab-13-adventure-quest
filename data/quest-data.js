const waterHorse = {
    id: 'waterHorse',
    title: 'Each-uisge',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        On a brisk autumn evening, you decide to take a short hike along the creek. You lose
        yourself observing the birds in the red-orange leaves, and before you know it, the
        evening is fading to night. Luckily, the route home is familiar, but along the way,
        you hear something wading through the water beside you. When you turn your eyes to 
        look, you see a large black horse. His coat, dripping wet, glistens like silver
        through the trees and brush.
    `,
    choices: [{
        id: 'approach',
        description: 'Approach the horse',
        result: `
            haha ur gonna get rekt.
        `,
        sanity: 0,
        evidence: 35
    }, {
        id: 'leave',
        description: 'Keep walking',
        result: `
            better idea.
        `,
        sanity: -30,
        evidence: 50
    }, {
        id: 'photo',
        description: 'Take a photo',
        result: `
            idk hes like a vampire its not gonna show up and its gonna make u a lil
            crazy lol.
        `,
        sanity: -50,
        evidence: 0
    }]
};

const blackDog = {
    id: 'blackDog',
    title: 'A HAIRY!!! Dragon',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 evidence.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 sanity damage. 
        `,
        sanity: -35,
        evidence: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 sanity damage.
        `,
        sanity: -45,
        evidence: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 evidence.
        `,
        sanity: 0,
        evidence: 90
    }]
};

const doppelganger = {
    id: 'treasure',
    title: 'A evidenceen Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 evidence pieces!',
        sanity: 0,
        evidence: 40
    }, {
        id: 'evidenceen',
        description: 'A evidenceen Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 sanity damage',
        sanity: -50,
        evidence: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 sanity',
        sanity: 35,
        evidence: 0
    }]
};

const quests = [
    waterHorse, 
    blackDog,
    doppelganger,
];

export default quests; 