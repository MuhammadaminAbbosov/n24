const burgerBtn = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.header__close-btn');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', function () { 
    burgerBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    overlay.style.display = 'block';
    
    setTimeout(function () { 
        overlay.classList.toggle('active');
    },300)
})

closeBtn.addEventListener('click', function () { 
    burgerBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    overlay.classList.toggle('active');
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 300)
})

