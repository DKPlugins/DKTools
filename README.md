**Author**: DK

**Version**: Public 0.92 **Beta**
 
**Description**: API. Contains elements for creating plugins.
 
**Warning:** May contain bugs in some elements
 
## **4 steps to use DKTools**
1. Create Element
Create element from DKTools through "new" operator, like: var object = new DKTools_Sprite(x, y, width);
 
2. Set parameters through "setup" functions
Each element contain "setup" functions, who set the parameters. All functions have default parameters.
 
3. Start element
Call start function of element.
 
4. Add element to your scene
Use "addChild" function for add element to your scene.
 
## **List of elements:**
1. DKTools_Sprite - Based on standard Sprite. Base class for other elements. Contain all required functions.
2. DKTools_Text - Element for drawing text.
3. DKTools_Container_Base - Stores and processes the elements.
4. DKTools_Text_Container - Based on DKTools_Container_Base. Stores and processes the elements. First element - DKTools_Text.
5. DKTools_Container - Based on DKTools_Text_Container. Stores and processes only two elements. First element - DKTools_Text.
6. DKTools_Progress_Bar_Base - Progress bar.
7. DKTools_Progress_Bar - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_Progress_Bar_Base.
8. DKTools_Input_Base - Element for input text from keyboard
9. DKTools_Input - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_Input_Base.
10. DKTools_CheckBox_Base - CheckBox.
11. DKTools_CheckBox - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_CheckBox_Base.
12. DKTools_Radio_Button_Base - Based on DKTools_Container_Base. Contains DKTools_CheckBox elements as buttons.
13. DKTools_Radio_Button - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_Radio_Button_Base.
14. DKTools_Clicker_Base - Simple "clicker". Сycles through the images by clicking on the sprite.
15. DKTools_Clicker - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_Clicker_Base.
16. DKTools_ColorPicker_Base - ColorPicker.
17. DKTools_ColorPicker - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_ColorPicker_Base.
18. DKTools_Slider_Base - Slider.
19. DKTools_Slider - Based on DKTools_Container. First element - DKTools_Text. Second - DKTools_Slider_Base.
20. DKTools_Window_Base - Based on standard Window_Base. Base class for other elements. Contain all required functions.
21. DKTools_Window_Selectable - Based on DKTools_Window_Base. Base class for windows with the commands.
22. DKTools_Window_Command - Based on DKTools_Window_Selectable. Window with the commands.

**Warning:** not all elements are ready
 
## **3 main reasons for use DKTools:**
1. No need to waste time creating special sprites or windows
2. Large number of element parameters and all parameters have default values
3. Many different functions in each element
 
# **FAQ**
**Q: What is "DKTools_Sprite" ?**

**A:** This is a class, who contain standard Sprite functions, Sprite_Button functions and many new functions. The most significant features are: avoid errors when changing parameters, event support, new features for click and mouse (long press, mouse enter/stay on element and mouse leave from element.
 
 
**Q: What is "Event support" ?**

**A:** I developed special class "DKToolsEvent", that handles a variety of activities that take place with the elements.
 
 
**Q: What types of activities can take place with the elements?**

**A:** Base class "DKTools_Sprite" includes the following types of events:

1. wait - events that caused each time an element is updated (blocking update events)
2. update - events  that caused each time an element is updated
3. start - events, which are caused when calling the function start element
4. ready - events, which are caused when element is ready (images loaded)
5. free - events, which are caused when element is ready and element have not the wait events
6. activate - events, which are caused when calling the activation function of the element
7. deactivate - events, which are caused when calling the deactivation function of the element
8. mouseEnter - events that are called when you hover over the element (triggered once)
9. mouseStay - similar to the previous type, but triggered every frame until the mouse is stay on element
10. mouseLeave - events that are called when the mouse leaves an element (triggered once)
11. click - events that are called when a user clicks on an element (a simple click)
12. longPress - event that are called when the user clicks long press on element
13. wheelX - event that are called when the user scrolls the mouse wheel on the X axis
14. wheelY - event that are called when the user scrolls the mouse wheel on the Y axis

Other elements have different events.


**Q: Сurrently DKTools has incomplete documentation and only in Russian. Will the English documentation ?**

**A:** Yes, of course. Currently the documentation is not a primary task, but I try to make time for it. I use JSDoc documentation.
