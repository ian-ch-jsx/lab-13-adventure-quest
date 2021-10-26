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
    title: 'The Black Dog',
    map: {
        top: '17%',
        left: '37%'
    },
    image: '../assets/blackdog.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        After a late night at the bar, you've found yourself with a dead phone battery,
        stuck wobbling home on foot. You turn down the alley you <i>think</i> is the shortcut
        home. Seconds later, a garbage can topples -- a large raccoon is sprinting frantically down the alley
        with a large, lanky black dog hot on his heels.
    `,
    choices: [{
        id: 'scold',
        description: 'Scold the dog',
        result: `
            You take pity on the raccoon, and loudly exclaim "No! Knock it off!" The dog stops dead in
            his tracks before slowly and silently turning to face you head on. In the blink of an eye,
            the dog is lunging straight towards you. His glowing white eyes and yellowed fangs, dripping with 
            frothy saliva, are the last things you see before it all goes dark.
        `,
        sanity: -35,
        evidence: 15
    }, {
        id: 'fight',
        description: 'Enjoy the spectacle',
        result: `
            The sudden crashing startles you, causing you to stumble backwards a few steps before you process the 
            situation. Good riddance. You doubt the dog will catch up to the raccoon, but hope he'll scare them out
            of showing up again and making a mess of the trash - an all-too-common occurrence. The animals disappear 
            around a corner, and your body relaxes, no longer prepared to flee.
        `,
        sanity: -45,
        evidence: 0
    }, {
        id: 'archer',
        description: 'Call the dog over',
        result: `
            "Hey!" you exclaim, stepping forward and clapping your hands together in an attempt to break the 
            dog's focus. The dog stops, turning his gaze to you. "It's okay, buddy," you say, softly, holding 
            your hand out slightly. You notice the greasy, tangled appearance of his coat and his emaciated,
            skeletal frame. The dog looks ready to flee, so you reach to your pocket for your phone, hoping
            to snap a quick photo before he runs off. As you snap the photo, the dog's lips curl into a toothy
            grin, revealing a line of teeth stretching all the way to the base of his neck. You gasp in shock,
            and before you can run, the dog has disappeared. The image is blurred, but the photo is enough for
            you to believe what you saw.
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