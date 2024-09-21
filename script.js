window.onload = function() {
    const roleElement = document.querySelector('.third');
    const roles = ['Software Developer', 'Designer', 'Data Scientist', 'Learner'];
    let currentRoleIndex = 0;
    let charIndex = 0;

    function typeRole() {
        const currentRole = roles[currentRoleIndex];
        roleElement.textContent = currentRole.slice(0, charIndex + 1) +'|';
        charIndex++;

        if (charIndex < currentRole.length) {
            setTimeout(typeRole, 150); // Continue typing the next character
        } else {
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to next role
                charIndex = 0;
                setTimeout(typeRole, 1000); 
            }, 2000); 
        }
    }

    typeRole(); 
};