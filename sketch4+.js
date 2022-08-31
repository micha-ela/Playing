let buttons = [];
let buttonsTrans = [];
let answers = [];
let img;
let valueX;
let valueY;
let button;
let bw;
let bh;
let answer1;
let quest;
let iter = 1;
let sec = 0;
let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let counter = 1;


function preload() {
    img_beeld07 = loadImage('webBeeld/beeld07.jpg');
    img_beeld08 = loadImage('webBeeld/beeld08.jpg');
    img_beeld09 = loadImage('webBeeld/beeld09.jpg');
    img_beeld10 = loadImage('webBeeld/beeld10.jpg');
    img_beeld11 = loadImage('webBeeld/beeld11.jpg');
    img_beeld12 = loadImage('webBeeld/beeld12.jpg');
    img_beeld13 = loadImage('webBeeld/beeld13.jpg');
    img_beeld14 = loadImage('webBeeld/beeld14.jpg');
    img_beeld15 = loadImage('webBeeld/beeld15.jpg');
    img_beeld16 = loadImage('webBeeld/beeld16.jpg');
    img_beeld17 = loadImage('webBeeld/beeld17.jpg');
    img_beeld18 = loadImage('webBeeld/beeld18.jpg');
    img_beeld19 = loadImage('webBeeld/beeld19.jpg');
    img_beeld20 = loadImage('webBeeld/beeld20.jpg');
    img_beeld21 = loadImage('webBeeld/beeld21.jpg');
    img_beeld22 = loadImage('webBeeld/beeld22.jpg');
    img_beeld23 = loadImage('webBeeld/beeld23.jpg');
    img_beeld31 = loadImage('webBeeld/beeld31.jpg');
    img_beeld32 = loadImage('webBeeld/beeld32.jpg');
    sound_atlas01 = loadSound('webSound/ATLAS01.mp3');
    sound_atlas02 = loadSound('webSound/ATLAS02.mp3');
    sound_atlas03 = loadSound('webSound/ATLAS03.mp3');
    sound_atlas04 = loadSound('webSound/ATLAS04.mp3');
    sound_atlas05 = loadSound('webSound/ATLAS05.mp3');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}


frameRate(1);

function draw(){
    Step1();
}

// function draw() {

//     setTimeout(Step1, 1);
//     // setTimeout(removeElements(),5000);
//     setTimeout(Step2, 10000);
//     setTimeout(Step3, 25000);
//     setTimeout(Step4, 40000);
//     setTimeout(Step5, 55000);
//     setTimeout(Step6, 70000);
//     setTimeout(Step7, 85000);
//     setTimeout(Step8, 100000);
//     setTimeout(Step9, 115000);
//     setTimeout(Step10, 130000);
//     setTimeout(Step11, 145000);

//     /*}
//     function windowResized() {
//         resizeCanvas(windowWidth, windowHeight);*/
// }


function keyPressed() {
    // selectAll() returns an array of elements with class donkey.
    // If none are found, it returns an empty array [].
    let quests = selectAll('.questStep1');
    // We can then iterate through the array and hide all the elements.
    for (let i = 0; i < quests.length; i++) {
        quests[i].hide();
    }
}


function Step1() {
    removeElements();
    noLoop();
    createQuestStep1();
    createButtonsStep1();
    buttons[0].mouseOver(overButton0Step1);
    // buttons[0].mouseOut(outButton0Step1);
    buttons[0].mouseClicked(clickButton0Step1);

    // removeQuestStep1() ;
}


