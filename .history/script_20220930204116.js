let nav = document.querySelector('#nav');
document.addEventListener('scroll',(event) => {
    if(windows.scrollToY > 500) {
        nav.classList.add('toFixed');
    } else{
        nav.classList.remove('toFixed');
    }
})