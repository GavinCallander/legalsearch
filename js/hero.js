// Required DOM variables
const ADVICE = document.getElementById('advice');
const HERO = document.getElementById('hero');
const HERO_HEADING = document.getElementById('hero__heading');
const LAWYER = document.getElementById('lawyer');

const renderHeroContent = currentView => {
    // changes that can be made using currentView
    // trigger a class change on hero to change styling accordingly
    // for now, this is just a background image change
    HERO.setAttribute('class', `hero--${currentView}`);
    // lawyer content
    if (currentView === 'lawyer') {
        // change toggle classes
        ADVICE.setAttribute('class', 'toggle');
        LAWYER.setAttribute('class', 'toggle toggle--active');
        // set conditional textContent of the h1 tag
        HERO_HEADING.textContent = 'Experienced lawyers are ready to help';
        // trigger renderForm function
        renderFormContent(currentView);
    }
    // advice content
    else {
        ADVICE.setAttribute('class', 'toggle toggle--active');
        LAWYER.setAttribute('class', 'toggle');

        HERO_HEADING.textContent = 'Find the legal answers you need';

        renderFormContent(currentView);
    };
};