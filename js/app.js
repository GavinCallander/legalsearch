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
    // next, render content to the main section of the page
    renderMainContent(currentView);
};