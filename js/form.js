// Required DOM variables
const INPUTS = document.getElementById('inputs');

// declare each as a variable for adding event listeners
let toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    // add a click event listener to both elements with class toggle
    toggle.addEventListener('click', e => {
        // on click, trigger a rerender to the selected view's content
        currentView = e.target.getAttribute('id');
        renderContent(currentView);
    });
});

// function to handle conditional rendering of form content
const renderFormContent = currentView => {
    // this is probably not best practice
    // will remove each individual child node at the end
    INPUTS.innerHTML = '';
    if (currentView === 'lawyer') {
        let inputOne = document.createElement('input');
        inputOne.setAttribute('type', 'text');
        INPUTS.appendChild(inputOne);
        let inputTwo = document.createElement('input');
        inputTwo.setAttribute('type', 'text');
        INPUTS.appendChild(inputTwo);
    }
    else {
        let input = document.createElement('input');
        INPUTS.appendChild(input);
    }
};