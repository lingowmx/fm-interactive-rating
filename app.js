const numberContainer = document.querySelector('.main-section_number-container');
const rateNumber = document.querySelector('.thankyou-state_result--number');
const submitButton = document.querySelector('.main-section_button')
let mainSection = document.querySelector('.main-section');
let thankyouState = document.querySelector('.thankyou-state')

numberContainer.addEventListener('click', event => {
    let selectedNumber = event.target.innerText;
    rateNumber.innerText = selectedNumber
    if (selectedNumber > 0 || selectedNumber <= 5) {
        submitButton.addEventListener('click', () => {
            mainSection.style.display = 'none';
            thankyouState.style.display = 'flex'
        })
    }
})

