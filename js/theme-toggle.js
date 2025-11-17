document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            toggleButton.textContent = 'Přepnout na Světlý Režim';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            toggleButton.textContent = 'Přepnout na Tmavý Režim';
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        // If no saved theme, respect system preference but don't save it
        // The CSS media query handles this, but we set the button text for consistency
        toggleButton.textContent = 'Přepnout na Světlý Režim';
    } else {
        setTheme('light'); // Default to light theme and set button text
    }

    // Event listener for the button
    toggleButton.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});
