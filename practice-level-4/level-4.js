// for name
const sendName = () => {
    const nameInputField = document.getElementById('name-input-field');
    const nameInputFieldText = nameInputField.value;
    localStorage.setItem('Name',nameInputFieldText);
    nameInputField.value = ``;
}
const deleteName = () => {
    localStorage.removeItem('Name');
}

// for email
const sendEmail = () => {
    const emailInputField = document.getElementById('email-input-field');
    const emailInputFieldText = emailInputField.value;
    localStorage.setItem('Email', emailInputFieldText);
    emailInputField.value =``;
}

const deleteEmail = () => {
    localStorage.removeItem('Email');
}

// for message
const sendMessage = () => {
    const messageInputField = document.getElementById('message-input-field');
    const messageInputFieldText = messageInputField.value;
    localStorage.setItem('Message', messageInputFieldText);
    messageInputField.value =``;
}

const deleteMessage = () => {
    localStorage.removeItem('Message');
}

// for reset
const reset = () => {
    localStorage.clear();
}

const getItemFromLocalStorage = () => {
    const savedValue = localStorage.getItem('Object');
    let object = {};
    if(savedValue) {
        object = JSON.parse(savedValue);
    }
    return object;
}

const setItemIntoLocalStorage = (name, email, message) => {
    const createdObject = getItemFromLocalStorage();
    const savedName = localStorage.getItem(name);
    if(savedName === null) {
        localStorage.removeItem(savedName);
    }else{
        createdObject[name] = savedName;
    }

    const savedEmail = localStorage.getItem(email);
    if(savedEmail === null) {
        localStorage.removeItem(savedEmail);
    }else{
        createdObject[email] = savedEmail;
    }

    const savedMessage = localStorage.getItem(message);
    if(savedMessage === null) {
        localStorage.removeItem(savedMessage);
    }else{
        createdObject[message] = savedMessage;
    }

    const stringifiedObject = JSON.stringify(createdObject);
    localStorage.setItem('Object', stringifiedObject);
}

const save = () => {
    setItemIntoLocalStorage('Name', 'Email', 'Message');
}