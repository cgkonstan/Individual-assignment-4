


function changeImage() {
    var image = document.getElementById('ui-img');
    var nextBtn = document.getElementById('next-btn');
    var restartBtn = document.getElementById('restart-flow');

    image.src = "images/call-declined.png";
    
    var delayInMilliseconds = 2500; //1 second

    setTimeout(function() {
        image.src = "images/start-page.png";
    }, delayInMilliseconds);
        
    nextBtn.style.display = "none";
    restartBtn.style.display ="block";

};

function restart() {    
    var image = document.getElementById('ui-img');
    var nextBtn = document.getElementById('next-btn');
    var restartBtn = document.getElementById('restart-flow');
    
    image.src = "images/incoming-call.png";
    nextBtn.style.display = "block";
    restartBtn.style.display ="none";
};