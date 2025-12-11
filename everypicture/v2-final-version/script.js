(function () {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function () {

        const slidesContainer = document.querySelector('.slides');

        const slides = slidesContainer.querySelectorAll('.slide');

        slides.forEach(function(slide){
            const cloneFirst = slide.cloneNode(true);

            cloneFirst.classList.add('clone');
            slidesContainer.appendChild(cloneFirst);

            const cloneLast = slide.cloneNode(true);
            cloneLast.classList.add('clone');
            slidesContainer.insertBefore(cloneLast, slidesContainer.firstChild);
        });

        const slideWidth = slides[0].getBoundingClientRect().width;

        slidesContainer.scrollLeft = slideWidth * slides.length;

        slidesContainer.addEventListener('scroll', function(){
            const maxLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

            if (slidesContainer.scrollLeft <= 0){
  
                slidesContainer.scrollLeft = slideWidth * slides.length;

            } else if (slidesContainer.scrollLeft >= maxLeft){
                slidesContainer.scrollLeft = slideWidth * slides.length;

            }
        });

        slidesContainer.addEventListener('click', function (event) {
            const img = event.target.closest('img');
            if (!img) {
                return;
            }

            const slide = img.closest('.slide');
            if (!slide) {
                return;
            }

            const dropDown = slide.querySelector('.dropDown');
            if (!dropDown) {
                return;
            }

            dropDown.classList.toggle('open');
        });

    });

}());
