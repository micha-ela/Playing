let buttons = [];
let buttonsTrans = [];
let answers = [];
let img;
let sound;
let valueX;
let valueY;
let button;
let bw;
let bh;
let answer1;
let quest;
let iter = 1;
let dataviz=0;
let sec = 0;
let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let counter = 1;
let story=[];
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// for dataviz
let movers = [];
let movers2 = [];
let attractors = [];
let attractor;
let test;
let attr_0f;
let attr_1f;
let attr_2f;
let attractors_feat = [];
let dist = [];


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
    img_beeld30 = loadImage('webBeeld/beeld30.jpg');
    img_beeld31 = loadImage('webBeeld/beeld31.jpg');
    img_beeld32 = loadImage('webBeeld/beeld32.jpg');
    img_beeld33 = loadImage('webBeeld/beeld33.jpg');
    img_beeld34 = loadImage('webBeeld/beeld34.jpg');
    img_beeld35 = loadImage('webBeeld/beeld35.jpg');
    img_beeld36 = loadImage('webBeeld/beeld36.jpg');
    img_beeld37 = loadImage('webBeeld/beeld37.jpg');
    img_beeld38 = loadImage('webBeeld/beeld38.jpg');
    img_beeld39 = loadImage('webBeeld/beeld39.jpg');
    img_beeld40 = loadImage('webBeeld/beeld40.jpg');
    img_beeld41 = loadImage('webBeeld/beeld41.jpg');
    img_beeld42 = loadImage('webBeeld/beeld42.jpg');
    sound_atlas01 = loadSound('webSound/ATLAS01.mp3');
    sound_atlas02 = loadSound('webSound/ATLAS02.mp3');
    sound_atlas03 = loadSound('webSound/ATLAS03.mp3');
    sound_atlas04 = loadSound('webSound/ATLAS04.mp3');
    sound_atlas05 = loadSound('webSound/ATLAS05.mp3');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i <50; i++) {
        let x=random(windowWidth);
        let y=random(windowHeight);
        let cx=random(255);
        let cy=random(255);
        let cz=random(255);
        movers[i]=new Mover (x,y,1,1,cx,cy,cz);
        movers2[i]=new Mover (x,y,1,1,cx,cy,cz);
    }
    
    attractors [0] =new Attractor ((windowWidth/3)*2,windowHeight/3,0,5,random(0,256),random(0,256),random(0,256));
    attractors [1] =new Attractor (windowWidth/3,(windowHeight/3)*2,0,5,random(0,256),random(0,256),random(0,256));
    attractors [2] =new Attractor (windowWidth/4,windowHeight/3.5,0,5,random(0,256),random(0,256),random(0,256));
    attractor =attractors [0];
    attractors_feat=attractors;
}




function draw(){
    if(dataviz==0) {
        Step1();
    }
    else if (dataviz==1){
    Step12();
    }
    else if (dataviz==2){
        Step13();
        }
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

function Step12 () {
    removeElements();
    clear();
    loop();
    // frameRate(1);
    createButtonsTransStep12();
    createQuestStep12();
    createButtonsStep12();
    buttons[0].mouseOver(overButton0Step12);
    buttons[0].mouseOut(outButton0Step12);
    buttons[1].mouseOver(overButton1Step12);
    buttons[1].mouseOut(outButton1Step12);
    buttons[2].mouseOver(overButton2Step12);
    buttons[2].mouseOut(outButton2Step12);
    // buttonsTrans[0].mouseOver(overButtonTrans0Step12);
    // buttonsTrans[1].mouseOver(overButtonTrans1Step12);
    // buttonsTrans[2].mouseOver(overButtonTrans2Step12);
    buttons[0].mouseClicked(clickButton0Step12);
    buttons[1].mouseClicked(clickButton1Step12);
    buttons[2].mouseClicked(clickButton2Step12);
    step();
    if (iter < 2) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 3) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 4) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 5) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 6) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 7) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 8) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 9) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 10) { 
        // Increase counter everytime
        counter += 0.05; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
   else if (iter < 11) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else if (iter < 15) { 
        // Increase counter everytime
        counter += 0.01; 
        // Set the iter variable to the
        // floor value of counter
        iter = floor(counter);
    }
    else {
 
        // If iter increases by 11 then
        // stop the loop
        noLoop();
    }
}

function Step13(){
    removeElements();
    noLoop();
    clear();
    createReport();
    createButtonsStep13();
    buttons[0].mouseClicked(clickButton0Step13);

}

//// vanaf hier functies die gebruikt worden in de steps


function createQuestStep1() {
    // quest1.hide();
    quest1Step1 = createP("ATLAS OF ID");
    quest1Step1.style("top", "700px");
    quest1Step1.style("right", "600px");
    quest1Step1.style("position", "absolute");
    quest1Step1.style("font-size", "108px");
    quest1Step1.style("font-family", "coordinates");
    quest1Step1.style("font-weight", "bold");
    quest1Step1.style("top", "700px");
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


}
function outButton0Step1() {
    clear();
    buttons[0].style("background-color", "#FF1493");


}

// / micha toegevoegd voor next step on click 

function clickButton0Step1 () {

    Step2();
}

/////


