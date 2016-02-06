// Two_one SCENE
module scenes {
    export class ThreeOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _threeOneImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        private _fourOneButton: objects.Button;
        private _fourTwoButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._threeOneImage = new createjs.Bitmap("../../Assets/images/3-1.jpg");
            this.addChild(this._threeOneImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourOneButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourOneButton);
            
            // LEFT_CAVE Button event listener
            this._fourOneButton.on("click", this._fourOneButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourTwoButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourTwoButton);
            
            // LEFT_CAVE Button event listener
            this._fourTwoButton.on("click", this._fourTwoButtonClick, this);

            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "start-over-button",
                config.Screen.CENTER_X + 30,
                config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _fourOneButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_One;
            changeScene();
        }
        
        // Right_CAVE Button click event handler
        private _fourTwoButtonClick(event: createjs.MouseEvent) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Two;
            changeScene();
        }
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}