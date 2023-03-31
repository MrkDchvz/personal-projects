
const names = document.querySelector(".intro__header--name");
const verb = document.querySelector(".intro__header--verb");

// Create a span for each character on a text 
function createSpan(element) {
  const textArr = element.textContent.split("");
  element.textContent = "";
  textArr.forEach(e => {
    const newSpan = document.createElement('span');
    newSpan.textContent = e;
    if (e === " ") {
      newSpan.classList.add('fancy-margin');
    } else {
      newSpan.classList.add(`fancy-text`);
    }
    element.appendChild(newSpan);
  })
}

createSpan(names);
createSpan(verb);

