/* scripts to speak with the magic shell */

const msg = document.getElementById("msg");
let counter = 0;

const phrases = [
    { phrase: "Si", voice: "audios/Si.m4a" },
    { phrase: "No", voice: "audios/No.m4a" },
    { phrase: "Probablemente", voice: "audios/Probablemente.m4a" },
    { phrase: "Un poco", voice: "audios/Un_poco.m4a" },
    { phrase: "Nada", voice: "audios/Nada.m4a" }
];

/* Increment probability for yes or no */

const weidgetPhrase = [
    phrases[0],
    phrases[0],
    phrases[0],
    phrases[1],
    phrases[1],
    phrases[1],
    phrases[2],
    phrases[3],
    phrases[4]
];

function getRandomPhrase() {
    counter++;
    const randomIndex = Math.floor(Math.random() * weidgetPhrase.length);
    return weidgetPhrase[randomIndex];
}

function playPhrase() {
    const phrase = getRandomPhrase();
    msg.textContent = counter + '. ' + phrase.phrase;
    const audio = new Audio(phrase.voice);
    audio.play();
}