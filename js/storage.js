// for add name
document.getElementById('name-add').addEventListener('click', function() {
    const userInput = document.getElementById('name-field');
    const userInputValue = userInput.value;
    localStorage.setItem('Name', userInputValue);
})

// for remove name
document.getElementById('remove-name').addEventListener('click', function(){
    localStorage.removeItem('Name');      
})

// for age
document.getElementById('age-add').addEventListener('click', function() {
    const userInput = document.getElementById('age-field');
    const userInputValue = userInput.value;
    localStorage.setItem('Age', userInputValue);
})

// for remove age
document.getElementById('remove-age').addEventListener('click', function(){
    localStorage.removeItem('Age');      
})

// for clear Local Storage
document.getElementById('clear-ls').addEventListener('click', function(){
    localStorage.clear();      
})