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
    // renders browse content on initial load

// render tabs
    // renders tabs on initial load and subsequent toggles
    // 

// render list
    // renders list on initial load and subsequent toggles
    // must have access to the list DOM element and currentTab global variable


// render browse content
const renderBrowse = () => {
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

    let list = document.createElement('div');
    list.setAttribute('id', 'list');
    
    renderTabs(listHeader, tabs, list);
    renderList(list);

    listContainer.appendChild(listHeader);
    listContainer.appendChild(list);

    browse.appendChild(listContainer);
    
    return browse;
};

const renderTabs = (target, tabs, list) => {
    target.innerHTML = '';
    tabs.forEach(tab => {
        let tabElem = document.createElement('div');
        let tabClass = tab === currentTab ? 'tab tab--active' : 'tab';
        tabElem.setAttribute('class', tabClass);
        tabElem.setAttribute('name', tab);
        let tabText = document.createElement('p');
        tabText.textContent = `By ${tab}`;
        tabElem.appendChild(tabText);
        tabElem.addEventListener('click', e => toggleTabs(e, target, tabs, list));
        target.appendChild(tabElem);
    })
};
const renderList = (list) => {
    list.innerHTML = '';
    if (currentTab === 'state') {
        statesList.forEach(state => {
            let listItemContainer = document.createElement('div');
            let listItem = document.createElement('a');
            listItem.setAttribute('class', 'list__item');
            listItem.textContent = state;
            listItemContainer.appendChild(listItem);
            list.appendChild(listItemContainer);
        });
    }
    else {
        let content = document.createElement('h2');
        content.textContent = 'Well, now, looks like an error!';
        list.appendChild(content);
    };
};

const toggleTabs = (e, target, tabs, list) => {
    currentTab = e.currentTarget.getAttribute('name');
    renderTabs(target, tabs, list);
    renderList(list);
};