function Step2() {
    removeElements();
    noLoop();
    createButtonsTransStep2();
    createQuestStep2();
    createButtonsStep2();
    buttons[0].mouseOver(overButton0Step2);
    buttons[0].mouseOut(outButton0Step2);
    buttons[1].mouseOver(overButton1Step2);
    buttons[1].mouseOut(outButton1Step2);
    buttons[2].mouseOver(overButton2Step2);
    buttons[2].mouseOut(outButton2Step2);
    buttonsTrans[0].mouseOver(overButtonTrans0Step2);
    buttonsTrans[1].mouseOver(overButtonTrans1Step2);
    buttonsTrans[2].mouseOver(overButtonTrans2Step2);
    buttons[0].mouseClicked(clickButton0Step2);
    buttons[1].mouseClicked(clickButton1Step2);
    buttons[2].mouseClicked(clickButton2Step2);
}

function Step3() {
    removeElements();
    noLoop();
    createButtonsTransStep3();
    createQuestStep3();
    createButtonsStep3();
    buttons[0].mouseOver(overButton0Step3);
    buttons[0].mouseOut(outButton0Step3);
    buttons[1].mouseOver(overButton1Step3);
    buttons[1].mouseOut(outButton1Step3);
    buttons[2].mouseOver(overButton2Step3);
    buttons[2].mouseOut(outButton2Step3);
    buttonsTrans[0].mouseOver(overButtonTrans0Step3);
    buttonsTrans[1].mouseOver(overButtonTrans1Step3);
    buttonsTrans[2].mouseOver(overButtonTrans2Step3);
    buttons[0].mouseClicked(clickButton0Step3);
    buttons[1].mouseClicked(clickButton1Step3);
    buttons[2].mouseClicked(clickButton2Step3);
}

function Step4() {
    removeElements();
    noLoop();
    createButtonsTransStep4();
    createQuestStep4();
    createButtonsStep4();
    buttons[0].mouseOver(overButton0Step4);
    buttons[0].mouseOut(outButton0Step4);
    buttons[1].mouseOver(overButton1Step4);
    buttons[1].mouseOut(outButton1Step4);
    buttons[2].mouseOver(overButton2Step4);
    buttons[2].mouseOut(outButton2Step4);
    buttonsTrans[0].mouseOver(overButtonTrans0Step4);
    buttonsTrans[1].mouseOver(overButtonTrans1Step4);
    buttonsTrans[2].mouseOver(overButtonTrans2Step4);
    buttons[0].mouseClicked(clickButton0Step4);
    buttons[1].mouseClicked(clickButton1Step4);
    buttons[2].mouseClicked(clickButton2Step4);
}

function Step5() {
    removeElements();
    noLoop();
    createButtonsTransStep5();
    createQuestStep5();
    createButtonsStep5();
    buttons[0].mouseOver(overButton0Step5);
    buttons[0].mouseOut(outButton0Step5);
    buttons[1].mouseOver(overButton1Step5);
    buttons[1].mouseOut(outButton1Step5);
    buttons[2].mouseOver(overButton2Step5);
    buttons[2].mouseOut(outButton2Step5);
    buttonsTrans[0].mouseOver(overButtonTrans0Step5);
    buttonsTrans[1].mouseOver(overButtonTrans1Step5);
    buttonsTrans[2].mouseOver(overButtonTrans2Step5);
    buttons[0].mouseClicked(clickButton0Step5);
    buttons[1].mouseClicked(clickButton1Step5);
    buttons[2].mouseClicked(clickButton2Step5);
}

function Step6() {
    removeElements();
    noLoop();
    createButtonsTransStep6();
    createQuestStep6();
    createButtonsStep6();
    buttons[0].mouseOver(overButton0Step6);
    buttons[0].mouseOut(outButton0Step6);
    buttons[1].mouseOver(overButton1Step6);
    buttons[1].mouseOut(outButton1Step6);
    buttons[2].mouseOver(overButton2Step6);
    buttons[2].mouseOut(outButton2Step6);
    buttonsTrans[0].mouseOver(overButtonTrans0Step6);
    buttonsTrans[1].mouseOver(overButtonTrans1Step6);
    buttonsTrans[2].mouseOver(overButtonTrans2Step6);
    buttons[0].mouseClicked(clickButton0Step6);
    buttons[1].mouseClicked(clickButton1Step6);
    buttons[2].mouseClicked(clickButton2Step6);
}

