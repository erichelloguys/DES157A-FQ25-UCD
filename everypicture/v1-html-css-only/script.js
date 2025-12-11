(function () {

    'use strict';

    document.addEventListener("DOMContentLoaded", function () {

        const slidesContainer = document.querySelector(".slides");

        slidesContainer.addEventListener("click", function (event) {

            const img = event.target.closest("img");
            if (!img) {
                return;
            }

            const slide = img.closest(".slide");
            if (!slide) {
                return;
            }

            const dropDown = slide.querySelector(".dropDown");
            if (!dropDown) {
                return;
            }

            dropDown.classList.toggle("open");
        });

    });

}());
