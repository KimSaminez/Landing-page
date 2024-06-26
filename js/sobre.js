let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.review-item');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.review-item').length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 5000); 
});

document.addEventListener("DOMContentLoaded", function() {
    var ratings = document.querySelectorAll('.rating');
        ratings.forEach(function(rating) {
        var stars = rating.innerText.length;
            var starCount = document.createElement('span');
        starCount.className = 'star-count';
            starCount.innerText = stars + '.0';
            rating.appendChild(starCount);
    });
});
        