function Step7() {
    removeElements();
    noLoop();
    createButtonsTransStep7();
    createQuestStep7();
    createButtonsStep7();
    buttons[0].mouseOver(overButton0Step7);
    buttons[0].mouseOut(outButton0Step7);
    buttons[1].mouseOver(overButton1Step7);
    buttons[1].mouseOut(outButton1Step7);
    buttons[2].mouseOver(overButton2Step7);
    buttons[2].mouseOut(outButton2Step7);
    buttonsTrans[0].mouseOver(overButtonTrans0Step7);
    buttonsTrans[1].mouseOver(overButtonTrans1Step7);
    buttonsTrans[2].mouseOver(overButtonTrans2Step7);
    buttons[0].mouseClicked(clickButton0Step7);
    buttons[1].mouseClicked(clickButton1Step7);
    buttons[2].mouseClicked(clickButton2Step7);
}

function Step8() {
    removeElements();
    noLoop();
    createButtonsTransStep8();
    createQuestStep8();
    createButtonsStep8();
    buttons[0].mouseOver(overButton0Step8);
    buttons[0].mouseOut(outButton0Step8);
    buttons[1].mouseOver(overButton1Step8);
    buttons[1].mouseOut(outButton1Step8);
    buttons[2].mouseOver(overButton2Step8);
    buttons[2].mouseOut(outButton2Step8);
    buttonsTrans[0].mouseOver(overButtonTrans0Step8);
    buttonsTrans[1].mouseOver(overButtonTrans1Step8);
    buttonsTrans[2].mouseOver(overButtonTrans2Step8);
    buttons[0].mouseClicked(clickButton0Step8);
    buttons[1].mouseClicked(clickButton1Step8);
    buttons[2].mouseClicked(clickButton2Step8);
}

function Step9() {
    removeElements();
    noLoop();
    createButtonsTransStep9();
    createQuestStep9();
    createButtonsStep9();
    buttons[0].mouseOver(overButton0Step9);
    buttons[0].mouseOut(outButton0Step9);
    buttons[1].mouseOver(overButton1Step9);
    buttons[1].mouseOut(outButton1Step9);
    buttons[2].mouseOver(overButton2Step9);
    buttons[2].mouseOut(outButton2Step9);
    buttonsTrans[0].mouseOver(overButtonTrans0Step9);
    buttonsTrans[1].mouseOver(overButtonTrans1Step9);
    buttonsTrans[2].mouseOver(overButtonTrans2Step9);
    buttons[0].mouseClicked(clickButton0Step9);
    buttons[1].mouseClicked(clickButton1Step9);
    buttons[2].mouseClicked(clickButton2Step9);
}

function Step10() {
    removeElements();
    noLoop();
    createButtonsTransStep10();
    createQuestStep10();
    createButtonsStep10();
    buttons[0].mouseOver(overButton0Step10);
    buttons[0].mouseOut(outButton0Step10);
    buttons[1].mouseOver(overButton1Step10);
    buttons[1].mouseOut(outButton1Step10);
    buttons[2].mouseOver(overButton2Step10);
    buttons[2].mouseOut(outButton2Step10);
    buttonsTrans[0].mouseOver(overButtonTrans0Step10);
    buttonsTrans[1].mouseOver(overButtonTrans1Step10);
    buttonsTrans[2].mouseOver(overButtonTrans2Step10);
    buttons[0].mouseClicked(clickButton0Step10);
    buttons[1].mouseClicked(clickButton1Step10);
    buttons[2].mouseClicked(clickButton2Step10);
}

