// Two_one SCENE
module scenes {
    export class ThreeFour extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _threeFourImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        private _fourSevenButton: objects.Button;
        private _fourEightButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._threeFourImage = new createjs.Bitmap("../../Assets/images/3-4.jpg");
            this.addChild(this._threeFourImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourSevenButton = new objects.Button(
                "YesButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourSevenButton);
            
            // LEFT_CAVE Button event listener
            this._fourSevenButton.on("click", this._fourSevenButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._fourEightButton = new objects.Button(
                "NoButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 145);
            this.addChild(this._fourEightButton);
            
            // LEFT_CAVE Button event listener
            this._fourEightButton.on("click", this._fourEightButtonClick, this);

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
        private _fourSevenButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Seven;
            changeScene();
        }
        
        // Right_CAVE Button click event handler
        private _fourEightButtonClick(event: createjs.MouseEvent) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Eight;
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