var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var TwoTwo = (function (_super) {
        __extends(TwoTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function TwoTwo() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        TwoTwo.prototype.start = function () {
            // add LeftCave Image
            this._twoTwoImage = new createjs.Bitmap("../Assets/images/2-2.jpg");
            this.addChild(this._twoTwoImage);
            // add the LEFT_CAVE button to the MENU scene
            this._threeThreeButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._threeThreeButton);
            // LEFT_CAVE Button event listener
            this._threeThreeButton.on("click", this._threeThreeButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._threeFourButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 145);
            this.addChild(this._threeFourButton);
            // LEFT_CAVE Button event listener
            this._threeFourButton.on("click", this._threeFourButtonClick, this);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 215);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        TwoTwo.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        TwoTwo.prototype._threeThreeButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Three_Three;
            changeScene();
        };
        // Right_CAVE Button click event handler
        TwoTwo.prototype._threeFourButtonClick = function (event) {
            // Switch to the Right_Cave Scene
            scene = config.Scene.Three_Four;
            changeScene();
        };
        // START_OVER Button click event handler
        TwoTwo.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return TwoTwo;
    })(objects.Scene);
    scenes.TwoTwo = TwoTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=twotwo.js.map