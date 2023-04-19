import throttle from "lodash.throttle";

const form = document.querySelector('#form-one');
const fromName = form.querySelector('[name="name"]');
const formEmail = form.querySelector('[name="email"]');
const formComent = form.querySelector('[name="coment"]');

const STOREG_KEY = "dontSubmitFeedback";
const formInput = {};

saveDataIfDontSubmit();

form.addEventListener('input', throttle(valueData, 1000));
form.addEventListener('submit', removeFeedbackLS)

function valueData (event) {
    formInput.name = fromName.value;
    formInput.email = formEmail.value;
    formInput.coment = formComent.value;

    console.log(formInput);

    localStorage.setItem(STOREG_KEY, JSON.stringify(formInput));

}

function removeFeedbackLS () {
    localStorage.removeItem(STOREG_KEY);
}

function saveDataIfDontSubmit() {
    const SaveArry = JSON.parse(localStorage.getItem(STOREG_KEY));

    if(localStorage.getItem(STOREG_KEY)) {
        console.log(SaveArry);

        fromName.value = SaveArry.name;
        formEmail.value = SaveArry.email;
        formComent.value = SaveArry.coment;
    }
}