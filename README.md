**Author**: DK

**Version**: Public 1.0
 
**Description**: Library for RPG Maker MV. Contains many tools for developing.
 
**Dependencies**: RPG Maker MV 1.5+ and lodash.js

**Installation**:
1. Copy lodash.js to the js/libs/ of your project
2. Copy DKTools.js to the js/plugins/ of your project
3. Enable DKTools in the plugin manager
4. Add at least one game language in the parameters of the DKTools
 
## **4 steps to use DKTools**
1. Create element

Create element from DKTools through "new" operator, like: var object = new DKTools.Sprite(x, y, width);
 
2. Set parameters through "setup" functions

Each element contain "setup" functions, which set the parameters. All functions have default parameters.
 
3. Start element

Call start function of element.
 
4. Add element to your scene

Use "addChild" function for add element to your scene.
 
## **List of elements:**
DKTools.Utils

DKTools.Utils.String

DKTools.Utils.Array

DKTools.Utils.Bitmap

DKTools.Utils.Point

DKTools.Utils.Rectangle

DKTools.Utils.Random

DKTools.Utils.Sequence

DKTools.Utils.Sequence.Alphabet

DKTools.ParameterManager

DKTools.PluginManager

DKTools.IO

DKTools.IO.Entity

DKTools.IO.File

DKTools.IO.Directory

DKTools.IO.WebStorage

DKTools.Localization

DKTools.Audio

DKTools.Event

DKTools.Animation

DKTools.Animation.Action

DKTools.Base

DKTools.Sprite

DKTools.Sprite.Button

DKTools.Sprite.Cursor

DKTools.Sprite.Arrow

DKTools.Sprite.Selectable

DKTools.Sprite.ProgressBar

DKTools.Sprite.ProgressBar.Rectangle

DKTools.Sprite.ProgressBar.Circle

DKTools.Sprite.ProgressBar.SemiCircle

DKTools.Sprite.CheckBox

DKTools.Viewport

DKTools.Layout

DKTools.Window

DKTools.Window.Selectable

DKTools.Scene
 
## **3 main reasons for use DKTools:**
1. Not need to waste time for creating a special sprites or windows
2. Large number of element parameters and all parameters have default values
3. Many different functions in each element
