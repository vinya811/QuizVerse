const slideButton = document.getElementById("slide-button");

const slideCircle = document.querySelector(".slide-circle");


let isDragging = false;


slideCircle.addEventListener("mousedown", function () {

    isDragging = true;

});


document.addEventListener("mousemove", function (event) {


    if (!isDragging) {

        return;

    }


    const buttonWidth = slideButton.offsetWidth;

    const circleWidth = slideCircle.offsetWidth;


    let newPosition =

        event.clientX -

        slideButton.getBoundingClientRect().left -

        circleWidth / 2;


    if (newPosition < 0) {

        newPosition = 0;

    }


    if (newPosition > buttonWidth - circleWidth) {

        newPosition = buttonWidth - circleWidth;

    }


    slideCircle.style.left = `${newPosition}px`;


    if (

        newPosition >=

        buttonWidth - circleWidth - 10

    ) {

        window.location.href = "index2.html";

    }

});


document.addEventListener("mouseup", function () {

    isDragging = false;

});