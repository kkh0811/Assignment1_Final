var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var ThreeThree = (function (_super) {
        __extends(ThreeThree, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ThreeThree() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ThreeThree.prototype.start = function () {
            // add LeftCave Image
            this._threeThreeImage = new createjs.Bitmap("../../Assets/images/3-3.jpg");
            this.addChild(this._threeThreeImage);
            // add the LEFT_CAVE button to the MENU scene
            this._fourFiveButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourFiveButton);
            // LEFT_CAVE Button event listener
            this._fourFiveButton.on("click", this._fourFiveButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._fourSixButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._fourSixButton);
            // LEFT_CAVE Button event listener
            this._fourSixButton.on("click", this._fourSixButtonClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        ThreeThree.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        ThreeThree.prototype._fourFiveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Four_Five;
            changeScene();
        };
        // Right_CAVE Button click event handler
        ThreeThree.prototype._fourSixButtonClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Four_Six;
            changeScene();
        };
        // START_OVER Button click event handler
        ThreeThree.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return ThreeThree;
    })(objects.Scene);
    scenes.ThreeThree = ThreeThree;
})(scenes || (scenes = {}));
//# sourceMappingURL=threethree.js.map