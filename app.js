const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');


btnEl.addEventListener('click', () => {
    containerEl.classList.toggle('active')
})