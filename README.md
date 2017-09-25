**Author**: DK

**Version**: Public 0.98 **Beta**
 
**Description**: Library for RPG Maker MV
 
**Dependencies**: RPG Maker MV 1.5+ and lodash.js

**Installation**:
1. Copy lodash.js to the js/libs/ of your project
2. Copy DKTools.js to the js/plugins/ of your project
3. Enable DKTools in the plugin manager
4. Add at least one game language in the parameters of the DKTools

**Warning:** May contain bugs in some elements
 
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
1. DKTools.Utils
2. DKTools.Utils.String
3. DKTools.Utils.Array
4. DKTools.Utils.Bitmap
5. DKTools.Utils.Point
6. DKTools.Utils.Rectangle
7. DKTools.Utils.Random
8. DKTools.Utils.Sequence
9. DKTools.Utils.Sequence.Alphabet
10. DKTools.ParameterManager
11. DKTools.FileManager
12. DKTools.Localization
13. DKTools.PluginManager
14. DKTools.Audio
15. DKTools.Event
16. DKTools.Animation
17. DKTools.Animation.Action
18. DKTools.Base
19. DKTools.Sprite
20. DKTools.Sprite.Button
21. DKTools.Sprite.Cursor
22. DKTools.Sprite.Arrow
23. DKTools.Sprite.Selectable
24. DKTools.Sprite.Tab
25. DKTools.Viewport
26. DKTools.Layout
27. DKTools.Window
28. DKTools.Window.Selectable
29. DKTools.Window.Tab
30. DKTools.Scene
 
## **3 main reasons for use DKTools:**
1. Not need to waste time for creating a special sprites or windows
2. Large number of element parameters and all parameters have default values
3. Many different functions in each element
