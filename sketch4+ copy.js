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
let dataviz = 0;
let sec = 0;
let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let counter = 1;

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
    Step3();
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

function Step3 () {
    // removeElements();
    clear();
    loop();
    // frameRate(1);
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

//////

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
    sound_atlas03.play();
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
    answer1Step2.style("top", "40px");
    answer1Step2.style("right", "90px");
    quest3Step2.remove();
}

function outButton0Step2() {
    clear();
    buttons[0].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans0Step2() {
    
    background(img_beeld13);

}


function overButton1Step2() {
    sound_atlas03.play();
    buttons[1].style("background-color", "#7FFFD4");
    answer1Step2 = createP("I don't think so either</br>You seem hardly fit.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "500px");
    answer1Step2.style("right", "60px");
    quest3Step2.remove();
}

function outButton1Step2() {
    clear();
    buttons[1].style("background-color", "#FF1493");
    answer1Step2.remove();


}
function overButtonTrans1Step2() {
    
    background(img_beeld22);
}




function overButton2Step2() {
    sound_atlas03.play();
    buttons[2].style("background-color", "#7FFFD4");
    answer1Step2 = createP("Really?</br>Well, think about it.");
    answer1Step2.style("position", "absolute");
    answer1Step2.style("top", "380px");
    answer1Step2.style("right", "50px");
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
    dataviz=1;
    Step3();
}

function clickButton1Step2 () {
    sound_atlas01.play();
    answers[0]=1;
    dataviz=1;
    Step3();
}

function clickButton2Step2 () {
    sound_atlas01.play();
    answers[0]=2;
    dataviz=1;
    Step3();
}




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
        let G=10;
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
    // loop();
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


    function MoversToCluster2 () {
        frameRate(5);
        for (let mover of movers2) {
            mover.clusterInit();
            }
        for (let mover of movers2) {
            mover.update();
            mover.show();
            if (mover.cluster==1){
                attractors[0].attract(mover);
                }
            if (mover.cluster==2){
                attractors[1].attract(mover);
                }
        }
    }

    function MoversMorphToCluster2() {
        AveFeatCluster();
        for (let mover of movers2) {
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
    }
    }