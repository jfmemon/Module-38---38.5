const sendName = () => {
    const nameInputField = document.getElementById('name-input-field');
    const nameInputFieldText = nameInputField.value;
    localStorage.setItem('Name',nameInputFieldText);
    nameInputField.value = ``;
}
const deleteName = () => {
    localStorage.removeItem('Name');
}

const sendEmail = () => {
    const emailInputField = document.getElementById('email-input-field');
    const emailInputFieldText = emailInputField.value;
    localStorage.setItem('Email', emailInputFieldText);
    emailInputField.value =``;
}

const deleteEmail = () => {
    localStorage.removeItem('Email');
}

const sendMessage = () => {
    const messageInputField = document.getElementById('message-input-field');
    const messageInputFieldText = messageInputField.value;
    localStorage.setItem('Message', messageInputFieldText);
    messageInputField.value =``;
}

const deleteMessage = () => {
    localStorage.removeItem('Message');
}

const reset = () => {
    localStorage.clear();
}