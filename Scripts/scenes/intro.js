var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/1-1.jpg"); //get the path for picture.
            this.addChild(this._introImage);
            // add the LEFT_CAVE button to the MENU scene
            this._twoOneButton = new objects.Button("YesButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._twoOneButton);
            // LEFT_CAVE Button event listener
            this._twoOneButton.on("click", this._twoOneButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._twotwoButton = new objects.Button("NoButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._twotwoButton);
            // LEFT_CAVE Button event listener
            this._twotwoButton.on("click", this._twotwoButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Intro.prototype._twoOneButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Two_One;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Intro.prototype._twotwoButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.Two_Two;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map