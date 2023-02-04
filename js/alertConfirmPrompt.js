const showAlert = () => {
    const randomNumber = Math.random()*10;
    console.log(randomNumber);
    if(randomNumber < 5) {
        alert('This number is less than 5');
    }else{
        alert('This number is greater than 5')
    }
}


const showAlertWithDecision = () => {
    const decision = confirm('Are you coming picnic?');
    if(decision === true) {
        alert('Then, You have to pay 500 tk.');
    }else{
        alert("Then, I don't want to see in the picnic spot.");
    }
}


const takeUserInputByPrompt = () => {
    const getUserInput = prompt('Tell me your name now -_-');
    if(!!getUserInput) {            // (!!variable_name) diye true kina check kore
        alert('Welcome to our party.');
    }else{
        alert('Get out from here.');
    }
}