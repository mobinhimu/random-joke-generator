
const btn = document.querySelector("button");
const heading = document.querySelector("h4");

const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");



btn.addEventListener("click", getRandomJoke);
function getRandomJoke() {
  const xml = new XMLHttpRequest();
  xml.open("GET", "https://icanhazdadjoke.com/slack");
  xml.onload = function () {
    let data = JSON.parse(xml.responseText).attachments[0].text;
    heading.innerHTML = data;
  };
  xml.send();
}

// SpeechSysthesisUtternce is a speech API that requests a speech request 
soundBtn.addEventListener('click', () => {
    let utternce = new SpeechSynthesisUtterance(`${heading.innerText}`)
    speechSynthesis.speak(utternce);
    //speak method of spechsynthesis speaks the text string
});


copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(heading.innerText);
    //writeText function allows to copy text to your system clipboard
})