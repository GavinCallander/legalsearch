// required DOM variables
const MAIN = document.getElementById('main');
// currentList indicates which list items to display
let currentTab = 'state';
// variables used to create content
// may separate into their own file
let statesList = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
    'Delaware','Dist. of Columbia','Floriday','Georgia','Hawaii','Idaho','Illinois',
    'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
    'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
    'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin',
    'Wyoming'
];
let tabs = ['practice area','city','state'];

// primary function to render main content
const renderMainContent = currentView => {
    // clear existing main content
    MAIN.innerHTML = '';

    if (currentView === 'lawyer') {
        MAIN.appendChild(renderCarousel());
        MAIN.appendChild(renderBrowse(currentTab));
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
// render browse content
const renderBrowse = (currentTab) => {
    console.log(currentTab);
    const browse = document.createElement('section');
    browse.setAttribute('id', 'browse');
    // add basic content
    let heading = document.createElement('h3');
    heading.textContent = 'Browse attorneys';
    browse.appendChild(heading);
    // create the lists
    // plan of attack for the content of these lists is to create three objects containing the data
    // these will render based on the current active tab
    let listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'list__container');

    let listHeader = document.createElement('div');
    listHeader.setAttribute('id', 'list__header');
    renderTabs(listHeader, tabs);

    let list = document.createElement('div');
    list.setAttribute('id', 'list');
    renderList(list, currentTab);

    listContainer.appendChild(listHeader);
    listContainer.appendChild(list);

    browse.appendChild(listContainer);
    
    return browse;
};
// function to render tabs for list toggling
const renderTabs = (target, tabs) => {
    console.log('hitting');
    target.innerHTML = '';
    tabs.forEach(tab => {
        let tabElement = document.createElement('div');
        let tabClass = tab === currentTab ? 'tab tab--active' : 'tab';
        tabElement.setAttribute('class', tabClass);
        tabElement.setAttribute('name', tab);
        let tabText = document.createElement('p');
        tabText.textContent = `By ${tab}`;
        tabElement.appendChild(tabText);
        tabElement.addEventListener('click', e => toggleTabs(e, target, tabs));
        target.appendChild(tabElement);
    });
};
// function to handle tab toggling
// updates active tab display and list being shown
const toggleTabs = (e) => {
    console.log('hitting');
    // toggles current tabs, just need to address the identifier of which is active in styling
    currentTab = e.currentTarget.getAttribute('name');
    renderBrowse(currentTab);
};
// function to handle list display
const renderList = (target, currentTab) => {
    // confirm the current tab and use this to render content
    // using states for all for the time being
    statesList.forEach(state => {
        let listItem = document.createElement('a');
        listItem.setAttribute('class', 'list__item');
        listItem.textContent = state;
        target.appendChild(listItem);
    });
};