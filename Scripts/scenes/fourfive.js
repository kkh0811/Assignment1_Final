var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var FourFive = (function (_super) {
        __extends(FourFive, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FourFive() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FourFive.prototype.start = function () {
            // add LeftCave Image
            this._fourFiveImage = new createjs.Bitmap("../../Assets/images/4-5.jpg");
            this.addChild(this._fourFiveImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 190);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        FourFive.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        FourFive.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return FourFive;
    })(objects.Scene);
    scenes.FourFive = FourFive;
})(scenes || (scenes = {}));
//# sourceMappingURL=fourfive.js.map