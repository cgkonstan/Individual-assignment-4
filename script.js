
    var image = document.getElementById('ui-img');
    var nextBtn = document.getElementById('next-btn');
    var restartBtn = document.getElementById('restart-flow');

function changeImage() {
    if (image.src.match("incoming-call")) {
        image.src = "images/call-declined.png";
    }
    else {
        image.src = "images/start-page.png";
    }

    if (image.src.match("start-page")) {
        nextBtn.style.display = "none";
        restartBtn.style.display ="block"
    }
    else {
        nextBtn.style.display = "block";
        restartBtn.style.display ="none"
    }
};