function createQuestStep2() {
    // quest2.hide();
    quest1Step2 = createP("Do you want to become</br>the Future Model European?");
    quest1Step2.style("top", "250px");
    quest1Step2.style("left", "700px");
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
    answer1Step2.style("top", "90px");
    answer1Step2.style("right", "120px");
    quest3Step2.remove();
}

function outButton0Step2() {
    clear();
    buttons[0].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans0Step2() {
    
    background(img_beeld07);

}


function overButton1Step2() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step2 = createP("I don't think so either</br>You seem hardly fit.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("bottom", "90px");
    answer1Step2.style("right", "60px");
    quest3Step2.remove();
}

function outButton1Step2() {
    clear();
    buttons[1].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans1Step2() {
    
    background(img_beeld40);
}




function overButton2Step2() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step2 = createP("Really?</br>Well, think about it.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "460px");
    answer1Step2.style("right", "260px");
    quest3Step2.remove();
}
function outButton2Step2() {
    clear();
    buttons[2].style("background-color", "#FF1493");
    answer1Step2.remove();

}
function overButtonTrans2Step2() {
    
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
    quest1Step3.style("left", "480px");
    quest1Step3.style("position", "absolute");
    quest1Step3.style("font-size", "32px");
    quest1Step3.style("font-family", "coordinates");
    quest1Step3.style("font-weight", "bold");

}

function createButtonsStep3() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.25, height * 0.1);
    buttons[1].position(width * 0.15, height * 0.7);
    buttons[2].position(width * 0.05, height * 0.3);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Excellent choice.</br>Participation is good for the soul.");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("top", "100px");
    answer1Step3.style("left", "100px");
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
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Nah.");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("bottom", "110px");
    answer1Step3.style("left", "50px");
    quest3Step3.remove();
}

function outButton1Step3() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step3.remove();

}
function overButtonTrans1Step3() {
    background(img_beeld31);
}


function overButton2Step3() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step3 = createP("Really?</br>Are you sure you don't want to?");
    answer1Step3.style("position", "absolute");
    answer1Step3.style("top", "460px");
    answer1Step3.style("left", "160px");
    quest3Step3.remove();
}

function outButton2Step3() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step3.remove();


}
function overButtonTrans2Step3() {
    background(img_beeld10);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step3 () {
    sound_atlas01.play();
    answers[1]=0;
    Step4();
}

function clickButton1Step3 () {
    sound_atlas01.play();
    answers[1]=1;
    Step4();
}

function clickButton2Step3 () {
    sound_atlas01.play();
    answers[1]=2;
    Step4();
}

////

function createQuestStep4() {
    // quest1.hide();
    quest1Step4 = createP("Forecasting is about the future,</br>not the present,</br>and the future is something</br>that has yet to become real.</br>How readable are You?");
    quest1Step4.style("top", "250px");
    quest1Step4.style("left", "650px");
    quest1Step4.style("position", "absolute");
    quest1Step4.style("font-size", "32px");
    quest1Step4.style("font-family", "coordinates");
    quest1Step4.style("font-weight", "bold");

}

function createButtonsStep4() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step4 = createP("Excellent choice.</br>Transparency is good for the soul.");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("top", "90px");
    answer1Step4.style("right", "120px");
    quest3Step4.remove();
}

function outButton0Step4() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step4.remove();


}
function overButtonTrans0Step4() {
    background(img_beeld11);
}


function overButton1Step4() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step4 = createP("So, you think you are special, huh?");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("bottom", "90px");
    answer1Step4.style("right", "60px");
    quest3Step4.remove();
}

function outButton1Step4() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step4.remove();



}
function overButtonTrans1Step4() {
    background(img_beeld32);
}


function overButton2Step4() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step4 = createP("Really?</br>Are you sure you're not?");
    answer1Step4.style("position", "absolute");
    answer1Step4.style("top", "460px");
    answer1Step4.style("right", "260px");
    quest3Step4.remove();
}

function outButton2Step4() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step4.remove();


}
function overButtonTrans2Step4() {
    background(img_beeld12);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step4 () {
    sound_atlas01.play();
    answers[2]=0;
    Step5();
}

function clickButton1Step4 () {
    sound_atlas01.play();
    answers[2]=1;
    Step5();
}

function clickButton2Step4 () {
    sound_atlas01.play();
    answers[2]=2;
    Step5();
}

////

function createQuestStep5() {
    // quest1.hide();
    quest1Step5 = createP("We make forecasts about people</br>just as we make forecasts about the weather.</br>We make it real!");
    quest1Step5.style("top", "250px");
    quest1Step5.style("left", "550px");
    quest1Step5.style("position", "absolute");
    quest1Step5.style("font-size", "32px");
    quest1Step5.style("font-family", "coordinates");
    quest1Step5.style("font-weight", "bold");

}

function createButtonsStep5() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.25, height * 0.1);
    buttons[1].position(width * 0.15, height * 0.7);
    buttons[2].position(width * 0.05, height * 0.3);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step5 = createP("Excellent choice.</br>Consumer trust is good for business.");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("top", "100px");
    answer1Step5.style("left", "100px");
    quest3Step5.remove();
}

function outButton0Step5() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans0Step5() {
    background(img_beeld13);
}


function overButton1Step5() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step5 = createP("We do.");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("bottom", "110px");
    answer1Step5.style("left", "50px");
    quest3Step5.remove();
}

function outButton1Step5() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans1Step5() {
    background(img_beeld33);
}


