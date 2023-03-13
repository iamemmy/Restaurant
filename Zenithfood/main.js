let navBtn = document.querySelector('.fas');
let navWrapper = document.querySelector('#nav-items-wrapper');
let navItem = document.querySelectorAll('.item');
let body = document.querySelector('body');

navBtn.addEventListener('click', function() {
    setTimeout(function() {
        navBtn.classList.toggle("fa-times");
    }, 300);

    if ( navWrapper.style.left != "50%" ) {
        navWrapper.style.left = "50%";
        body.style.overflowY = 'hidden'
    } else {
        navWrapper.style.left = "-100%";
        body.style.overflowY = 'scroll'
    }

    navItem.forEach( item =>{
        item.style.visibility = 'hidden'
        setTimeout(()=>{
            item.style.visibility = 'visible'
        }, 350)
       })
})