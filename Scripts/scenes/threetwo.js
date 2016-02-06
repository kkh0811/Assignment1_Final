var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var ThreeTwo = (function (_super) {
        __extends(ThreeTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ThreeTwo() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ThreeTwo.prototype.start = function () {
            // add LeftCave Image
            this._threeTwoImage = new createjs.Bitmap("../../Assets/images/3-2.jpg");
            this.addChild(this._threeTwoImage);
            // add the LEFT_CAVE button to the MENU scene
            this._fourThreeButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourThreeButton);
            // LEFT_CAVE Button event listener
            this._fourThreeButton.on("click", this._fourThreeButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._fourFourButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourFourButton);
            // LEFT_CAVE Button event listener
            this._fourFourButton.on("click", this._fourFourButtonnClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        ThreeTwo.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        ThreeTwo.prototype._fourThreeButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Three;
            changeScene();
        };
        // Right_CAVE Button click event handler
        ThreeTwo.prototype._fourFourButtonnClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Four;
            changeScene();
        };
        // START_OVER Button click event handler
        ThreeTwo.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return ThreeTwo;
    })(objects.Scene);
    scenes.ThreeTwo = ThreeTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=threetwo.js.map