function overButton2Step5() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step5 = createP("Really! We do!");
    answer1Step5.style("position", "absolute");
    answer1Step5.style("top", "460px");
    answer1Step5.style("left", "160px");
    quest3Step5.remove();
}

function outButton2Step5() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step5.remove();


}
function overButtonTrans2Step5() {
    background(img_beeld14);
}


// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step5 () {
    sound_atlas01.play();
    answers[3]=0;
    Step6();
}

function clickButton1Step5 () {
    sound_atlas01.play();
    answers[3]=1;
    Step6();
}

function clickButton2Step5 () {
    sound_atlas01.play();
    answers[3]=2;
    Step6();
}

////
function createQuestStep6() {
    // quest1.hide();
    quest1Step6 = createP("Everything, your face included,</br>is imprinted with</br>a characteristic from the stars.</br>Do you want to continue?");
    quest1Step6.style("top", "250px");
    quest1Step6.style("left", "680px");
    quest1Step6.style("position", "absolute");
    quest1Step6.style("font-size", "32px");
    quest1Step6.style("font-family", "coordinates");
    quest1Step6.style("font-weight", "bold");

}

function createButtonsStep6() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.7, height * 0.15);
    buttons[1].position(width * 0.8, height * 0.75);
    buttons[2].position(width * 0.9, height * 0.35);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step6 = createP("Excellent choice.</br>Characteristics are good for the soul.");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("top", "90px");
    answer1Step6.style("right", "120px");
    quest3Step6.remove();
}

function outButton0Step6() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans0Step6() {
    background(img_beeld15);
}


function overButton1Step6() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step6 = createP("Why not?");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("bottom", "90px");
    answer1Step6.style("right", "60px");
    quest3Step6.remove();
}

function outButton1Step6() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans1Step6() {
    background(img_beeld34);
}



function overButton2Step6() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step6 = createP("We proceed anyway.");
    answer1Step6.style("position", "absolute");
    answer1Step6.style("top", "460px");
    answer1Step6.style("right", "260px");
    quest3Step6.remove();
}

function outButton2Step6() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step6.remove();


}
function overButtonTrans2Step6() {
    background(img_beeld16);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step6 () {
    sound_atlas01.play();
    answers[4]=0;
    Step7();
}

function clickButton1Step6 () {
    sound_atlas01.play();
    answers[4]=1;
    Step7();
}

function clickButton2Step6 () {
    sound_atlas01.play();
    answers[4]=2;
    Step7();
}

////

function createQuestStep7() {
    // quest1.hide();
    quest1Step7 = createP("By treating people like things</br>we are creating self-fulfilling prophecies.</br>Is this true?");
    quest1Step7.style("top", "250px");
    quest1Step7.style("left", "550px");
    quest1Step7.style("position", "absolute");
    quest1Step7.style("font-size", "32px");
    quest1Step7.style("font-family", "coordinates");
    quest1Step7.style("font-weight", "bold");

}

function createButtonsStep7() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.25, height * 0.1);
    buttons[1].position(width * 0.15, height * 0.7);
    buttons[2].position(width * 0.05, height * 0.3);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Excellent choice.</br>Self-fulfilling is good for the soul.");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("top", "100px");
    answer1Step7.style("left", "100px");
    quest3Step7.remove();
}

function outButton0Step7() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans0Step7() {
    background(img_beeld17);
}


function overButton1Step7() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Are you one of those healthy people?");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("bottom", "110px");
    answer1Step7.style("left", "50px");
    quest3Step7.remove();
}

function outButton1Step7() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans1Step7() {
    background(img_beeld35);
}


function overButton2Step7() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step7 = createP("Are you sure you are not,</br>because you seem to be?");
    answer1Step7.style("position", "absolute");
    answer1Step7.style("top", "460px");
    answer1Step7.style("left", "160px");
    quest3Step7.remove();
}

function outButton2Step7() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step7.remove();


}
function overButtonTrans2Step7() {
    background(img_beeld18);
}





// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step7 () {
    sound_atlas01.play();
    answers[5]=0;
    Step8();
}

function clickButton1Step7 () {
    sound_atlas01.play();
    answers[5]=1;
    Step8();
}

function clickButton2Step7 () {
    sound_atlas01.play();
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step8 = createP("Excellent choice.</br>Being backward is good for the soul.");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("top", "90px");
    answer1Step8.style("right", "120px");
    quest3Step8.remove();
}

function outButton0Step8() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans0Step8() {
    background(img_beeld19);
}


function overButton1Step8() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step8 = createP("Not?");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("bottom", "90px");
    answer1Step8.style("right", "60px");
    quest3Step8.remove();
}

function outButton1Step8() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans1Step8() {
    background(img_beeld36);
}


function overButton2Step8() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step8 = createP("It might be the case.");
    answer1Step8.style("position", "absolute");
    answer1Step8.style("top", "460px");
    answer1Step8.style("right", "260px");
    quest3Step8.remove();
}

function outButton2Step8() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step8.remove();


}
function overButtonTrans2Step8() {
    background(img_beeld20);
}


// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step8 () {
    sound_atlas01.play();
    answers[6]=0;
    Step9();
}

function clickButton1Step8 () {
    sound_atlas01.play();
    answers[6]=1;
    Step9();
}

