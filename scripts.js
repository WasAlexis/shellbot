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

function getRandomPhrase() {
    counter++;
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function playPhrase() {
    const phrase = getRandomPhrase();
    msg.textContent = counter + '. ' + phrase.phrase;
    const audio = new Audio(phrase.voice);
    audio.play();
}