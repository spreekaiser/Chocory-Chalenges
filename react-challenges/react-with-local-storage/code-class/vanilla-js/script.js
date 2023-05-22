let button = document.querySelector('#cookiebanner button');
let cookiebanner = document.querySelector('#cookiebanner');

try {
    let consent = localStorage.getItem('consent');
    console.log('consent is: ', consent);

    if (consent == 'ok') {
        cookiebanner.style.display = 'none';
    }
} catch (e) {
    console.log('Error Getting Local Storage: ', e);
}

button.addEventListener('click', () => {
    try {
        cookiebanner.style.display = 'none';
        localStorage.setItem('consent', 'ok');
    } catch (e) {
        console.log('Error in Set Local Storage: ', e);
    }
});
