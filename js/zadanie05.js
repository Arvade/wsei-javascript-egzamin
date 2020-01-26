document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    [...document.querySelectorAll('button[data-text]')].forEach(el => {
        el.addEventListener('click', event=> {
            container.innerHTML = event.target.dataset.text;
        })
    })
});