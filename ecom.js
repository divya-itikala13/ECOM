const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginClose = document.getElementById('login-close');
const registerClose = document.getElementById('register-close');

loginLink.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

registerLink.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

registerClose.addEventListener('click', () => {
    registerModal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login form submitted!');
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Register form submitted!');
});
