function PageLoaded()
{
    ShowDiv('Welcome');
}

function ShowModal(){
    var selected = document.getElementById('About');
    selected .style.visibility="visible";
    openD();
}

function ShowGameOver(){
    var selected = document.getElementById('GameOver');
    selected .style.visibility="visible";
    openG();
}

function ShowDiv(id)
{
    //hide all sections

    var section1 = document.getElementById('Game');
    section1.style.visibility="hidden";
    var section2 = document.getElementById('Settings');
    section2.style.visibility="hidden";
    var section3 = document.getElementById('My Account');
    section3.style.visibility="hidden";
    var section4 = document.getElementById('About');
    section4.style.visibility="hidden";
    var section5 = document.getElementById('Welcome');
    section5.style.visibility="hidden";
    var section6 = document.getElementById('Login');
    section6.style.visibility="hidden";
    var section7 = document.getElementById('Register');
    section7.style.visibility="hidden";
    var section7 = document.getElementById('GameOver');
    section7.style.visibility="hidden";

    //show only one section
    var selected = document.getElementById(id);
    selected .style.visibility="visible";

    //hide gamebutton untill loging
    if (welcomebutton.innerText=="Welcome")
    {
        HideGame();
    }

    //if logout button was pressed
    if (welcomebutton.innerText=="Log Out" && id=="Welcome") {
        welcomebutton.innerText = "Welcome";
        HideGame();
        document.getElementById('loginB').style.display="block"
        document.getElementById('registerB').style.display="block"
    }

    //sound
    if (id=="Game") {
        startSound();
    }
    if (id!="Game") {
        stopSound();
        StopGame();
    }

    //todo: it will be better to call a function here to play the scripts according to id, for now it like this
    if (id==='Game') {
        // jQuery.getScript("game.js",function(){
        //     Start();
        // });
        Start();
    }
}

function HideGame() {
    var gamebutton = document.getElementById('gamebutton');
    gamebutton.style.display = "none";
}

function ShowGame() {
    var gamebutton = document.getElementById('gamebutton');
    gamebutton.style.display = "block";
}

function HideWelcome(){
    var welcomebutton = document.getElementById('welcomebutton');
    welcomebutton.innerText="Log Out";
}




