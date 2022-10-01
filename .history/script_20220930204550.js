let nav = document.getElementById('nav');
document.addEventListener('scroll',(event) => {
    if(window.scrollToY > 500) {
        nav.classList.add('toFixed');
    } else{
        nav.classList.remove('toFixed');
    }
})