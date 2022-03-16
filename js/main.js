// required DOM variables
const MAIN = document.getElementById('main');
// primary function to render main content
const renderMainContent = currentView => {
    // clear existing main content
    MAIN.innerHTML = '';

    if (currentView === 'lawyer') {
        MAIN.appendChild(renderCarousel());
        MAIN.appendChild(renderBrowse());
    }
    else {
        // let sectionOne = document.createElement('section');
        // MAIN.appendChild(sectionOne);
    };
};
// render carousel content
const renderCarousel = () => {
    // create carousel element and set necessary attributes
    let carousel = document.createElement('section');
    carousel.setAttribute('id', 'carousel');
    // add basic content
    let heading = document.createElement('h3');
    heading.textContent = 'Top-rated lawyers near you'
    carousel.appendChild(heading);
    // create the actual carousel
    let carouselInner = document.createElement('div');
    carouselInner.setAttribute('id', 'carousel__inner');

    return carousel;
};