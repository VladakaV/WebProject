function animateOpacity(abc, duration) {
    let start;
    
    function step(timestamp) {
        if (!start) start = timestamp;
        const opacity = (timestamp - start) / duration;
        abc.style.opacity = opacity;
        if (opacity >= 1) return;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

const abc = document.getElementById("popup");
abc.style.opacity = 0;
window.addEventListener("load", () => animateOpacity(abc, 500));