function Step11() {
    removeElements();
    noLoop();
    createButtonsTransStep11();
    createQuestStep11();
    createButtonsStep11();
    buttons[0].mouseOver(overButton0Step11);
    buttons[0].mouseOut(outButton0Step11);
    buttons[1].mouseOver(overButton1Step11);
    buttons[1].mouseOut(outButton1Step11);
    buttons[2].mouseOver(overButton2Step11);
    buttons[2].mouseOut(outButton2Step11);
    buttonsTrans[0].mouseOver(overButtonTrans0Step11);
    buttonsTrans[1].mouseOver(overButtonTrans1Step11);
    buttonsTrans[2].mouseOver(overButtonTrans2Step11);
    buttons[0].mouseClicked(clickButton0Step11);
    buttons[1].mouseClicked(clickButton1Step11);
    buttons[2].mouseClicked(clickButton2Step11);
}

function createQuestStep1() {
    // quest1.hide();
    quest1Step1 = createP("ATLAS OF ID");
    quest1Step1.style("top", "600px");
    quest1Step1.style("right", "600px");
    quest1Step1.style("position", "absolute");
    quest1Step1.style("font-size", "108px");
    quest1Step1.style("font-family", "coordinates");
    quest1Step1.style("font-weight", "bold");
}

function createButtonsStep1() {
    buttons[0] = createButton("Play the game</br>NOW</br>and limit your future possibilities</br>FOR EVER.");
    buttons[0].position(width * 0.3, height * 0.1);

    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FF1493");
        button.style("min-width", "600px");
        button.style("min-height", "600px");
        button.style("border-radius", "600px");
        button.style("color", "black");
        button.style("font-size", "24px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
        background(img_beeld22);
    }
}


function overButton0Step1() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step1 = createP("");
    answer1Step1.style("position", "absolute");
    answer1Step1.style("top", "80px");
    answer1Step1.style("right", "90px");
    quest3Step1.remove();

}

// / micha toegevoegd voor next step on click 

function clickButton0Step1 () {
    Step2();
}

/////


function createQuestStep2() {
    // quest2.hide();
    quest1Step2 = createP("Do you want to become</br>the future model European?");
    quest1Step2.style("top", "250px");
    quest1Step2.style("right", "600px");
    quest1Step2.style("position", "absolute");
    quest1Step2.style("font-size", "32px");
    quest1Step2.style("font-family", "coordinates");
    quest1Step2.style("font-weight", "bold");
}

function createButtonsStep2() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("HAHA");
    buttons[0].position(width * 0.7, height * 0.15);
    buttons[1].position(width * 0.8, height * 0.75);
    buttons[2].position(width * 0.9, height * 0.35);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FF1493");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep2() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}


function overButton0Step2() {
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step2 = createP("Excellent choice.</br>Modeling is good for the soul.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "80px");
    answer1Step2.style("right", "90px");
    quest3Step2.remove();
}

function outButton0Step2() {
    clear();
    buttons[0].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans0Step2() {
    sound_atlas05.play();
    background(img_beeld13);

}


function overButton1Step2() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step2 = createP("I don't think so either</br>You seem hardly fit.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "450px");
    answer1Step2.style("right", "60px");
    quest3Step2.remove();
}

function outButton1Step2() {
    clear();
    buttons[1].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans1Step2() {
    sound_atlas05.play();
    background(img_beeld22);
}




function overButton2Step2() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step2 = createP("Really?</br>Well, think about it.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "420px");
    answer1Step2.style("right", "50px");
    quest3Step2.remove();
}
function outButton2Step2() {
    clear();
    buttons[2].style("background-color", "#FF1493");
    answer1Step2.remove();

}
function overButtonTrans2Step2() {
    sound_atlas05.play();
    background(img_beeld08);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step2 () {
    sound_atlas01.play();
    answers[0]=0;
    Step3();
}

function clickButton1Step2 () {
    sound_atlas01.play();
    answers[0]=1;
    Step3();
}

function clickButton2Step2 () {
    sound_atlas01.play();
    answers[0]=2;
    Step3();
}



////

function createQuestStep3() {
    // quest1.hide();
    quest1Step3 = createP("There is not a thing on earth, created or born,</br>that does not reveal its inward form also outwardly.</br>Do you want to contribute to the future?");
    quest1Step3.style("top", "250px");
    quest1Step3.style("left", "600px");
    quest1Step3.style("position", "absolute");
    quest1Step3.style("font-size", "32px");
    quest1Step3.style("font-family", "coordinates");
    quest1Step3.style("font-weight", "bold");

}

function createButtonsStep3() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.4, height * 0.15);
    buttons[1].position(width * 0.5, height * 0.65);
    buttons[2].position(width * 0.3, height * 0.25);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#8FBC8F");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep3() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step3() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Excellent choice.</br>Participation is good for the soul.");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("top", "100px");
    answer1Step3.style("left", "150px");
    quest3Step3.remove();
}

function outButton0Step3() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step3.remove();


}
function overButtonTrans0Step3() {
    background(img_beeld09);
}


function overButton1Step3() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Nah.");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("top", "720px");
    answer1Step3.style("left", "580px");
    quest3Step3.remove();
}