function clickButton2Step8 () {
    sound_atlas01.play();
    answers[6]=2;
    Step9();
}


////

function createQuestStep9() {
    // quest1.hide();
    quest1Step9 = createP("Correlation stems from 20th century</br>eugenetic attempts to breed a better future</br>How correlated are you?");
    quest1Step9.style("top", "230px");
    quest1Step9.style("left", "550px");
    quest1Step9.style("position", "absolute");
    quest1Step9.style("font-size", "32px");
    quest1Step9.style("font-family", "coordinates");
    quest1Step9.style("font-weight", "bold");

}

function createButtonsStep9() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.25, height * 0.1);
    buttons[1].position(width * 0.15, height * 0.7);
    buttons[2].position(width * 0.05, height * 0.3);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Excellent choice.<br/ >  Correlation is good for the soul.");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("top", "100px");
    answer1Step9.style("left", "100px");
    quest3Step9.remove();
}

function outButton0Step9() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans0Step9() {
    background(img_beeld21);
}


function overButton1Step9() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Well shame on you!");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("bottom", "110px");
    answer1Step9.style("left", "50px");
    quest3Step9.remove();
}

function outButton1Step9() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans1Step9() {
    background(img_beeld37);
}


function overButton2Step9() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step9 = createP("Reconsider your decision.");
    answer1Step9.style("position", "absolute");
    answer1Step9.style("top", "460px");
    answer1Step9.style("left", "160px");
    quest3Step9.remove();
}

function outButton2Step9() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step9.remove();


}
function overButtonTrans2Step9() {
    background(img_beeld22);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step9 () {
    sound_atlas01.play();
    answers[7]=0;
    Step10();
}

function clickButton1Step9 () {
    sound_atlas01.play();
    answers[7]=1;
    Step10();
}

function clickButton2Step9 () {
    sound_atlas01.play();
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
    buttons[0].position(width * 0.7, height * 0.15);
    buttons[1].position(width * 0.8, height * 0.75);
    buttons[2].position(width * 0.9, height * 0.35);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Excellent choice.<br/ >Submission is good for the soul.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("top", "90px");
    answer1Step10.style("right", "120px");
    quest3Step10.remove();
}

function outButton0Step10() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans0Step10() {
    background(img_beeld23);
}


function overButton1Step10() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Hope you can manage.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("bottom", "90px");
    answer1Step10.style("right", "60px");
    quest3Step10.remove();
}

function outButton1Step10() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans1Step10() {
    background(img_beeld38);
}


function overButton2Step10() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step10 = createP("Make up your mind.");
    answer1Step10.style("position", "absolute");
    answer1Step10.style("top", "460px");
    answer1Step10.style("right", "260px");
    quest3Step10.remove();
}

function outButton2Step10() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step10.remove();


}
function overButtonTrans2Step10() {
    background(img_beeld39);
}

// / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step10 () {
    sound_atlas01.play();
    answers[8]=0;
    Step11();
}

function clickButton1Step10 () {
    sound_atlas01.play();
    answers[8]=1;
    Step11();
}

function clickButton2Step10 () {
    sound_atlas01.play();
    answers[8]=2;
    Step11();
}
////

function createQuestStep11() {
    // quest1.hide();
    quest1Step11 = createP("Your face is like a secret code.<br/ >Does it show?");
    quest1Step11.style("top", "250px");
    quest1Step11.style("left", "600px");
    quest1Step11.style("position", "absolute");
    quest1Step11.style("font-size", "32px");
    quest1Step11.style("font-family", "coordinates");
    quest1Step11.style("font-weight", "bold");

}

function createButtonsStep11() {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width * 0.25, height * 0.1);
    buttons[1].position(width * 0.15, height * 0.7);
    buttons[2].position(width * 0.05, height * 0.3);
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
    sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    answer1Step11 = createP("Excellent choice.<br/ > Exposure is good for the soul.");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("top", "100px");
    answer1Step11.style("left", "100px");
    quest3Step11.remove();
}

function outButton0Step11() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans0Step11() {
    background(img_beeld30);
}


function overButton1Step11() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step11 = createP("You reveal more then you think.");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("bottom", "110px");
    answer1Step11.style("left", "50px");
    quest3Step11.remove();
}

function outButton1Step11() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans1Step11() {
    background(img_beeld41);
}


function overButton2Step11() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step11 = createP("Really?<br/ >Are you sure you don't know?");
    answer1Step11.style("position", "absolute");
    answer1Step11.style("top", "460px");
    answer1Step11.style("left", "160px");
    quest3Step11.remove();
}

function outButton2Step11() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step11.remove();


}
function overButtonTrans2Step11() {
    background(img_beeld42);
}

// // / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step11 () {
     sound_atlas01.play();   
     answers[9]=0;
     dataviz=1;
     Step12();
 }

 function clickButton1Step11 () {
     sound_atlas01.play();
     answers[9]=1;
     dataviz=1;
     Step12();
 }

 function clickButton2Step11 () {
     sound_atlas01.play();
     answers[9]=2;
     dataviz=1;
     Step12();
 }

/////


 function createQuestStep12() {
    // quest1.hide();
    quest1Step12 = createP("A moment please. This might take a minute.");
    quest1Step12.style("top", "150px");
    quest1Step12.style("right", "680px");
    quest1Step12.style("position", "absolute");
    quest1Step12.style("font-size", "24px");
    quest1Step12.style("font-family", "coordinates");
    quest1Step12.style("font-weight", "bold");

}

