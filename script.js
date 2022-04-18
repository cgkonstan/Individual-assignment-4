

//changes the image from call declined
function changeImage() {
    var image = document.getElementById('ui-img');
    var nextBtn = document.getElementById('next-btn');
    var restartBtn = document.getElementById('restart-flow');

    image.src = "images/call-declined.png";
    
    var delayInMilliseconds = 2000; //1 second delay

    setTimeout(function() {
        image.src = "images/start-page.png";
    }, delayInMilliseconds);
        
    nextBtn.style.display = "none";
    restartBtn.style.display ="block";

};

//Allows for restart 
function restart() {    
    var image = document.getElementById('ui-img');
    var nextBtn = document.getElementById('next-btn');
    var restartBtn = document.getElementById('restart-flow');
    
    image.src = "images/incoming-call.png";
    nextBtn.style.display = "block";
    restartBtn.style.display ="none";
};