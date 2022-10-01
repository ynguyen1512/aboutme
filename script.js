let items = document.querySelectorAll('.item');
let nav = document.getElementById('nav');
document.addEventListener('scroll',(event) => {
    if(window.scrollY > 500) {
        nav.classList.add('toFixed');
    } else{
        nav.classList.remove('toFixed');
    }
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 350) {
            item.classList.add('active');
        }
    })
})

