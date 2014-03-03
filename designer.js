(function(Switchery) {
    Switchery.setWidth('52');
    Switchery.setHeight('32');

	// Add the events
	Switchery.addEvent('click');
	Switchery.addEvent('change');

	// Add the attributes
	var attrs = [
		// {name: 'color', title: 'Color', description: 'color of the switch element (HEX or RGB value)', bindable: false},
		// {name: 'secondaryColor', title: 'Secondary Color', description: 'secondary color for the box shadow and border, when the switch is off'},
		// {name: 'disabled', title: 'Disabled', description: 'enable or disable click events and changing the state of the switch (boolean value)'},
		// {name: 'disabledOpacity', title: 'Disabled Opacity', description: 'opacity of the switch when it\'s disabled (0 to 1)'},
		// {name: 'speed', title: 'Speed', description: "length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)"}
	];

   for (var i = attrs.length - 1; i >= 0; i--) {
   	   Switchery.customizeProperty(attrs[i].name , {
	       title: attrs[i].title,
	       description: attrs[i].description
	   });
   };

});