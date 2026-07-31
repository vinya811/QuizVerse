const slideButton = document.getElementById("slide-button");
const slideCircle = document.querySelector(".slide-circle");

let isDragging = false;

// Start dragging
slideCircle.addEventListener("pointerdown", function (event) {
    isDragging = true;

    // Prevent text selection while dragging
    slideCircle.setPointerCapture(event.pointerId);

    // Disable transition while dragging
    slideCircle.style.transition = "none";
});

// Move the circle
document.addEventListener("pointermove", function (event) {

    if (!isDragging) return;

    const buttonWidth = slideButton.offsetWidth;
    const circleWidth = slideCircle.offsetWidth;

    let newPosition =
        event.clientX -
        slideButton.getBoundingClientRect().left -
        circleWidth / 2;

    // Keep inside the button
    if (newPosition < 0) {
        newPosition = 0;
    }

    if (newPosition > buttonWidth - circleWidth) {
        newPosition = buttonWidth - circleWidth;
    }

    slideCircle.style.left = `${newPosition}px`;

    // If reached the end
    if (newPosition >= buttonWidth - circleWidth - 10) {
        window.location.href = "index2.html";
    }
});

// Stop dragging
document.addEventListener("pointerup", function () {

    if (!isDragging) return;

    isDragging = false;

    // Smoothly move back
    slideCircle.style.transition = "left 0.3s ease";
    slideCircle.style.left = "0px";
});