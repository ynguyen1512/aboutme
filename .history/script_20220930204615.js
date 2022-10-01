let nav = document.getElementById('nav');
document.addEventListener('scroll',(event) => {
    if(window.scrollY > 500) {
        nav.classList.add('toFixed');
    } else{
        nav.classList.remove('toFixed');
    }
})