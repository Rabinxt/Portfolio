document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', function() {
        loadingScreen.style.display = 'none';
    });
});
const roleElement = document.querySelector('.third');
const roles = ['Software Developer', 'Designer', 'Data Scientist', 'Learner'];

function changeRole() {
    const randomIndex = Math.floor(Math.random() * roles.length);
    const newRole = roles[randomIndex];
    
    roleElement.classList.remove('fade-in');
    void roleElement.offsetWidth;
    roleElement.textContent = newRole;
    roleElement.classList.add('fade-in');
}

setInterval(changeRole, 2000);

changeRole();
