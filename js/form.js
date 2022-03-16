// declare each as a variable for adding event listeners
let toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    // add a click event listener to both elements with class toggle
    toggle.addEventListener('click', e => {
        // on click, set currentDisplay to that element's id
        // this will enable a display change
        currentDisplay = e.target.getAttribute('id');
    });
});