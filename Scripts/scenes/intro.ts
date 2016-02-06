// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap; // assign Image variable 
        private _twoOneButton: objects.Button; // assign variable for button and derived from super class
        private _twotwoButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/1-1.jpg"); //get the path for picture.
            this.addChild(this._introImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._twoOneButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._twoOneButton);
            
            // LEFT_CAVE Button event listener
            this._twoOneButton.on("click", this._twoOneButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._twotwoButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._twotwoButton);
            
            // LEFT_CAVE Button event listener
            this._twotwoButton.on("click", this._twotwoButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _twoOneButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Two_One;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _twotwoButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Two_Two;
            changeScene();
        }
    }
}