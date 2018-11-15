let showSettingsEffektSound = true;
let showSettingsMusic = true;
//let score = 0;
//let timeLeft = 15;



window.addEventListener("load", pageLoaded);

function pageLoaded() {
    console.log("page loaded");


    showStart();



}




function showStart() {
    console.log("show start");


    document.querySelector("#play_but").addEventListener("click", hideStart);

    document.querySelector("#settings_but").addEventListener("click", showSettings);

}


function showSettings() {
    console.log("show settings");


    document.querySelector("#sfx1").play();
    document.querySelector("#settings_screen").classList.remove("hidden");

    document.querySelector("#music").addEventListener("click", toggleMusic);

    document.querySelector("#sfx").addEventListener("click", toggleSound);

    document.querySelector("#settings_exit").addEventListener("click", hideSettings);


}




function toggleMusic() {

    console.log("toggleMusic");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }

    document.querySelector("#sfx1").play();
}


function musicOff() {
    console.log("musicOff");

    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;
}

function musicOn() {
    console.log("musicOn");

    document.querySelector("#music").classList.remove("off");
    document.querySelector("#music").classList.add("on");

    document.querySelector("#myMusic").muted = false;

}




function toggleSound() {

    console.log("toggleSound");


    //Tjek lyden, er lyden lig med true, dvs = =, skal lyden være lig med false, og føre ned til soundsOff.

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }

    document.querySelector("#sfx1").play();
}

function soundsOff() {
    console.log("soundsOff");

    document.querySelector("#sfx").classList.remove("on");
    document.querySelector("#sfx").classList.add("off");

    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;
    //    document.querySelector("#sfx3").muted = true;
}

function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;
    //    document.querySelector("#sfx3").muted = false;

}







function hideSettings() {

    console.log("hideSettings");
    document.querySelector("#settings_screen").classList.add("hidden");
    document.querySelector("#sfx1").play();

}




function hideStart() {
    console.log("hide start");

    document.querySelector("#sfx1").play();

    //rydde op:
    document.querySelector("#play_but").removeEventListener("click", hideStart);

    document.querySelector("#settings_but").removeEventListener("click", showSettings);

    //rydde op slut


    document.querySelector("#start_screen").classList.add("fade_out");


    document.querySelector("#start_screen").addEventListener("animationend", showAbout);






    document.querySelector("#myMusic").play();
    document.querySelector("#myMusic").loop = true;
    document.querySelector("#myMusic").volume = 0.4;


}




function showAbout() {




    console.log("show about");

    //ryd op

    document.querySelector("#start_screen").removeEventListener("animationend", startGame);

    document.querySelector("#start_screen").classList.remove("fade_out");
    //ryd op slut



    //    document.querySelector("#myMusic").play();
    //    document.querySelector("#myMusic").loop = true;
    //    document.querySelector("#myMusic").volume = 0.7;




    document.querySelector("#start_screen").classList.add("hidden");



    //document.querySelector("#about").classList.remove("hide");

    document.querySelector("#next").addEventListener("click", startGame);



}

function startGame() {

    console.log("start game")

    document.querySelector("#sfx1").play();

    //Reset:

    //    score = 0;
    //    timeLeft = 15;

    //Ryd op:
    document.querySelector("#about_screen").classList.add("hidden");

    document.querySelector("#next").removeEventListener("click", startGame);

    //ryd op slut


    //start animation:




    //start tid:

    timeLeft();




}







function timeLeftFc() {
    console.log("function time_left=" + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);

        document.querySelector("#time").innerHTML = timeLeft;
    } else if (score >= 5) {

        gameWon();
    } else {
        gameOver();
    }





}

function gameOver() {
    console.log("game over")

    document.querySelector("#gameover_screen").classList.remove("hidden");
    timeLeft = 0;

    document.querySelector("#sfx2").pause();
    document.querySelector("#gosound").play();


    document.querySelector("#playagain1").addEventListener("click", startGame);

    //    document.querySelector("#playagain_knap").addEventListener("click", gameReset);

}


function gameWon() {
    console.log("game won")

    //    document.querySelector("#gameover").classList.add("hide");

    document.querySelector("#levelcomplete_screen").classList.remove("hide");
    timeLeft = 0;


    document.querySelector("#sfx1").pause();
    document.querySelector("#winsound").play();


    document.querySelector("#playagain2").addEventListener("click", startGame);
}
