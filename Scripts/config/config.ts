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
module config {

    // Scene Constants
    export class Scene { 
        public static INTRO: number = 0; // I declared 15 objects for 15 senes
        public static Two_One: number = 1;
        public static Two_Two: number = 2;
        public static Three_One: number = 3;
        public static Three_Two: number = 4;
        public static Three_Three: number = 5;
        public static Three_Four: number = 6;
        public static Four_One: number = 7;
        public static Four_Two: number = 8;
        public static Four_Three: number = 9;
        public static Four_Four: number = 10;
        public static Four_Five: number = 11;
        public static Four_Six: number = 12;
        public static Four_Seven: number = 13;
        public static Four_Eight: number = 14;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}