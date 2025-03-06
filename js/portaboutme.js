document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const texts = document.querySelectorAll(".text");

    if (texts.length === 0) return;

    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) { 
            if (currentIndex < texts.length) {
                texts[currentIndex].style.opacity = "1";
                texts[currentIndex].style.transform = "translateY(0)";
                currentIndex++;
            }
        } else { 
            if (currentIndex > 0) {
                currentIndex--;
                texts[currentIndex].style.opacity = "0";
                texts[currentIndex].style.transform = "translateY(50px)";
            }
        }
    });
});
