const refs = {
    socialMoreBtn: document.querySelector('.social-icon-more'),
    socialConteiner: document.querySelector('.social-icon-list'),
}

refs.socialMoreBtn.addEventListener('click', addClassToConteiner)
// refs.socialConteiner.addEventListener('blur', addClassToConteiner)

function addClassToConteiner () {
    refs.socialConteiner.classList.toggle('is-hiden');
}