function outButton1Step3() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step3.remove();

}
function overButtonTrans1Step3() {
    background(img_beeld10);
}


function overButton2Step3() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Really?</br>Are you sure you don't want to?");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("top", "220px");
    answer1Step3.style("left", "130px");
    quest3Step3.remove();
}

function outButton2Step3() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step3.remove();


}
function overButtonTrans2Step3() {
    background(img_beeld11);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step3 () {
    answers[1]=0;
    Step4();
}

function clickButton1Step3 () {
    answers[1]=1;
    Step4();
}

function clickButton2Step3 () {
    answers[1]=2;
    Step4();
}

////

function createQuestStep4() {
    // quest1.hide();
    quest1Step4 = createP("Forecasting is about the future,</br>not the present,</br>and the future is something</br>that has yet to become real.</br>How readable are You?");
    quest1Step4.style("top", "250px");
    quest1Step4.style("left", "600px");
    quest1Step4.style("position", "absolute");
    quest1Step4.style("font-size", "32px");
    quest1Step4.style("font-family", "coordinates");
    quest1Step4.style("font-weight", "bold");

}

function createButtonsStep4() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.8, height * 0.45);
    buttons[1].position(width * 0.7, height * 0.15);
    buttons[2].position(width * 0.6, height * 0.65);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FF1493");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep4() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step4() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step4 = createP("Excellent choice.</br>Transparency is good for the soul.");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("top", "550px");
    answer1Step4.style("right", "50px");
    quest3Step4.remove();
}

function outButton0Step4() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step4.remove();


}
function overButtonTrans0Step4() {
    background(img_beeld22);
}


function overButton1Step4() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step4 = createP("So, you think you are special, huh?");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("top", "80px");
    answer1Step4.style("right", "50px");
    quest3Step4.remove();
}

function outButton1Step4() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step4.remove();



}
function overButtonTrans1Step4() {
    background(img_beeld13);
}


function overButton2Step4() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step4 = createP("Really?</br>Are you sure you're not?");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("top", "720px");
    answer1Step4.style("right", "350px");
    quest3Step4.remove();
}

function outButton2Step4() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step4.remove();


}
function overButtonTrans2Step4() {
    background(img_beeld14);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step4 () {
    answers[2]=0;
    Step5();
}

function clickButton1Step4 () {
    answers[2]=1;
    Step5();
}

function clickButton2Step4 () {
    answers[2]=2;
    Step5();
}

////

function createQuestStep5() {
    // quest1.hide();
    quest1Step5 = createP("We make forecasts about people</br>just as we make forecasts about the weather.</br>We make it real!");
    quest1Step5.style("top", "250px");
    quest1Step5.style("left", "600px");
    quest1Step5.style("position", "absolute");
    quest1Step5.style("font-size", "32px");
    quest1Step5.style("font-family", "coordinates");
    quest1Step5.style("font-weight", "bold");

}

function createButtonsStep5() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.3, height * 0.15);
    buttons[1].position(width * 0.4, height * 0.5);
    buttons[2].position(width * 0.5, height * 0.65);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FFD700");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep5() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step5() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step5 = createP("Excellent choice.</br>Consumer thrust is good for business.");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("top", "220px");
    answer1Step5.style("left", "50px");
    quest3Step5.remove();
}

