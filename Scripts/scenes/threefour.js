var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var ThreeFour = (function (_super) {
        __extends(ThreeFour, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ThreeFour() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ThreeFour.prototype.start = function () {
            // add LeftCave Image
            this._threeFourImage = new createjs.Bitmap("../../Assets/images/3-4.jpg");
            this.addChild(this._threeFourImage);
            // add the LEFT_CAVE button to the MENU scene
            this._fourSevenButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourSevenButton);
            // LEFT_CAVE Button event listener
            this._fourSevenButton.on("click", this._fourSevenButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._fourEightButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourEightButton);
            // LEFT_CAVE Button event listener
            this._fourEightButton.on("click", this._fourEightButtonClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        ThreeFour.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        ThreeFour.prototype._fourSevenButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Seven;
            changeScene();
        };
        // Right_CAVE Button click event handler
        ThreeFour.prototype._fourEightButtonClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Eight;
            changeScene();
        };
        // START_OVER Button click event handler
        ThreeFour.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return ThreeFour;
    })(objects.Scene);
    scenes.ThreeFour = ThreeFour;
})(scenes || (scenes = {}));
//# sourceMappingURL=threefour.js.map