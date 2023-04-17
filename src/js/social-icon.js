const refs = {
    socialMoreBtn: document.querySelector('.social-icon-more'),
    socialConteiner: document.querySelector('.social-icon'),
}

refs.socialMoreBtn.addEventListener('click', addClassToConteiner)

function addClassToConteiner () {
    refs.socialConteiner.classList.toggle('is-hiden');
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event