//toggle light/dark mode functions

function applyDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Toggle dark mode and store the preference in localStorage
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleMode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const darkMode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', darkMode);
    });

// Apply dark mode on page load
applyDarkMode();

});