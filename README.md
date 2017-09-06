**Author**: DK

**Version**: Public 0.98 **Beta**
 
**Description**: API. Contains elements for creating plugins.
 
**Dependencies**: RPG Maker MV 1.5+ and lodash.js

**Installation**:
1. Copy lodash.js to the js/libs/ of your project
2. Copy DKTools.js to the js/plugins/ of your project
3. Enable DKTools in the plugin manager
4. Add at least one game language in the parameters of the DKTools

**Warning:** May contain bugs in some elements
 
## **4 steps to use DKTools**
1. Create Element
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
7. DKTools.ParameterManager
8. DKTools.FileManager
9. DKTools.Localization
10. DKTools.PluginManager
11. DKTools.Audio
12. DKTools.Event
13. DKTools.Animation
14. DKTools.Animation.Action
15. DKTools.Base
16. DKTools.Sprite
17. DKTools.Sprite.Button
18. DKTools.Sprite.Cursor
19. DKTools.Sprite.Selectable
20. DKTools.Sprite.Command
21. DKTools.Sprite.Tab
22. DKTools.Viewport
23. DKTools.Layout
24. DKTools.Window
25. DKTools.Window.Selectable
26. DKTools.Window.Tab
27. DKTools.Scene

**Warning:** not all elements are ready
 
## **3 main reasons for use DKTools:**
1. Not need to waste time for creating a special sprites or windows
2. Large number of element parameters and all parameters have default values
3. Many different functions in each element
