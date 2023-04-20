import { dataForWhatsNew } from "../data/whats-new-data";

const whatsNewSection = document.querySelector('#whats-new-list');

addCardOnPage(dataForWhatsNew);

function addCardOnPage(data) {
    const htmlCode = createCard(data);
    whatsNewSection.innerHTML = htmlCode;
    console.log(htmlCode);
}


function createCard (elements) {
    return elements.map(({img, alt, date, titel, text, id}) => {
        return `
        <li class="whats-new-list-element">
        <div class="whats-new-list-element-img">
            <img src=${img} alt="${alt}" loading="lazy">
        </div>
        <div class="whats-new-list-element-content">
            <p class="wn-date">${date}</p>
            <h3 class="wn-titel">${titel}</h3>
            <p class="wn-text">${text}</p>
            <button class="wn-button" type="button"  data-id="${id}">Читати далі</button>
        </div>
        </li>`}).join('');
}
