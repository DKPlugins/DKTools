**Author**: DK

**Version**: Public 0.96 **Beta**
 
**Description**: API. Contains elements for creating plugins.
 
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
1. DKTools.Sprite - Based on standard Sprite. Base class for other elements. Contain all required functions.
2. DKTools.Viewport - 
3. DKTools.Layout - Stores and processes the elements.
4. DKTools.Window - Based on standard Window_Base. Base class for other elements. Contain all required functions.
5. DKTools.Scene -

**Warning:** not all elements are ready
 
## **3 main reasons for use DKTools:**
1. No need to waste time creating special sprites or windows
2. Large number of element parameters and all parameters have default values
3. Many different functions in each element
 
# **FAQ**
**Q: What is "DKTools.Sprite" ?**

**A:** This is a class, which contain a standard Sprite functions, Sprite_Button functions and many new functions. The most significant features are: avoid errors when changing parameters, event support, new features for click and mouse (long press, mouse enter/stay on element and mouse leave from element.


**Q: Сurrently DKTools has incomplete documentation and only in Russian. Will the English documentation ?**

**A:** Yes, of course. Currently the documentation is not a primary task, but I try to make time for it. I use JSDoc documentation.
