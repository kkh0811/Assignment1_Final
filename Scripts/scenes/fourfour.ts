// Two_one SCENE
module scenes {
    export class FourFour extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fourFourImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._fourFourImage = new createjs.Bitmap("../../Assets/images/4-4.jpg");
            this.addChild(this._fourFourImage);
            

            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "start-over-button",
                config.Screen.CENTER_X + 30,
                config.Screen.CENTER_Y + 190);
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
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}