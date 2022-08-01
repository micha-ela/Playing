let buttons = [];
let img;
let valueX;
let valueY;
let button;
let bw;
let bh;
let answer1;
let quest;
let iter=1;
let sec=0;
let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let counter=1;



function setup () {
canvas = createCanvas (windowWidth*0.96, windowHeight);
canvas.position(0,0);
frameRate(1);
}

function draw (){
    setTimeout(Step1,1);
    // setTimeout(removeElements(),5000);
    setTimeout(Step2,10000);
    setTimeout(Step3,20000);
    setTimeout(Step4,30000);
//    setTimeout(Step5,40000);

}



function keyPressed() {
    // selectAll() returns an array of elements with class donkey.
    // If none are found, it returns an empty array [].
    let quests = selectAll('.questStep1');
    // We can then iterate through the array and hide all the elements.
    for (let i = 0; i < quests.length; i++) {
      quests[i].hide();
    }
  }

function Step1 () {
    removeElements();
    noLoop();
    createQuestStep1() ;
    createButtonsStep1();
    buttons[0].mouseOver(overButton0Step1);
    buttons[0].mouseOut(outButton0Step1);
    buttons[1].mouseOver(overButton1Step1);
    buttons[1].mouseOut(outButton1Step1);
    buttons[2].mouseOver(overButton2Step1);
    buttons[2].mouseOut(outButton2Step1);
    // removeQuestStep1() ;
    }

function Step2 () {
    removeElements();
    noLoop();
    clear();

    createQuestStep2() ;
    createButtonsStep2();
    buttons[0].mouseOver(overButton0Step2);
    buttons[0].mouseOut(outButton0Step2);
    buttons[1].mouseOver(overButton1Step2);
    buttons[1].mouseOut(outButton1Step2);
    buttons[2].mouseOver(overButton2Step2);
    buttons[2].mouseOut(outButton2Step2);
    }

function Step3 () {
    removeElements();
    noLoop();
    clear();

    createQuestStep3() ;
    createButtonsStep3();
    buttons[0].mouseOver(overButton0Step3);
    buttons[0].mouseOut(outButton0Step3);
    buttons[1].mouseOver(overButton1Step3);
    buttons[1].mouseOut(outButton1Step3);
    buttons[2].mouseOver(overButton2Step3);
    buttons[2].mouseOut(outButton2Step3);
    }

function Step4 () {
    removeElements();
    noLoop();
    clear();

    createQuestStep4() ;
    createButtonsStep4();
    buttons[0].mouseOver(overButton0Step4);
    buttons[0].mouseOut(outButton0Step4);
    buttons[1].mouseOver(overButton1Step4);
    buttons[1].mouseOut(outButton1Step4);
    buttons[2].mouseOver(overButton2Step4);
    buttons[2].mouseOut(outButton2Step4);
    }

/*function Step5 () {
    removeElements();
    noLoop();
    clear();

    createQuestStep5() ;
    createButtonsStep5();
    buttons[0].mouseOver(overButton0Step5);
    buttons[0].mouseOut(outButton0Step5);
    buttons[1].mouseOver(overButton1Step5);
    buttons[1].mouseOut(outButton1Step5);
    buttons[2].mouseOver(overButton2Step5);
    buttons[2].mouseOut(outButton2Step5);
  }*/


    function createQuestStep1() {
        // quest1.hide();
        quest1Step1=createP("Do you want to become<br/ > the future model European?");
        quest1Step1.style("top","250px");
        quest1Step1.style("right","600px");
        quest1Step1.style("position","absolute");
        quest1Step1.style("font-size","24px");
        quest1Step1.style("font-family","coordinates");
        quest1Step1.style("font-weight","lighter");
    }

    function createButtonsStep1 () {
        buttons[0] = createButton("Yes");
        buttons[1] = createButton("No");
        buttons[2] = createButton("HAHA");
        buttons[0].position(width*0.7,height*0.15);
        buttons[1].position(width*0.8,height*0.75);
        buttons[2].position(width*0.9,height*0.35);
        // let bw=concat(",1000,px");
        for (let button of buttons) {
        button.style("background-color","#FF1493");
        button.style("min-width","100px");
        button.style("min-height","100px");
        button.style("border-radius","100px");
        button.style("color","#dcdcdc");
        button.style("font-size","20px");
        button.style("font-family","coordinates");
        button.style("border","none");
    }
    }

    function overButton0Step1 () {
        buttons[0].style("background-color","#7FFFD4");
        answer1Step1=createP("Excellent choice.<br/ > Modeling is good for the soul.");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","80px");
        answer1Step1.style("right","90px");
        quest3Step1.remove();
    }

    function outButton0Step1 () {
        clear();
        buttons[0].style("background-color","#FF1493");
        answer1Step1.remove();


    }


    function overButton1Step1 () {
        buttons[1].style("background-color","#7FFFD4");
        answer1Step1=createP("I don't think so either<br/ >You seem hardly fit.");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","600px");
        answer1Step1.style("right","60px");
        quest3Step1.remove();
    }

    function outButton1Step1 () {
        clear();
        buttons[1].style("background-color","#FF1493");
        answer1Step1.remove();


    }


    function overButton2Step1 () {
        buttons[2].style("background-color","#7FFFD4");
        answer1Step1=createP("Really?<br/ > Well, think about it.");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","420px");
        answer1Step1.style("right","50px");
        quest3Step1.remove();
    }
    function outButton2Step1 () {
        clear();
        buttons[2].style("background-color","#FF1493");
        answer1Step1.remove();

  }

