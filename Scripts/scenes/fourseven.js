var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Two_one SCENE
var scenes;
(function (scenes) {
    var FourSeven = (function (_super) {
        __extends(FourSeven, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FourSeven() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FourSeven.prototype.start = function () {
            // add LeftCave Image
            this._fourSevenImage = new createjs.Bitmap("../../Assets/images/4-7.jpg");
            this.addChild(this._fourSevenImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("start-over-button", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 190);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        FourSeven.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        FourSeven.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return FourSeven;
    })(objects.Scene);
    scenes.FourSeven = FourSeven;
})(scenes || (scenes = {}));
//# sourceMappingURL=fourseven.js.map