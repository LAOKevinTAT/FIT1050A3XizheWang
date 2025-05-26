const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});


function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let more = document.querySelectorAll('.more')
document.querySelectorAll('.learn-more').forEach(function (item, index) {
    item.addEventListener('click', function () {
        if (more[index].classList.contains('fade-in')) {
            more[index].classList.remove('fade-in');
            more[index].classList.add('fade-out');
        } else {
            more[index].classList.remove('fade-out');
            more[index].classList.add('fade-in');
        }
    });

});
