const sendName = () => {
    const nameInputField = document.getElementById('name-input-field');
    const nameInputFieldText = nameInputField.value;
    const savedValue = localStorage.setItem('Name',nameInputFieldText);
    nameInputField.value = ``;
    return savedValue;
}
const deleteName = () => {
    localStorage.removeItem('Name');
}

const sendEmail = () => {
    const emailInputField = document.getElementById('email-input-field');
    const emailInputFieldText = emailInputField.value;
    const savedValue = localStorage.setItem('Email', emailInputFieldText);
    emailInputField.value =``;
    return savedValue;
}

const deleteEmail = () => {
    localStorage.removeItem('Email');
}

const sendMessage = () => {
    const messageInputField = document.getElementById('message-input-field');
    const messageInputFieldText = messageInputField.value;
    const savedValue = localStorage.setItem('Message', messageInputFieldText);
    messageInputField.value =``;
    return savedValue;
}

const deleteMessage = () => {
    localStorage.removeItem('Message');
}

const reset = () => {
    localStorage.clear();
}

// const getItemFromLocalStorage = () => {
//     const savedValue = localStorage.getItem('Object');
//     let object = {};
//     if(savedValue) {
//         object = JSON.parse(savedValue);
//     }
//     return object;
// }

// const setItemIntoLocalStorage = (key, value) => {
//     const object = getItemFromLocalStorage();
//     object[key] = value;
//     const stringifyData = JSON.stringify('object')
//     localStorage.setItem(object, stringifyData);
// }

const save = () => {
    const nameData = sendName();
    const emailData = sendEmail();
    const messageData = sendMessage();
}

