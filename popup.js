function popupOpen() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    history.pushState(true, null, "#form");
    animateOpacity(popup, 200);
}


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



function animateOpacityBack(abc, duration) {
    let start;

    function step(timestamp) {
        if (!start) start = timestamp;
        const opacity = 1 - ((timestamp - start) / duration);
        abc.style.opacity = opacity;
        if (opacity < 0) return;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

function popupClose() {
    let popup = document.getElementById("popup");
    history.pushState(false, null, "\u0000");
    animateOpacityBack(popup, 200);
    setTimeout(function() {
        popup.style.visibility = "hidden";
      }, 200);
}





window.addEventListener("popstate", (e) => {
    if (e.state == true) {
        let popup = document.getElementById("popup");
        popup.style.visibility = "visible";
    }
    else {
        let popup = document.getElementById("popup");
        popup.style.visibility = "hidden";
    }
})


window.addEventListener("DOMContentLoaded", function (event) {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    console.log("work");
    let buttonOpen = document.getElementsByName("btn_form");
    buttonOpen.forEach(function (a) {
        a.addEventListener("click", popupOpen);
    });

    let buttonClose = document.getElementById("popupClose");
    buttonClose.addEventListener("click", popupClose);

    if (location.hash === "#form") {
        let popup = document.getElementById("popup");
        popup.style.visibility = "visible";
    }
});




