import throttle from 'lodash.throttle';


const formRef = document.querySelector(`.feedback-form`);
const inputRef = document.querySelector(`.js-input`);
const messageRef = document.querySelector(`.js-message`);

let saveObject = JSON.parse(localStorage.getItem("feedback-form-state"));

if(saveObject) {
    const {email = "", message = ""} = saveObject;
    inputRef.value = email;
    messageRef.value = message;
} else (saveObject = {})

formRef.addEventListener(`input`, throttle((event) => {
    saveObject[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(saveObject));
}, 500))

formRef.addEventListener(`submit`, e => {
    e.preventDefault();
    console.log({email: inputRef.value, message: messageRef.value});
    inputRef.value = "";
    messageRef.value = "";
    localStorage.clear();
})