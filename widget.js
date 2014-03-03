// http://abpetkov.github.io/switchery/

WAF.define('Switchery', ['waf-core/widget'], function(widget) {
	
    var Widget = widget.create('Switchery', {
    	
    	color: widget.property({defaultValue: '#64bd63',bindable: false,type: 'string'}),
    	
    	secondaryColor: widget.property({defaultValue: '#dfdfdf',bindable: false,type: 'string', description: 'Secondary color'}),
    	
    	value: widget.property({type: 'boolean'/*, bindable: false*/}),
    	
    	disabled: widget.property({defaultValue: false,bindable: false,type: 'boolean'}),

    	disabledOpacity: widget.property({defaultValue: 0.5,bindable: false,type: 'number', description: 'Disabled opacity'}),

    	speed: widget.property({bindable: false,type: 'number',defaultValue: 0.3}),

        init: function() {
        	this.node.innerHTML = '<input type="checkbox">';

        	var el = this.node.getElementsByTagName('input')[0];
        	var self = this;
			
			this.switcherry = new Switchery(el, {
        		color          : this.color(),
				secondaryColor : this.secondaryColor(),
				disabled       : this.disabled(),
				disabledOpacity: this.disabledOpacity(),
				speed          : this.speed() + 's'
        	});

        	this.update();
            
            this.value.onChange(this.update);
            
            if(window.Designer){
            	// this.color.onChange(this.designerUpdate);
	            // this.secondaryColor.onChange(this.designerUpdate);
	            // this.value.onChange(this.designerUpdate);
	            // this.disabled.onChange(this.designerUpdate);
	            // this.disabledOpacity.onChange(this.designerUpdate);
	            this.speed.onChange(function () {
	            	this.switcherry.setSpeed(this.speed() + 's');
	            });
	        }

        	el.onchange = function (ev) {
          		self.value(self.switcherry.isChecked());
        	}.bind(this);

        	el.onclick = function (ev) {
        		this.fire('click', {domEvent: ev});
        	}.bind(this);
        },
        update: function () {
        	this.switcherry.setPosition(this.value() !== this.switcherry.isChecked());
        },
        designerUpdate: function () {
        	this.switcherry = new Switchery(el, {
        		color          : this.color(),
				secondaryColor : this.secondaryColor(),
				disabled       : this.disabled(),
				disabledOpacity: this.disabledOpacity(),
				speed          : this.speed() + 's'
        	});
        },
        toggle: function(){
        	this.switcherry.setPosition(true);
        }
    });

    return Widget;

});