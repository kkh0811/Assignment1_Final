/*
 *******************************************************************************
 * Source file name : config.ts                                                *
 * Author's name : Giho Kim (300738697)                                        *
 * Last Modified by : Giho Kim                                                 *
 * Last Modified date : Febuary 05, 2016                                       *
 * Program description : The game is to escape from the prison.                *
 *                     John is currently locked from the enermy and there are  *
 *                     a lot of way to survive it !!! But, Only one outcome    *
 *                     should be positive.. So choose the best way!            *
 * Revision History : 1.2                                                      *
 *******************************************************************************
*/
var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0; // I declared 15 objects for 15 senes
        Scene.Two_One = 1;
        Scene.Two_Two = 2;
        Scene.Three_One = 3;
        Scene.Three_Two = 4;
        Scene.Three_Three = 5;
        Scene.Three_Four = 6;
        Scene.Four_One = 7;
        Scene.Four_Two = 8;
        Scene.Four_Three = 9;
        Scene.Four_Four = 10;
        Scene.Four_Five = 11;
        Scene.Four_Six = 12;
        Scene.Four_Seven = 13;
        Scene.Four_Eight = 14;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map