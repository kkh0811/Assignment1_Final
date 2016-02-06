// Two_one SCENE
module scenes {
    export class ThreeThree extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _threeThreeImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        private _fourFiveButton: objects.Button;
        private _fourSixButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._threeThreeImage = new createjs.Bitmap("../../Assets/images/3-3.jpg");
            this.addChild(this._threeThreeImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourFiveButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourFiveButton);
            
            // LEFT_CAVE Button event listener
            this._fourFiveButton.on("click", this._fourFiveButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourSixButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourSixButton);
            
            // LEFT_CAVE Button event listener
            this._fourSixButton.on("click", this._fourSixButtonClick, this);

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
        private _fourFiveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Five;
            changeScene();
        }
        
        // Right_CAVE Button click event handler
        private _fourSixButtonClick(event: createjs.MouseEvent) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Six;
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