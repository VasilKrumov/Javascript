const succBox = document.getElementById('successBox');
const errBox = document.getElementById('errorBox');

export function successBox(message) {

    succBox.innerHTML = `<p class="notification-message" id="successBox">${message}</p>`;

    succBox.style.display = 'block';

    setTimeout(() => {
        succBox.style.display = 'none';
    }, 3000);
}



export function errorBox(message) {
    errBox.innerHTML = `<p class="notification-message" id="successBox">${message}</p>`;

    errBox.style.display = 'block';
    setTimeout(() => {
        errBox.style.display = 'none';
    }, 3000);
}