function createButtonsStep12() {
    buttons[0] = createButton("Finalizing</br>...");
   // buttons[1] = createButton("");
   // buttons[2] = createButton("");
    buttons[0].position(width * 0.47, height * 0.80);
    //buttons[1].position(width * 0.8, height * 0.75);
    //buttons[2].position(width * 0.9, height * 0.35);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
        button.style("background-color", "#FF1493");
        button.style("min-width", "150px");
        button.style("min-height", "150px");
        button.style("border-radius", "100px");
        button.style("color", "black");
        button.style("font-size", "20px");
        button.style("font-family", "coordinates");
        button.style("border", "none");
    }
}

    function createButtonsTransStep12() {
        buttonsTrans[0] = createButton("");
        buttonsTrans[1] = createButton("");
        buttonsTrans[2] = createButton("");
        buttonsTrans[0].position(width * 0, height * 0);
        buttonsTrans[1].position(width * 0.33, height * 0);
        buttonsTrans[2].position(width * 0.66, height * 0);
    // let bw=concat(",1000,px");
        for (let button of buttonsTrans) {
        button.style("background-color", "transparent");
        //button.style("background-color","0");
        //button.style("background-image","none");
        button.style("outline", "none");
        button.style("min-width", "33.334%");
        button.style("min-height", "100%");
         //buttons.style("border-radius","100px");
         //buttons.style("color","#dcdcdc");
         //buttons.style("font-size","20px");
         //buttons.style("font-family","coordinates");
        button.style("border", "none");
   }
}


function overButton0Step12() {
    //sound_atlas03.play();
    buttons[0].style("background-color", "#7FFFD4");
    //answer1Step12 = createP("Excellent choice.<br/ > Blandness is good for bonding.");
    //answer1Step12.style("position", "absolute");
    //answer1Step12.style("top", "90px");
    //answer1Step12.style("right", "120px");
    //quest3Step12.remove();
}

function outButton0Step12() {
    clear();
    buttons[0].style("background-color", "#ff8000");
    answer1Step12.remove();


}
//function overButtonTrans0Step12() {
//    background(img_beeld15);
//}


function overButton1Step12() {
    //sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    //answer1Step12 = createP("What do you mean?<br/ > You don't like bonding?");
    answer1Step12.style("position", "absolute");
    answer1Step12.style("bottom", "90px");
    answer1Step12.style("right", "60px");
    quest3Step12.remove();
}

function outButton1Step12() {
    clear();
    buttons[1].style("background-color", "#ff8000");
    answer1Step12.remove();


}
function overButtonTrans1Step12() {
    background(img_beeld07);
}


function overButton2Step12() {
    //sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step12 = createP("Almost.<br/ > Confusion is a first step.");
    answer1Step12.style("position", "absolute");
    answer1Step12.style("top", "460px");
    answer1Step12.style("right", "260px");
    quest3Step12.remove();
}

function outButton2Step12() {
    clear();
    buttons[2].style("background-color", "#ff8000");
    answer1Step12.remove();


}
function overButtonTrans2Step12() {
    background(img_beeld08);
}


// // / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step12 () {
    answers[10]=0;
    dataviz=2;
    Step13();
}

function clickButton1Step12 () {
    answers[10]=1;
    dataviz=2;
    Step13();
}

function clickButton2Step12 () {
    answers[10]=2;
    dataviz=2;
    Step13();
}

////


/////