function outButton0Step5() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans0Step5() {
    background(img_beeld15);
}


function overButton1Step5() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step5 = createP("We do.");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("top", "520px");
    answer1Step5.style("left", "310px");
    quest3Step5.remove();
}

function outButton1Step5() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans1Step5() {
    background(img_beeld16);
}


function overButton2Step5() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step5 = createP("Really! We do!");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("top", "720px");
    answer1Step5.style("left", "350px");
    quest3Step5.remove();
}

function outButton2Step5() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans2Step5() {
    background(img_beeld17);
}


// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step5 () {
    answers[3]=0;
    Step6();
}

function clickButton1Step5 () {
    answers[3]=1;
    Step6();
}

function clickButton2Step5 () {
    answers[3]=2;
    Step6();
}

////
function createQuestStep6() {
    // quest1.hide();
    quest1Step6 = createP("Everything, your face included,</br>is imprinted with</br>a characteristic from the stars.</br>Do you want to continue?");
    quest1Step6.style("top", "250px");
    quest1Step6.style("right", "600px");
    quest1Step6.style("position", "absolute");
    quest1Step6.style("font-size", "32px");
    quest1Step6.style("font-family", "coordinates");
    quest1Step6.style("font-weight", "bold");

}

function createButtonsStep6() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.35, height * 0.15);
    buttons[1].position(width * 0.4, height * 0.75);
    buttons[2].position(width * 0.55, height * 0.15);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#ff8000");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep6() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step6() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step6 = createP("Excellent choice.</br>Characteristics are good for the soul.");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("top", "480px");
    answer1Step6.style("left", "200px");
    quest3Step6.remove();
}

function outButton0Step6() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans0Step6() {
    background(img_beeld18);
}


function overButton1Step6() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step6 = createP("Why not?");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("top", "720px");
    answer1Step6.style("left", "250px");
    quest3Step6.remove();
}

function outButton1Step6() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans1Step6() {
    background(img_beeld19);
}



function overButton2Step6() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step6 = createP("We proceed anyway.");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("top", "120px");
    answer1Step6.style("left", "250px");
    quest3Step6.remove();
}

function outButton2Step6() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans2Step6() {
    background(img_beeld20);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step6 () {
    answers[4]=0;
    Step7();
}

function clickButton1Step6 () {
    answers[4]=1;
    Step7();
}

function clickButton2Step6 () {
    answers[4]=2;
    Step7();
}

////

function createQuestStep7() {
    // quest1.hide();
    quest1Step7 = createP("By treating people like things</br>we are creating self-fulfilling prophecies.</br>Is this true?");
    quest1Step7.style("top", "250px");
    quest1Step7.style("left", "600px");
    quest1Step7.style("position", "absolute");
    quest1Step7.style("font-size", "32px");
    quest1Step7.style("font-family", "coordinates");
    quest1Step7.style("font-weight", "bold");

}

function createButtonsStep7() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.4, height * 0.15);
    buttons[1].position(width * 0.5, height * 0.65);
    buttons[2].position(width * 0.3, height * 0.25);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#8FBC8F");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep7() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step7() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Excellent choice.</br>Self-fulfilling is good for the soul.");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("top", "100px");
    answer1Step7.style("left", "150px");
    quest3Step7.remove();
}

function outButton0Step7() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans0Step7() {
    background(img_beeld21);
}


function overButton1Step7() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Are you one of those healthy people?");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("top", "720px");
    answer1Step7.style("left", "580px");
    quest3Step7.remove();
}

