import { data } from "./data.js";
const wrapper = document.getElementById("wrapper");
const input = document.getElementById("input");

input.addEventListener("input", (ev) => {
  wrapper.innerHTML = "";

  const filteredData = data.filter((obj) => {
    const inputValue = ev.target.value.trim().toLowerCase();
    const objTitle = obj.title.trim().toLowerCase();
    const objKeywords = obj.keywords.trim().toLowerCase();

    return objTitle.includes(inputValue) || objKeywords.includes(inputValue);
  });
  renderObj(filteredData);
});

renderObj(data);

function renderObj(arr) {
  arr.forEach((obj) => {
    createCard(obj);
  });
}

// удаление повторных значений keywords
function deleteDublicates(str) {
  const arr = str.split(" ");
  const unicValues = [...new Set(arr)];
  const result = unicValues.join(" ");

  return result;
}

// отрисовка карточек на странице
function createCard(obj) {
  const card = document.createElement("div");
  const unicKeywords = [];
  console.log(unicKeywords);
  card.className = "main__card";

  card.innerHTML = `
    <span class="main__emoji">${obj.symbol}</span>
    <h2 class="main__title">${obj.title}</h2>
    <p class="main__keywords">${deleteDublicates(obj.keywords)}</p>`;

  wrapper.append(card);

  return card;
}

