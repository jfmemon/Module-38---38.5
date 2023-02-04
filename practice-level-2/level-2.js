const setValue = () => {
    const paragraph = document.getElementById('paragraph');
    const paragraphValueString = paragraph.innerText;
    let paragraphValueInt = parseInt(paragraphValueString);
    paragraphValueInt = paragraphValueInt + 1;
    // console.log(paragraphValueInt);
    paragraph.innerText = paragraphValueInt;
    localStorage.setItem('Count', paragraphValueInt);
}

const getValueFromLocalStorage = () => {
    const paragraph = document.getElementById('paragraph')
    const getSavedValue = localStorage.getItem('Count');
    paragraph.innerText = getSavedValue;
}

getValueFromLocalStorage();