/// <reference path = "_reference.ts" />

/*
 *******************************************************************************
 * Source file name : game.ts                                                  *
 * Author's name : Giho Kim (300738697)                                        *
 * Last Modified by : Giho Kim                                                 *
 * Last Modified date : Febuary 05, 2016                                       *
 * Program description : The game is to escape from the prison.                *
 *                     John is currently locked from the enermy and there are  *
 *                     a lot of way to survive it !!! But, Only one outcome    *
 *                     should be positive.. So choose the best way!            *
 * Revision History : 1.2                                                      *
 *******************************************************************************
*/

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro; // assign scenes class into object.
var two_one: scenes.TwoOne;
var two_two: scenes.TwoTwo;
var three_one: scenes.ThreeOne;
var three_two: scenes.ThreeTwo;
var three_three: scenes.ThreeThree;
var three_four: scenes.ThreeFour;
var four_one: scenes.FourOne;
var four_two: scenes.FourTwo;
var four_three: scenes.FourThree;
var four_four: scenes.FourFour;
var four_five: scenes.FourFive;
var four_six: scenes.FourSix;
var four_seven: scenes.FourSeven;
var four_eight: scenes.FourEight;

// Music 
var background_Music; // declare varables for music
var effect_sound2_1;
var effect_sound2_2;
var effect_sound3_1;
var effect_sound3_2;
var effect_sound3_3;
var effect_sound3_4;
var effect_sound4_1;
var effect_sound4_2;
var effect_sound4_3;
var effect_sound4_4;
var effect_sound4_7;
var effect_sound4_8;

//var leftCave: scenes.LeftCave;
//var rightCave: scenes.RightCave;

function init(): void {
    //Assign music into object.
    background_Music = new Audio('../../Assets/sounds/Background.mp3'); // get the music path from the folder and assign into the variable
    background_Music.volume = 1;
    background_Music.play();
    
    effect_sound2_1 = new Audio('../../Assets/sounds/2-1.mp3');
    effect_sound2_1.volume = 1;

    effect_sound2_2 = new Audio('../../Assets/sounds/2-2.mp3');
    effect_sound2_2.volume = 1;

    effect_sound3_1 = new Audio('../../Assets/sounds/3-1.mp3');
    effect_sound3_1.volume = 1;

    effect_sound3_2 = new Audio('../../Assets/sounds/3-2.mp3');
    effect_sound3_2.volume = 1;

    effect_sound3_3 = new Audio('../../Assets/sounds/3-3.mp3');
    effect_sound3_3.volume = 1;

    effect_sound3_1 = new Audio('../../Assets/sounds/3-4.mp3');
    effect_sound3_1.volume = 1;

    effect_sound4_1 = new Audio('../../Assets/sounds/4-1.mp3');
    effect_sound4_1.volume = 1;

    effect_sound4_2 = new Audio('../../Assets/sounds/4-2.mp3');
    effect_sound4_2.volume = 1;

    effect_sound4_3 = new Audio('../../Assets/sounds/4-3.mp3');
    effect_sound4_3.volume = 1;

    effect_sound4_4 = new Audio('../../Assets/sounds/4-4.mp3');
    effect_sound4_4.volume = 1;

    effect_sound4_7 = new Audio('../../Assets/sounds/4-7.mp3');
    effect_sound4_7.volume = 1;

    effect_sound4_8 = new Audio('../../Assets/sounds/4-8.mp3');
    effect_sound4_8.volume = 1;

    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {                        //If value is Intro, 2-1, 2-2,,,etc , the scene should be change ( Condition )
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            background_Music.play(); // for playing music
            break;
        case config.Scene.Two_One:
            // show the PLAY scene
            stage.removeAllChildren();
            two_one = new scenes.TwoOne();
            currentScene = two_one;
            console.log("Starting Two_One Scene");
            effect_sound2_1.play();
            break;
        case config.Scene.Two_Two:
            // show the PLAY scene
            stage.removeAllChildren();
            two_two = new scenes.TwoTwo();
            currentScene = two_two;
            console.log("Starting Two_Two Scene");
            effect_sound2_2.play();
            break;
         case config.Scene.Three_One:
             // show the PLAY scene
             stage.removeAllChildren();
             three_one = new scenes.ThreeOne();
             currentScene = three_one;
             console.log("Starting Three_One Scene");
             effect_sound3_1.play();
             break;
         case config.Scene.Three_Two:
             // show the PLAY scene
             stage.removeAllChildren();
             three_two = new scenes.ThreeTwo();
             currentScene = three_two;
             console.log("Starting Three_Two Scene");
             effect_sound3_2.play();
             break;
        case config.Scene.Three_Three:
             // show the PLAY scene
             stage.removeAllChildren();
             three_three = new scenes.ThreeThree();
             currentScene = three_three;
             console.log("Starting Three_Three Scene");
             effect_sound3_3.play();
             break;
        case config.Scene.Three_Four:
             // show the PLAY scene
             stage.removeAllChildren();
             three_four = new scenes.ThreeFour();
             currentScene = three_four;
             console.log("Starting Three_Four Scene");
             effect_sound3_4.play();
             break;
        case config.Scene.Four_One:
             // show the game OVER scene
             stage.removeAllChildren();
             four_one = new scenes.FourOne();
             currentScene = four_one;
             console.log("Starting Four_One Scene");
             effect_sound4_1.play();
             break;
        case config.Scene.Four_Two:
             // show the game OVER scene
             stage.removeAllChildren();
             four_two = new scenes.FourTwo();
             currentScene = four_two;
             console.log("Starting Four_Two Scene");
             effect_sound4_2.play();
             break;
        case config.Scene.Four_Three:
             // show the game OVER scene
             stage.removeAllChildren();
             four_three = new scenes.FourThree();
             currentScene = four_three;
             console.log("Starting Four_Three Scene");
             effect_sound4_3.play();
             break;
        case config.Scene.Four_Four:
             // show the game OVER scene
             stage.removeAllChildren();
             four_four = new scenes.FourFour();
             currentScene = four_four;
             console.log("Starting Four_Four Scene");
             effect_sound4_4.play();
             break;
        case config.Scene.Four_Five:
             // show the game OVER scene
             stage.removeAllChildren();
             four_five = new scenes.FourFive();
             currentScene = four_five;
             console.log("Starting Four_Five Scene");
             effect_sound4_4.play();
             break;
        case config.Scene.Four_Six:
             // show the game OVER scene
             stage.removeAllChildren();
             four_six = new scenes.FourSix();
             currentScene = four_six;
             console.log("Starting Four_Six Scene");
             effect_sound4_4.play();
             break;
        case config.Scene.Four_Seven:
             // show the game OVER scene
             stage.removeAllChildren();
             four_seven = new scenes.FourSeven();
             currentScene = four_seven;
             console.log("Starting Four_Seven Scene");
             effect_sound4_7.play();
             break;
        case config.Scene.Four_Eight:
             // show the game Win scene
             stage.removeAllChildren();
             four_eight = new scenes.FourEight();
             currentScene = four_eight;
             console.log("Starting Four_Eight Scene");
             effect_sound4_8.play();
             break;
    }

    console.log(currentScene.numChildren);
}