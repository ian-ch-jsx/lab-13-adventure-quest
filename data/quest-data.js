const waterHorse = {
    id: 'waterHorse',
    title: 'Each-uisge',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/waterhorse.jpg',
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
            You lock eyes with the horse, feeling strangely drawn to it. You slowly move forward,
            stepping carefully across the rocky creek-side. As you raise your hand, the horse stretches
            his neck forward, touching his nose to the back of your hand. When you brush your fingers 
            through his long mane, the hair starts to slither forward like a snake, coiling up your arms
            and wrapping around your body faster than you can think to scream. By the time you do, the 
            sound is replaced with a choking gasp as you're dragged underwater with the beast, never to be
            seen again.
        `,
        sanity: 0,
        evidence: 35
    }, {
        id: 'leave',
        description: 'Keep walking',
        result: `
            Something feels... wrong. The hair on the back of your neck rises, and your stomach jitters
            as though it was filled with moths. You start to walk away slowly, fighting the urge to sprint
            as long as you possibly can (it isn't long). You bolt down the trail and never look back.
        `,
        sanity: -30,
        evidence: 50
    }, {
        id: 'photo',
        description: 'Take a photo',
        result: `
            This presence is concerning. You can't imagine where this horse has come from, but assume someone
            must be looking for it. You pull your phone from your pocket and attempt to take a decent photo,
            but when you check the screen, nothing but the creek and brush appears. You take another. Nothing.
            Again. When you look up from the screen, your stomach knots; there's nothing there.
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
    image: '../assets/blackdog.jpg',
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
    image: '../assets/doppelganger.jpg',
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