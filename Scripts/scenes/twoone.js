var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var TwoOne = (function (_super) {
        __extends(TwoOne, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function TwoOne() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        TwoOne.prototype.start = function () {
            // add LeftCave Image
            this._twoOneImage = new createjs.Bitmap("../../Assets/images/2-1.jpg");
            this.addChild(this._twoOneImage);
            // add the LEFT_CAVE button to the MENU scene
            this._threeOneButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._threeOneButton);
            // LEFT_CAVE Button event listener
            this._threeOneButton.on("click", this._threeOneButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._threeTwoButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._threeTwoButton);
            // LEFT_CAVE Button event listener
            this._threeTwoButton.on("click", this._threeTwoButtonClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        TwoOne.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        TwoOne.prototype._threeOneButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Three_One;
            changeScene();
        };
        // Right_CAVE Button click event handler
        TwoOne.prototype._threeTwoButtonClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Three_Two;
            changeScene();
        };
        // START_OVER Button click event handler
        TwoOne.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return TwoOne;
    })(objects.Scene);
    scenes.TwoOne = TwoOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=twoone.js.map