////

function createQuestStep2() {
    // quest1.hide();
    quest1Step2=createP("Your face is like a secret code.<br/ > Does it show?");
    quest1Step2.style("top","250px");
    quest1Step2.style("right","600px");
    quest1Step2.style("position","absolute");
    quest1Step2.style("font-size","24px");
    quest1Step2.style("font-family","coordinates");
    quest1Step2.style("font-weight","lighter");

}

function createButtonsStep2 () {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width*0.3,height*0.45);
    buttons[1].position(width*0.4,height*0.75);
    buttons[2].position(width*0.5,height*0.15);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
    button.style("background-color","#ff8000");
    button.style("min-width","100px");
    button.style("min-height","100px");
    button.style("border-radius","100px");
    button.style("color","#dcdcdc");
    button.style("font-size","20px");
    button.style("font-family","coordinates");
    button.style("border","none");
}
}

function overButton0Step2 () {
    buttons[0].style("background-color","#7FFFD4");
    answer1Step2=createP("Excellent choice.<br/ > Exposure is good for the soul.");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","480px");
    answer1Step2.style("left","200px");
    quest3Step2.remove();
}

function outButton0Step2 () {
    clear();
    buttons[0].style("background-color","#ff8000");
    answer1Step2.remove();


}


function overButton1Step2 () {
    buttons[1].style("background-color","#7FFFD4");
    answer1Step2=createP("You reveal more then you think.");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","720px");
    answer1Step2.style("left","250px");
    quest3Step2.remove();
}

function outButton1Step2 () {
    clear();
    buttons[1].style("background-color","#ff8000");
    answer1Step2.remove();


}


function overButton2Step2 () {
    buttons[2].style("background-color","#7FFFD4");
    answer1Step2=createP("Really?<br/ > Are you sure you don't know?");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","120px");
    answer1Step2.style("left","250px");
    quest3Step2.remove();
}

function outButton2Step2 () {
    clear();
    buttons[2].style("background-color","#ff8000");
    answer1Step2.remove();


}
////

function createQuestStep3() {
    // quest1.hide();
    quest1Step3=createP("There is not a thing on earth, created or born, <br/ > that does not reveal its inward form also outwardly. <br/ >Do you want to contribute to the future?");
    quest1Step3.style("top","250px");
    quest1Step3.style("left","600px");
    quest1Step3.style("position","absolute");
    quest1Step3.style("font-size","24px");
    quest1Step3.style("font-family","coordinates");
    quest1Step3.style("font-weight","lighter");

}

function createButtonsStep3 () {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width*0.4,height*0.15);
    buttons[1].position(width*0.5,height*0.65);
    buttons[2].position(width*0.3,height*0.25);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
    button.style("background-color","#8FBC8F");
    button.style("min-width","100px");
    button.style("min-height","100px");
    button.style("border-radius","100px");
    button.style("color","#dcdcdc");
    button.style("font-size","20px");
    button.style("font-family","coordinates");
    button.style("border","none");
}
}

function overButton0Step3 () {
    buttons[0].style("background-color","#7FFFD4");
    answer1Step3=createP("Excellent choice.<br/ >Participation is good for the soul.");
    answer1Step3.style("position","absolute");
    answer1Step3.style("top","100px");
    answer1Step3.style("left","150px");
    quest3Step3.remove();
}

function outButton0Step3 () {
    clear();
    buttons[0].style("background-color","#ff8000");
    answer1Step3.remove();


}


function overButton1Step3 () {
    buttons[1].style("background-color","#7FFFD4");
    answer1Step3=createP("Nah.");
    answer1Step3.style("position","absolute");
    answer1Step3.style("top","720px");
    answer1Step3.style("left","580px");
    quest3Step3.remove();
}

function outButton1Step3 () {
    clear();
    buttons[1].style("background-color","#ff8000");
    answer1Step3.remove();


}


function overButton2Step3 () {
    buttons[2].style("background-color","#7FFFD4");
    answer1Step3=createP("Really?<br/ > Are tou sure you don't want to?");
    answer1Step3.style("position","absolute");
    answer1Step3.style("top","220px");
    answer1Step3.style("left","130px");
    quest3Step3.remove();
}