function outButton1Step7() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans1Step7() {
    background(img_beeld22);
}


function overButton2Step7() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Are you sure you are not,</br>because you seem to be?");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("top", "220px");
    answer1Step7.style("left", "130px");
    quest3Step7.remove();
}

function outButton2Step7() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans2Step7() {
    background(img_beeld23);
}





// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step7 () {
    answers[5]=0;
    Step8();
}

function clickButton1Step7 () {
    answers[5]=1;
    Step8();
}

function clickButton2Step7 () {
    answers[5]=2;
    Step8();
}

////

function createQuestStep8() {
    // quest1.hide();
    quest1Step8 = createP("Research at Brussels University found</br>that 2/3 of Flemish people never heard of AI</br>and if they did</br>they didn't know what it was.</br>Are Flemish people backward?");
    quest1Step8.style("top", "250px");
    quest1Step8.style("left", "500px");
    quest1Step8.style("position", "absolute");
    quest1Step8.style("font-size", "32px");
    quest1Step8.style("font-family", "coordinates");
    quest1Step8.style("font-weight", "bold");

}

function createButtonsStep8() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.8, height * 0.45);
    buttons[1].position(width * 0.7, height * 0.15);
    buttons[2].position(width * 0.6, height * 0.65);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FF1493");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep8() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step8() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step8 = createP("Excellent choice.</br>Being backward is good for the soul.");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("top", "550px");
    answer1Step8.style("right", "50px");
    quest3Step8.remove();
}

function outButton0Step8() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans0Step8() {
    background(img_beeld04);
}


function overButton1Step8() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step8 = createP("Not?");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("top", "80px");
    answer1Step8.style("right", "50px");
    quest3Step8.remove();
}

function outButton1Step8() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans1Step8() {
    background(img_beeld15);
}


function overButton2Step8() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step8 = createP("It might be the case.");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("top", "720px");
    answer1Step8.style("right", "350px");
    quest3Step8.remove();
}

function outButton2Step8() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans2Step8() {
    background(img_beeld21);
}


// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step8 () {
    answers[6]=0;
    Step9();
}

function clickButton1Step8 () {
    answers[6]=1;
    Step9();
}

function clickButton2Step8 () {
    answers[6]=2;
    Step9();
}


////

function createQuestStep9() {
    // quest1.hide();
    quest1Step9 = createP("Correlation stems from 20th century</br>eugenetic attempts to breed a better future</br>How correlated are you?");
    quest1Step9.style("top", "230px");
    quest1Step9.style("left", "600px");
    quest1Step9.style("position", "absolute");
    quest1Step9.style("font-size", "32px");
    quest1Step9.style("font-family", "coordinates");
    quest1Step9.style("font-weight", "bold");

}

function createButtonsStep9() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.7, height * 0.15);
    buttons[1].position(width * 0.8, height * 0.75);
    buttons[2].position(width * 0.9, height * 0.35);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FFD700");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep9() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step9() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Excellent choice.<br/ >  Correlation is good for the soul.");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("top", "80px");
    answer1Step9.style("right", "90px");
    quest3Step9.remove();
}

function outButton0Step9() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans0Step9() {
    background(img_beeld22);
}


function overButton1Step9() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Well shame on you!");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("top", "600px");
    answer1Step9.style("right", "60px");
    quest3Step9.remove();
}

function outButton1Step9() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans1Step9() {
    background(img_beeld11);
}


function overButton2Step9() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Reconsider your decision.");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("top", "420px");
    answer1Step9.style("right", "50px");
    quest3Step9.remove();
}

