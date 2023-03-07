const btn = document.querySelector("button");
const heading = document.querySelector("h4");
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
