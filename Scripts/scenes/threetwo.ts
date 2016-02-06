// Two_one SCENE
module scenes {
    export class ThreeTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _threeTwoImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        private _fourThreeButton: objects.Button;
        private _fourFourButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._threeTwoImage = new createjs.Bitmap("../../Assets/images/3-2.jpg");
            this.addChild(this._threeTwoImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourThreeButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourThreeButton);
            
            // LEFT_CAVE Button event listener
            this._fourThreeButton.on("click", this._fourThreeButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourFourButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourFourButton);
            
            // LEFT_CAVE Button event listener
            this._fourFourButton.on("click", this._fourFourButtonnClick, this);

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
        private _fourThreeButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Three;
            changeScene();
        }
        
        // Right_CAVE Button click event handler
        private _fourFourButtonnClick(event: createjs.MouseEvent) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Four;
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