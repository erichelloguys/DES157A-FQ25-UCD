(function () {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function () {

        const slidesContainer = document.querySelector('.slides');

        const slides = slidesContainer.querySelectorAll('.slide');

        const firstSlide = slides[0];
        const lastSlide = slides[slides.length-1];

        const cloneFirst = firstSlide.cloneNode(true);
        cloneFirst.classList.add('clone');
        slidesContainer.appendChild(cloneFirst);

        const cloneLast = lastSlide.cloneNode(true);
        cloneLast.classList.add('clone');
        slidesContainer.insertBefore(cloneLast, slidesContainer.firstChild);

        const slideWidth = slides[0].getBoundingClientRect().width;

        const slideLength = slides.length;

        slidesContainer.addEventListener('scroll', function(){

            const maxLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

            if (slidesContainer.scrollLeft <= 0){
  
                slidesContainer.scrollLeft = slideWidth * slideLength;

            } else if (slidesContainer.scrollLeft >= maxLeft){
                slidesContainer.scrollLeft = slideWidth;
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

            const expandText = slide.querySelector('p');

            dropDown.classList.toggle('open');

            if (expandText) {
                if(dropDown.classList.contains('open')){
                    expandText.textContent = 'click to collapse';
                } else {
                    expandText.textContent = 'click to expand';
                }
            }
        });

    });

}());
