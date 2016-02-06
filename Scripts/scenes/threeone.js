var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var ThreeOne = (function (_super) {
        __extends(ThreeOne, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ThreeOne() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ThreeOne.prototype.start = function () {
            // add LeftCave Image
            this._threeOneImage = new createjs.Bitmap("../../Assets/images/3-1.jpg");
            this.addChild(this._threeOneImage);
            // add the LEFT_CAVE button to the MENU scene
            this._fourOneButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourOneButton);
            // LEFT_CAVE Button event listener
            this._fourOneButton.on("click", this._fourOneButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._fourTwoButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourTwoButton);
            // LEFT_CAVE Button event listener
            this._fourTwoButton.on("click", this._fourTwoButtonClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        ThreeOne.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        ThreeOne.prototype._fourOneButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_One;
            changeScene();
        };
        // Right_CAVE Button click event handler
        ThreeOne.prototype._fourTwoButtonClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Two;
            changeScene();
        };
        // START_OVER Button click event handler
        ThreeOne.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return ThreeOne;
    })(objects.Scene);
    scenes.ThreeOne = ThreeOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=threeone.js.map