function outButton2Step3 () {
    clear();
    buttons[2].style("background-color","#ff8000");
    answer1Step3.remove();


}
////

function createQuestStep4() {
    // quest1.hide();
    quest1Step4=createP("Forecasting is about the future, not the present,<br/ >  and the future is something  that has yet to become real.<br/ > How readable are You?");
    quest1Step4.style("top","250px");
    quest1Step4.style("left","600px");
    quest1Step4.style("position","absolute");
    quest1Step4.style("font-size","24px");
    quest1Step4.style("font-family","coordinates");
    quest1Step4.style("font-weight","lighter");

}

function createButtonsStep4 () {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width*0.8,height*0.45);
    buttons[1].position(width*0.7,height*0.15);
    buttons[2].position(width*0.6,height*0.65);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
    button.style("background-color","#FF1493");
    button.style("min-width","100px");
    button.style("min-height","100px");
    button.style("border-radius","100px");
    button.style("color","#dcdcdc");
    button.style("font-size","20px");
    button.style("font-family","coordinates");
    button.style("border","none");
}
}

function overButton0Step4 () {
    buttons[0].style("background-color","#7FFFD4");
    answer1Step4=createP("Excellent choice.<br/ > Transparency is good for the soul.");
    answer1Step4.style("position","absolute");
    answer1Step4.style("top","550px");
    answer1Step4.style("right","50px");
    quest3Step4.remove();
}

function outButton0Step4 () {
    clear();
    buttons[0].style("background-color","#ff8000");
    answer1Step4.remove();


}


function overButton1Step4 () {
    buttons[1].style("background-color","#7FFFD4");
    answer1Step4=createP("So, you think you are special, huh?");
    answer1Step4.style("position","absolute");
    answer1Step4.style("top","80px");
    answer1Step4.style("right","50px");
    quest3Step4.remove();
}

function outButton1Step4 () {
    clear();
    buttons[1].style("background-color","#ff8000");
    answer1Step4.remove();


}


function overButton2Step4 () {
    buttons[2].style("background-color","#7FFFD4");
    answer1Step4=createP("Really?<br/ > Are you sure you're not?");
    answer1Step4.style("position","absolute");
    answer1Step4.style("top","720px");
    answer1Step4.style("right","350px");
    quest3Step4.remove();
}

function outButton2Step4 () {
    clear();
    buttons[2].style("background-color","#ff8000");
    answer1Step4.remove();


}

////
/*
function createQuestStep5() {
    // quest1.hide();
    quest1Step5=createP("We make forecasts about people<br/ > just as we make forecasts about the weather.<br/ > We make it real!");
    quest1Step5.style("top","250px");
    quest1Step5.style("left","600px");
    quest1Step5.style("position","absolute");
    quest1Step5.style("font-size","24px");
    quest1Step5.style("font-family","coordinates");
    quest1Step5.style("font-weight","lighter");

}

function createButtonsStep5 () {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width*0.3,height*0.15);
    buttons[1].position(width*0.4,height*0.5);
    buttons[2].position(width*0.5,height*0.45);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
    button.style("background-color",#FFD700");
    button.style("min-width","100px");
    button.style("min-height","100px");
    button.style("border-radius","100px");
    button.style("color","#dcdcdc");
    button.style("font-size","20px");
    button.style("font-family","coordinates");
    button.style("border","none");
}
}

function overButton0Step5 () {
    buttons[0].style("background-color","#7FFFD4");
    answer1Step5=createP("Excellent choice.<br/ >  Ideology is good for the soul.");
    answer1Step5.style("position","absolute");
    answer1Step5.style("top","220px");
    answer1Step5.style("right","50px");
    quest3Step5.remove();
}

function outButton0Step5 () {
    clear();
    buttons[0].style("background-color","#ff8000");
    answer1Step5.remove();


}


function overButton1Step5 () {
    buttons[1].style("background-color","#7FFFD4");
    answer1Step5=createP("We do.");
    answer1Step5.style("position","absolute");
    answer1Step5.style("top","220px");
    answer1Step5.style("right","50px");
    quest3Step5.remove();
}

function outButton1Step5 () {
    clear();
    buttons[1].style("background-color","#ff8000");
    answer1Step5.remove();


}


function overButton2Step5 () {
    buttons[2].style("background-color","#7FFFD4");
    answer1Step5=createP("Really! We do!");
    answer1Step5.style("position","absolute");
    answer1Step5.style("top","220px");
    answer1Step5.style("right","50px");
    quest3Step5.remove();
}

function outButton2Step5 () {
    clear();
    buttons[2].style("background-color","#ff8000");
    answer1Step5.remove();


}*/

////
