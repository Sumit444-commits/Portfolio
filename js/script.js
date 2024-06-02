async function main() {

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".top").style.top = "0";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".cancel").style.display = "block";
    })
    document.querySelector(".cancel").addEventListener("click", () => {
        document.querySelector(".top").style.top = "-200px";
        document.querySelector(".cancel").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
    })

    document.addEventListener('DOMContentLoaded', (event) => {
        const toggleButton = document.getElementById('darkModeToggle');
        const body = document.body;
    
        // Check if the user has a preference saved in localStorage
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
        } else {
            body.classList.add('light-mode');
        }
    
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
    
            // Save the user's preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    });
    
}
main();