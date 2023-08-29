// const chevronBtns = document.querySelectorAll('.fa-chevron-down');
// const timesBtns = document.querySelectorAll('.fa-times');

// chevronBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         btn.parentElement.parentElement.classList.add('active');
//     })
// });

// timesBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         btn.parentElement.parentElement.classList.remove('active');
//     })
// });

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
});