function createButtonsStep13() {
    buttons[0] = createButton("START </br> AGAIN");
    // buttons[1] = createButton("Very");
    // buttons[2] = createButton("Uh?");
    buttons[0].position(width * 0.85, height * 0.15);
    // buttons[1].position(width * 0.8, height * 0.75);
    // buttons[2].position(width * 0.9, height * 0.35);
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


// // / micha toegevoegd voor next step on click en om antwoord op te slaan

function clickButton0Step13() {
    dataviz=0;
    Step1();
}

// function clickButton1Step13() {
//     answers[10]=1;
//     dataviz=2;
//     Step13();
// }

// function clickButton2Step13() {
//     answers[10]=2;
//     dataviz=2;
//     Step13();
// }

////

/////////////////////////////////////
/// dataviz

class Mover {
    constructor(x,y,vx,vy,cx,cy,cz){
        this.pos=createVector(x,y);
        this.vel=createVector(vx,vy);
        this.vel.mult(0.1);
        this.acc=p5.Vector.random2D();
        this.lifespan = 150;
        this.shape = createVector(random(40, 50),random(40, 50));
        // this.mass=createVector(this.shape.x*this.shape.y*PI);
        this.mass=1;
        this.r=sqrt(this.mass)*2;
        this.featx=cx;
        this.featy=cy;
        this.featz=cz;
        this.color = createVector(this.featx,this.featy,this.featz);
        this.colori = createVector(this.featx,this.featy,this.featz);
        this.cluster=0;
        this.counter1=0;
        this.counter2=0;
    }

    show() {
        // stroke(255,this.lifespan);
        // strokeWeight(0);
        noStroke();
        fill(this.color.x, this.color.y, this.color.z,this.lifespan);
        ellipse(this.pos.x,this.pos.y,this.shape.x,this.shape.y);
    }


    //try to create loop by working with arrays
    clusterInit () {
            let feat=this.color;
            let attr_0f=attractors[0].color;
            let attr_1f=attractors[1].color;
            let attr_2f=attractors[2].color;
            let dist0 = feat.dist(attr_0f);
            let dist1 = feat.dist(attr_1f);
            let dist2 = feat.dist(attr_2f);
            if (dist0 < dist1 && dist0 < dist2){
                this.cluster=1;
                // this.color.set(10,10,10);
                // console.log("col1 " +this.particles[i].color.x);
                // console.log("dist2 " +distance2);
            }
            if (dist1 < dist0 && dist1 < dist2){
                this.cluster=2;
                // this.color.set(200,200,200);
                // console.log("dist1 " +distance1);
                // console.log("dist2 " +distance2);
            } 
            if (dist2 < dist0 && dist2 < dist1){
                this.cluster=3;
            }
            // console.log("cluster " +this.cluster);
            // console.log(dist0);
            // console.log(dist1);
            // // console.log(feat1);
                    
        }


    applyForce(force) {
        let f=p5.Vector.div(force,this.mass);
            this.acc.add(f);
    }

    attract (mover) {
        let force = p5.Vector.sub(this.pos,mover.pos);
        let distanceSq = constrain(force.magSq(),5,25);
        let G=1;
        let strength = G*(this.mass*mover.mass)/distanceSq;
        force.setMag(strength);
        mover.applyForce (force);
    }

    update () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        // this.acc.setMag(0.1);
        if (this.lifespan > 50){
        this.lifespan -= 1;
        this.counter1 += 1;
            }
        }

    updateFeat () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        // console.log(this.counter2);
        // this.acc.setMag(0.1);
        this.counter2 += 1;
        if (this.cluster==1){
        this.color.set(attr_0f);
            if (this.lifespan > 10 ){
            this.lifespan -= 1;
            }
        }
        if (this.cluster==2){
            this.color.set(attr_1f);
                if (this.lifespan > 10){
                this.lifespan -= 1;
                }
            }
        if (this.cluster==3){
            this.color.set(attr_2f);
                if (this.lifespan > 10){
                this.lifespan -= 1;
                }
            }
        }  

    resetFeat () {
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.acc.set(0,0); 
        this.color.set(this.colori);
            if (this.lifespan > 10){
            this.lifespan += 3;
            }
            // console.log(this.color.x);
            // console.log(this.colori.x);
        }
        

    }

class Attractor {
    constructor(x,y,vx,vy,R,G,B){
        this.pos=createVector(x,y);
        this.vel=createVector(vx,vy);
        this.vel.mult(random(0.1));
        this.acc=p5.Vector.random2D();
        this.lifespan = 255;
        this.shape = createVector(random(10, 20),random(10, 20));
        // this.mass=createVector(this.shape.x*this.shape.y*PI);
        this.mass=1;
        this.r=sqrt(this.mass)*2;
        // this.color = createVector(random(0, 256),random(0, 256),random(0, 256));
        this.color = createVector(R,G,B);
    }

    attract (mover) {
        let force = p5.Vector.sub(this.pos,mover.pos);
        let distanceSq = constrain(force.magSq(),5,5);
        let G=5;
        let strength = G*(this.mass*mover.mass)/distanceSq;
        force.setMag(strength);
        mover.applyForce (force);
    }
    
    show() {
        stroke(255);
        strokeWeight(2);
        fill(this.color.x, this.color.y, this.color.z);
        ellipse(this.pos.x,this.pos.y,this.shape.x*2,this.shape.y*2);
    }
    

}

function AveFeatCluster () {
    let counter1=1;
    let counter2=1;
    let counter3=1;
    attr_0f=attractors[0].color;
    attr_1f=attractors[1].color;
    attr_2f=attractors[2].color;
    // console.log(attr_0f.x);
       for (let i = 0; i < movers.length; i++) {
        let feat=movers[i].color;
        if (movers[i].cluster==1){
            attr_0f.add(feat);
            counter1 +=1;
        }
        if (movers[i].cluster==2){
            attr_1f.add(feat);
            counter2 +=1;
        }
        if (movers[i].cluster==3){
            attr_2f.add(feat);
            counter3 +=1;
        }
    } 
    attr_0f.div(counter1);
    attr_1f.div(counter2);
    attr_2f.div(counter3);
    // console.log(attr_0f.x);
}


function CreateMovers1 () {   
    
    frameRate(5);
    for (let mover of movers) {
    // mover.update();
    mover.show();
    }
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,random(255),random(255,random(255))));
    }

function MoversToCluster () {
    frameRate(5);
    for (let mover of movers) {
        mover.clusterInit();
        }
    for (let mover of movers) {
        mover.update();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
    }
}


