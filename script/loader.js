const loader = document.getElementById('loading');
    window.addEventListener('load', () => {
        loader.style.display = 'none'   
        const section = document.querySelector('.header-wrapper-index');
        section.classList.add('active')
});