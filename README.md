## Custom Widget for [Wakanda](http://wakanda.org/): Switcherry

Switchery is a simple widget that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE8+

The widget is an implementation of the [Switcherry](https://github.com/abpetkov/switchery).

![Preview](http://i.imgur.com/0PcuTbO.jpg)

[Live Preview](http://abpetkov.github.io/switchery/)

### Properties
This widget __Switcherry__ has the following properties: 

* __color__: color of the switch element (HEX or RGB value)
* __secondaryColor__: secondary color for the box shadow and border, when the switch is off
* __disabled__: enable or disable click events and changing the state of the switch (boolean value)
* __disabledOpacity__: opacity of the switch when it's disabled (0 to 1)
* __speed__: length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)


And has the following methods:
* __toggle__: Toggle the switcherry state

And has the following events:
* __onClick__: This event will be triggred when the widget was clicked.
* __onChange__: This event will be triggred when the value of the widget has been deleted.

### Install
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