function outButton2Step9() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans2Step9() {
    background(img_beeld06);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step9 () {
    answers[7]=0;
    Step10();
}

function clickButton1Step9 () {
    answers[7]=1;
    Step10();
}

function clickButton2Step9 () {
    answers[7]=2;
    Step10();
}

////

function createQuestStep10() {
    // quest1.hide();
    quest1Step9 = createP("We extract knowledge<br/ >from the slave to the master.<br/ >Are you the slave or the master?");
    quest1Step9.style("top", "250px");
    quest1Step9.style("left", "600px");
    quest1Step9.style("position", "absolute");
    quest1Step9.style("font-size", "32px");
    quest1Step9.style("font-family", "coordinates");
    quest1Step9.style("font-weight", "bold");

}

function createButtonsStep10() {
    buttons[0] = createButton("Slave");
    buttons[1] = createButton("Master");
    buttons[2] = createButton("Don't</br>know");
    buttons[0].position(width * 0.35, height * 0.15);
    buttons[1].position(width * 0.45, height * 0.5);
    buttons[2].position(width * 0.55, height * 0.65);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#ff8000");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep10() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}

function overButton0Step10() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Excellent choice.<br/ >Submission is good for the soul.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("bottom", "220px");
    answer1Step10.style("right", "50px");
    quest3Step10.remove();
}

function outButton0Step10() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans0Step10() {
    background(img_beeld12);
}


function overButton1Step10() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Hope you can manage.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("bottom", "520px");
    answer1Step10.style("right", "310px");
    quest3Step10.remove();
}

function outButton1Step10() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans1Step10() {
    background(img_beeld08);
}


function overButton2Step10() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Make up your mind.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("bottom", "720px");
    answer1Step10.style("right", "350px");
    quest3Step10.remove();
}

function outButton2Step10() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans2Step10() {
    background(img_beeld32);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step10 () {
    answers[8]=0;
    Step11();
}

function clickButton1Step10 () {
    answers[8]=1;
    Step11();
}

function clickButton2Step10 () {
    answers[8]=2;
    Step11();
}
////

function createQuestStep11() {
    // quest1.hide();
    quest1Step11 = createP("Your face is like a secret code.<br/ >Does it show?");
    quest1Step11.style("top", "250px");
    quest1Step11.style("right", "600px");
    quest1Step11.style("position", "absolute");
    quest1Step11.style("font-size", "32px");
    quest1Step11.style("font-family", "coordinates");
    quest1Step11.style("font-weight", "bold");

}

function createButtonsStep11() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.3, height * 0.45);
    buttons[1].position(width * 0.4, height * 0.75);
    buttons[2].position(width * 0.5, height * 0.15);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#ff8000");
        button.style("min-width", "100px");
        button.style("min-height", "100px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

function createButtonsTransStep11() {
    buttonsTrans[0] = createButton("");
    buttonsTrans[1] = createButton("");
    buttonsTrans[2] = createButton("");
    buttonsTrans[0].position(width * 0, height * 0);
    buttonsTrans[1].position(width * 0.33, height * 0);
    buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
    for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border", "none");
    }
}


function overButton0Step11() {
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step11 = createP("Excellent choice.<br/ > Exposure is good for the soul.");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("top", "480px");
    answer1Step11.style("left", "200px");
    quest3Step11.remove();
}

function outButton0Step11() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans0Step11() {
    background(img_beeld15);
}


function overButton1Step11() {
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step11 = createP("You reveal more then you think.");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("top", "720px");
    answer1Step11.style("left", "250px");
    quest3Step11.remove();
}

function outButton1Step11() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans1Step11() {
    background(img_beeld07);
}


function overButton2Step11() {
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step11 = createP("Really?<br/ > Are you sure you don't know?");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("top", "120px");
    answer1Step11.style("left", "250px");
    quest3Step11.remove();
}

function outButton2Step11() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans2Step11() {
    background(img_beeld08);
}

// // / micha toegevoegd voor next step on click en om antwoord op te slaan

// function clickButton0Step11 () {
//     answers[9]=0;
//     Step2();
// }

// function clickButton1Step11 () {
//     answers[9]=1;
//     Step2();
// }

// function clickButton2Step11 () {
//     answers[9]=2;
//     Step2();
// }
