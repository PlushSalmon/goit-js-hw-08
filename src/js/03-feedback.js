import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input')
const messageTextarea = document.querySelector('textarea')
const LOCALSTORAGE_KEY = 'feedback-form-state'

form.addEventListener("input", addToStorage)
    function addToStorage() {
        const objectJs = { email: emailInput.value, message: messageTextarea.value };
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectJs));
}

// form.addEventListener('submit', callback)

// function callback(event) {
//     event.preventDefault()
//     if (event.target.emailInput.value === "" || event.target.messageTextarea.value === "") {
//         return alert("Увага! Всі поля повинні бути заповнені!")
//     }
//     console.log({ email: emailInput.value, message: messageTextarea.value });
//     form.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// form.addEventListener(
//     'input',
//     throttle(e => {
//         const objectToSave = { email: email.value, message: message.value };
//         localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
//     }, 500)
// );

form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.email.value === "" || e.target.message.value === "") {
        return alert("Увага! Всі поля повинні бути заповнені!");
    };
    console.log({ email: emailInput.value, message: messageTextarea.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
    emailInput.value = storageData.email;
    messageTextarea.value = storageData.message;
}

// -----------------------------------------------------------------------------------------------------------------------------------------

// const storageNow = localStorage.getItem('feedback-form-state');
// console.log(storageNow);

// const storageReturn = JSON.parse(storageNow)
// console.log(storageReturn);
// if (storageNow !== "") { 
    
// }
// // ----
// form.addEventListener('submit', event)
//     function event() {
//         event.preventDefault();
//         if (event.target.email.value === "" || event.target.message.value === "") {
//             return alert("Увага! Всі поля повинні бути заповнені!");
//         };
//         console.log({ email: email.value, message: message.value });
//         form.reset();
//         localStorage.removeItem(LOCALSTORAGE_KEY);
// } 


//     JSON.parse(storageNow) 
// 


// // // ------------------
// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//     evt.preventDefault();
//     localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//     updateOutput();
//     form.reset();
// }

// function updateOutput() {
//     output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }



// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// form.addEventListener(
//     'input',
//     throttle(e => {
//         const objectToSave = { email: email.value, message: message.value };
//         localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
//     }, 500)
// );

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     if (e.target.email.value === "" || e.target.message.value === "") {
//         return alert("Увага! Всі поля повинні бути заповнені!");
//     };
//     console.log({ email: email.value, message: message.value });
//     form.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// const load = key => {
//     try {
//         const serializedState = localStorage.getItem(key);
//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//         console.error('Get state error: ', error.message);
//     }
// };

// const storageData = load(LOCALSTORAGE_KEY);
// if (storageData) {
//     email.value = storageData.email;
//     message.value = storageData.message;
// }


// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form')
// const emailInput = document.querySelector('input')
// const messageInput = document.querySelectorl