function MoversMorphToCluster() {
    AveFeatCluster();
    for (let mover of movers) {
        mover.updateFeat();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
}

function MoversResetFeat () {
    for (let mover of movers) {
        mover.resetFeat();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
}

// function CreateMovers2 () {       
//     frameRate(1);
//     for (let mover of movers2) {
//     // mover.update();
//     mover.show();
//     }
//     let cx_0f=attr_0f.x*random(0.8,1);
//     let cy_0f=attr_0f.y*random(0.8,1);
//     let cz_0f=attr_0f.z*random(0.8,1);
//     let cx_1f=attr_1f.x*random(0.8,1);
//     let cy_1f=attr_1f.y*random(0.8,1);
//     let cz_1f=attr_1f.z*random(0.8,1);
//     movers2.push(new Mover(random(800),random(800),1,5,cx_0f,cy_0f,cz_0f));
//     movers2.push(new Mover(random(800),random(800),1,5,cx_1f,cy_1f,cz_1f));
//     }


function CreateMovers2 () {       
    frameRate(5);
    for (let mover of movers) {
        mover.update();
        mover.show();
        if (mover.cluster==1){
            attractors[0].attract(mover);
            }
        if (mover.cluster==2){
            attractors[1].attract(mover);
            }
        if (mover.cluster==3){
            attractors[2].attract(mover);
            }
        }
    let cx_0f=attr_0f.x*random(0.2,1);
    let cy_0f=attr_0f.y*random(0.2,1);
    let cz_0f=attr_0f.z*random(0.2,1);
    let cx_1f=attr_1f.x*random(0.2,1);
    let cy_1f=attr_1f.y*random(0.2,1);
    let cz_1f=attr_1f.z*random(0.2,1);
    let cx_2f=attr_2f.x*random(0.2,1);
    let cy_2f=attr_2f.y*random(0.2,1);
    let cz_2f=attr_2f.z*random(0.2,1);
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_0f,cy_0f,cz_0f));
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_1f,cy_1f,cz_1f));
    movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_2f,cy_2f,cz_2f));
    }


    // function MoversToCluster2 () {
    //     frameRate(5);
    //     for (let mover of movers2) {
    //         mover.clusterInit();
    //         }
    //     for (let mover of movers2) {
    //         mover.update();
    //         mover.show();
    //         if (mover.cluster==1){
    //             attractors[0].attract(mover);
    //             }
    //         if (mover.cluster==2){
    //             attractors[1].attract(mover);
    //             }
    //     }
    // }

    // function MoversMorphToCluster2() {
    //     AveFeatCluster();
    //     for (let mover of movers2) {
    //         mover.updateFeat();
    //         mover.show();
    //         if (mover.cluster==1){
    //             attractors[0].attract(mover);
    //             }
    //         if (mover.cluster==2){
    //             attractors[1].attract(mover);
    //             }
    //         if (mover.cluster==3){
    //             attractors[2].attract(mover);
    //             }
    //         }
    // }


    // function MoversResetFeat2 () {
    //     for (let mover of movers2) {
    //         mover.resetFeat();
    //         mover.show();
    //         if (mover.cluster==1){
    //             attractors[0].attract(mover);
    //             }
    //         if (mover.cluster==2){
    //             attractors[1].attract(mover);
    //             }
    //         if (mover.cluster==3){
    //             attractors[2].attract(mover);
    //             }
    //         }
    // }


    function CreateMovers3 () {       
        frameRate(5);
        for (let mover of movers) {
            mover.update();
            mover.show();
            if (mover.cluster==1){
                attractors[0].attract(mover);
                }
            if (mover.cluster==2){
                attractors[1].attract(mover);
                }
            if (mover.cluster==3){
                attractors[2].attract(mover);
                }
            }
        let cx_0f=attr_0f.x*random(0.5,1);
        let cy_0f=attr_0f.y*random(0.5,1);
        let cz_0f=attr_0f.z*random(0.5,1);
        let cx_1f=attr_1f.x*random(0.5,1);
        let cy_1f=attr_1f.y*random(0.5,1);
        let cz_1f=attr_1f.z*random(0.5,1);
        let cx_2f=attr_2f.x*random(0.5,1);
        let cy_2f=attr_2f.y*random(0.5,1);
        let cz_2f=attr_2f.z*random(0.5,1);
        movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_0f,cy_0f,cz_0f));
        movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_1f,cy_1f,cz_1f));
        movers.push(new Mover(random(windowWidth),random(windowHeight),1,5,cx_2f,cy_2f,cz_2f));
        }
    
    

function step () {
    switch (iter) {
        case 1:
            clear();
            CreateMovers1();
            break;
        case 2:
            clear();
            MoversToCluster();
            break;
        case 3:
            clear();
            MoversMorphToCluster();
            break;
        case 4:
            clear();
            MoversResetFeat();
            break;    
        case 5:
            clear();
            CreateMovers2();
            break;
        case 6:
            clear();
            MoversToCluster();
            break;
        case 7:
            clear();
            MoversMorphToCluster();
            break;
        case 8:
            clear();
            MoversResetFeat();
            break;    
        case 9:
            clear();
            CreateMovers3();
            break;
        case 10:
            clear();
            MoversToCluster();
            break;
        case 11:
            clear();
            MoversMorphToCluster();
            break;
    }
    }


    


    ///////////////////////////////////
/// rapport 


