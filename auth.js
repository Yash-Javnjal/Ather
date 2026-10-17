document.addEventListener('DOMContentLoaded', () => {
    const usersKey = 'aetherUsers';
    const currentUserKey = 'aetherCurrentUser';
    const msg = document.getElementById('msg');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    function getUsers() {
        return JSON.parse(localStorage.getItem(usersKey)) || [];
    }

    function saveUsers(users) {
        localStorage.setItem(usersKey, JSON.stringify(users));
    }

    function showMsg(text) {
        msg.textContent = text;
        msg.classList.add('show');

        setTimeout(() => {
            msg.classList.remove('show');
        }, 2200);
    }

    function normalizeEmail(email) {
        return email.trim().toLowerCase();
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('registerName').value.trim();
            const email = normalizeEmail(document.getElementById('registerEmail').value);
            const password = document.getElementById('registerPassword').value;
            const travelStyle = document.getElementById('travelStyle').value;
            const users = getUsers();
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                showMsg('Account already exists. Please login.');
                return;
            }

            users.push({
                name,
                email,
                password,
                travelStyle
            });

            saveUsers(users);
            showMsg('Account created successfully');
            registerForm.reset();

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1200);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = normalizeEmail(document.getElementById('loginEmail').value);
            const password = document.getElementById('loginPassword').value;
            const users = getUsers();
            const matchedUser = users.find(user => user.email === email && user.password === password);

            if (!matchedUser) {
                showMsg('Invalid email or password');
                return;
            }

            localStorage.setItem(currentUserKey, JSON.stringify(matchedUser));
            showMsg(`Welcome back, ${matchedUser.name}`);

            setTimeout(() => {
                window.location.href = 'index.html#destinations';
            }, 1200);
        });
    }
});
