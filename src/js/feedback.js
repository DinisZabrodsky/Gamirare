
const formEl = document.querySelector('#form-one');

formEl.addEventListener('submit', submitForm)

const inputValue = []

function submitForm (event) {
    event.preventDefault();
    const valueData = {};


    const formData = new FormData(formEl);
    formData.forEach((value, name) => {
        valueData[name] = value;
    });
    
    inputValue.push(valueData)
    event.currentTarget.reset();
    console.log(inputValue);
}
