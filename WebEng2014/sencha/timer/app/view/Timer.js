Ext.define("timer.view.Timer", {
    extend: "Ext.Container",
    xtype: 'timerpanel',
    requires: ['Ext.Picker', 'Ext.Audio'],
	alias: "widget.timerView",
	
	config: {
	    layout: {
	        type: 'fit'
	    }
	},

	initialize: function () {
	
	    this.callParent(arguments);
	    var setButton = {
	        xtype: "button",
	        text: 'Zeit wählen',
	        ui: "round",
	        id: 'timerButton',
	        handler: this.setzeTap,
	        scope: this
	    };
	    
	    var startButton = {
		        xtype: "button",
		        text: 'Start',
		        ui: 'confirm-round',
		        id: 'startButton',
		        disabled: false,
		        handler: this.starteTap,
		        scope: this
		    };

	    var topToolbar = {
		        xtype: "toolbar",
		        title: 'Timer',
		        docked: "top",
		        items: [setButton]
		    };
	    
	    var myPanel = {
	    	
	    	config: {
	    		type: 'fit',
		        align: 'middle',
		        padding: 20
	    	},	    	
	    	xtype: "panel",
	    	id: "timerAnzeige",
			title: 'timerPanel', 
			docked: "top",
			centered: true,
			html: '<br><br><div align="center"><span id="timePanel"><span id="minutes">10</span>:<span id="seconds">00</span></span></div><br />',
			items: [startButton]
		};
	    
	    var audio = {
		        xtype: "container",
		        docked: "bottom",
		        items: [
		            {
					     xtype: 'audio',
					     url: 'alarm.mp3',
					     id: 'sound',
					     autoplay:false,
					     hidden:true
					},
					{
					     xtype: 'button',
					     ui: 'decline-round',
					     id: 'stopAudio',
					     hidden: true,
					     text:'Timer deaktivieren',
					     handler: function() {
					         var container = this.getParent().getParent(),
					         audio = container.down('audio');
					         audio.stop();
					         this.hide();
					         Ext.get('minutes').setHtml('10');
					         Ext.get('seconds').setHtml('00');
					     }
					}
		        ]
		    };
	    
	    
	
	    this.add([topToolbar, myPanel, audio]);
	},
	
	setzeTap: function () {
	    this.fireEvent("countdownPicker", this);
	    this.zeigePicker();
	},
	
	starteTap: function () {
	    this.fireEvent("startTimer", this);
	},
	
	zeigePicker: function () {
		
		var picker = Ext.create('Ext.Picker', {
            doneButton: 'Auswählen',
            cancelButton: 'Abbruch',
            
            slots: [{
                name: 'timerCountdown',
                title: 'Countdown Zeit',
                data: [{
                    text: '1 Minute',
                    value: 1
                }, {
                    text: '2 Minuten',
                    value: 2
                }, {
                    text: '3 Minuten',
                    value: 3
                }, {
                    text: '4 Minuten',
                    value: 4
                }, {
                    text: '5 Minuten',
                    value: 5
                }, {
                    text: '6 Minuten',
                    value: 6
                }, {
                    text: '7 Minuten',
                    value: 7
                }, {
                    text: '8 Minuten',
                    value: 8
                }, {
                    text: '9 Minuten',
                    value: 9
                }, {
                    text: '10 Minuten',
                    value: 10
                }, {
                    text: '11 Minuten',
                    value: 11
                }, {
                    text: '12 Minuten',
                    value: 12
                }, {
                    text: '13 Minuten',
                    value: 13
                }, {
                    text: '14 Minuten',
                    value: 14
                }, {
                    text: '15 Minuten',
                    value: 15
                }, {
                    text: '16 Minuten',
                    value: 16
                }, {
                    text: '17 Minuten',
                    value: 17
                }, {
                    text: '18 Minuten',
                    value: 18
                }, {
                    text: '19 Minuten',
                    value: 19
                }, {
                    text: '20 Minuten',
                    value: 20
                }]
            }],
            listeners: {
                "change": function(picker) {
                    
                	selectedValue = picker.getValue().timerCountdown;

                    Ext.get('minutes').setHtml(selectedValue);
                    Ext.get('seconds').setHtml('00');
                }
            }
        });
		
		picker.setValue( {timerCountdown: 10}, true ) 
        picker.show();
		
	}
    
});