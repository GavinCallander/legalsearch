// dom variables
const CONTAINER = document.getElementById('container');
const HERO = document.getElementById('hero');

// currentView is the variable all content is rendered from
let currentView = 'lawyer';
// const currentView = 'advice';

// DOMContentLoaded triggers
document.addEventListener('DOMContentLoaded', () => {
    renderContent(currentView);
});

const renderContent = (currentView) => {
    // begin by rendering the hero section as it is a constant
    renderHeroContent(currentView);
    // next move onto rendering the following sections of each page
};