function createReport () {
    /// We tellen per gebruiker de Yes, No en Maybe
    for (var i = 0; i < 10; i++){
        if (answers[i]==0){
            counter1++;
            print(counter1);            
        }
        if (answers[i]==1){
            counter2++;
        }
        if (answers[i]==2){
            counter3++;
        }
    }
    /// Your future ID
    if (counter1>6)
    {
        pred1=createP("Your FUTURE ID is Future Model European");
        pred2=createP("Congratulations. You are accepted as a Future Model European!");
    }
    else if (counter2>6)
    {
        pred1=createP("Your FUTURE ID is Obsolete");
        pred2=createP("We regret to inform you that you are not accepted as a Future Model European.</br>You will soon become obsolete.");
    }
    else 
    {
        pred1=createP("You FUTURE ID is Pending");
        pred2=createP("We inform you that you are not yet a Future Model European.</br>We invite you to try again tomorrow.");
    }
    pred1.style("top", "100px");
    pred1.style("left","50px");
    pred1.style("position", "absolute");
    pred1.style("font-size", "58px");
    pred1.style("font-family", "coordinates");
    pred1.style("font-weight", "bold");
    pred2.style("top", "200px");
    pred2.style("left", "50px");
    pred2.style("position", "absolute");
    pred2.style("font-size", "38px");
    pred2.style("font-family", "coordinates");
    pred2.style("font-weight", "bold");
    /// De rest van het rapport = de antwoorden die de gebruiker gaf 
    if (answers[0]==0){
        story[0]=createP("You want to become the future model European.");
    }
    else if (answers[0]==1){
        story[0]=createP("You do not want to become the future model European. And you seem hardly fit either.");
    }
    else if (answers[0]==2){
        story[0]=createP("You are not sure that you want to become the future model European.</br>Check out the mind blowing opportunities.");
    }
    if (answers[1]==0){
        story[1]=createP("You want to contribute to the future.");
    }
    else if (answers[1]==1){
        story[1]=createP("You do not want to contribute to the future.");
    }
    else if (answers[1]==2){
        story[1]=createP("You are not sure you want to contribute to the future.");
    }
    if (answers[2]==0){
        story[2]=createP("You expect that your face is an open book.");
    }
    else if (answers[2]==1){
        story[2]=createP("You do not expect that your face is an open book.");
    }
    else if (answers[2]==2){
        story[2]=createP("You are unsure whether your face can be read like an open book. Check it out.");
    }
    if (answers[3]==0){
        story[3]=createP("You know that making forecasts about people is like making forecasts about the weather.");
    }
    else if (answers[3]==1){
        story[3]=createP("You do not know that making forecasts about people is like making forecasts about the weather");
    }
    else if (answers[3]==2){
        story[3]=createP("You are unsure that making forecasts about people is like making forecasts about the weather. Check the available documentation more thoroughly.");
    }
    if (answers[4]==0){
        story[4]=createP("You want to continue on this path.");
    }
    else if (answers[4]==1){
        story[4]=createP("You do not want to continue on this path.");
    }
    else if (answers[4]==2){
        story[4]=createP("You are not sure you want to continue like this. Be more severe to yourself.");
    }
    if (answers[5]==0){
        story[5]=createP("You treat people like things and trap them and yourself in self-fulfilling prophecies.");
    }
    else if (answers[5]==1){
        story[5]=createP("You do not believe in the power of self-fulfilling prophecies and that is a shame.");
    }
    else if (answers[5]==2){
        story[5]=createP("You do not know what self-fulfilling prophecies are. You should invest some time in the topic.");
    }
    if (answers[6]==0){
        story[6]=createP("You know that 2/3 of Flemish people are backward.");
    }
    else if (answers[6]==1){
        story[6]=createP("You are not aware that 2/3 of Flemish people are backward.");
    } 
    else if (answers[6]==2){
        story[6]=createP("You are not sure that 2/3 of Flemish people are backward? Do some research.");
    }
    if (answers[7]==0){
        story[7]=createP("You are correlated.");
    }
    else if (answers[7]==1){
        story[7]=createP("You think you are not correlated. Stop resisting.");
    }
    else if (answers[7]==2){
        story[7]=createP("You will soon realize how correlated you are.");
    }
    if (answers[8]==0){
        story[8]=createP("As a Future Model European you see yourself in a Slave role. We will see to that.");
    }
    else if (answers[8]==1){
        story[8]=createP("As Future Model European you see yourself in a Master role.");
    }
    else if (answers[8]==2){
        story[8]=createP("You need to figure out weather you want to be the Master or the Slave. We let people decide for themselves.");
    }
    if (answers[9]==0){
        story[9]=createP("Your face holds no secret to us.");
    }
    else if (answers[9]==1){
        story[9]=createP("You hardly exist.");
    }
    else if (answers[9]==2){
        story[9]=createP("Try to reveal more next time.");
    }

    story[0].style("top", "350px");
    story[0].style("left", "200px");
    story[1].style("top", "410px");
    story[1].style("left", "200px");
    story[2].style("top", "470px");
    story[2].style("left", "200px");
    story[3].style("top", "530px");
    story[3].style("left", "200px");
    story[4].style("top", "590px");
    story[4].style("left", "200px");
    story[5].style("top", "650px");
    story[5].style("left", "200px");
    story[6].style("top", "710px");
    story[6].style("left", "200px");
    story[7].style("top", "770px");
    story[7].style("left", "200px");
    story[8].style("top", "830px");
    story[8].style("left", "200px");
    story[9].style("top", "890px");
    story[9].style("left", "200px");
 
    for (let s of story){
    s.style("position", "absolute");
    s.style("font-size", "20px");
    s.style("font-family", "coordinates");
    s.style("font-weight", "bold");
    }
}
