const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener ('click', () => {
    menu.classList.add('active');
});

close.addEventListener ('click', () => {
    menu.classList.remove('active');
});

const menuLink = document.querySelectorAll('.nav');

menuLink.forEach(function(myBtn) {
    myBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


const content = document.querySelectorAll('.portfolio__wrapper'),
      tab = document.querySelectorAll('.link'),
      slider = document.querySelector('.portfolio_slider');

function hideTabContent() {
    content.forEach(item => {
        item.style.display = 'none';
    });
    tab.forEach(item => {
        item.classList.remove('active');
    });
}

function showTabContent(i = 0) {
    content[i].style.display = 'grid';
    tab[i].classList.add('active');
}

          
hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
    const target = e.target
    if (target) {
        tab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});





