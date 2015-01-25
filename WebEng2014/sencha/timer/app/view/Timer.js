Ext.define("timer.view.Timer", {
    extend: "Ext.Container",
    xtype: 'timerpanel',
	requires: ['Ext.form.FieldSet',
	           'Ext.picker.Picker'],

	
	initialize: function(){
		
		var time=600; 
		var timeZwei;
		var audio = document.getElementById('alarm');
		
		var pickerButton = {
				xtype: 'button', 
				text: 'Zeit wählen',
				ui: 'round',
				pack: 'center',
				align: 'stretch', 
				margin: 5,
				id: 'setTime',
				handler: function(){
					picker.show();
				}
		};
		
		var startButton = {
				xtype : 'button',
				text : 'Start',
				ui : 'confirm-round',
				pack:'center', 
				align: 'stretch', 
				margin: 5,
				id: 'start', 
				handler: function(){
					startCountdown();	
				}
		};
			
		var stopButton = {
				xtype : 'button',
				text : 'Stop',
				ui : 'decline-round',
				pack:'center', 
				align: 'stretch', 
				margin: 5,
				handler: function(){
					stopCountdown();
				}
		};
		
		
		
		var toolbar = {
				xtype : 'titlebar',
				docked : 'top',
				title : 'Timer',
				items: [
					pickerButton]
				
		};
		
		this.add([toolbar,
		          {
			items: [{
				html: "<br/><div align='center'><span id='timepanel'>10:00</span></div><br/>"
					
			},
			        startButton, 
			        stopButton
			        ]}
		]);
		
		
		var picker = Ext.create('Ext.picker.Picker',{
					doneButton: 'Auswählen',
					cancelButton: 'Abbrechen',
					slots: [
					      {
					    	  name: 'zeit',  
					    	  data: [
					    	           {text: "1 Minute", value: 1}, 
								       {text: "2 Minuten", value: 2}, 
								       {text: "3 Minuten", value: 3}, 
								       {text: "4 Minuten", value: 4},
								       {text: "5 Minuten", value: 5}, 
								       {text: "6 Minuten", value: 6},
								       {text: "7 Minuten", value: 7}, 
								       {text: "8 Minuten", value: 8},
								       {text: "9 Minuten", value: 9}, 
								       {text: "10 Minuten", value: 10}, 
								       {text: "11 Minuten", value: 11}, 
								       {text: "12 Minuten", value: 12}, 
								       {text: "13 Minuten", value: 13}, 
								       {text: "14 Minuten", value: 14}, 
								       {text: "15 Minuten", value: 15}, 
								       {text: "16 Minuten", value: 16}, 
								       {text: "17 Minuten", value: 17}, 
								       {text: "18 Minuten", value: 18}, 
								       {text: "19 Minuten", value: 19}, 
								       {text: "20 Minuten", value: 20}, 
								       
					    	         ]
					      }],
					      listeners:{
					    "change": function(picker){
					    	time = picker.getValue().zeit;
					    	time = time*60;
					    	Ext.get('timepanel').setHtml('' + parseTime(time));
					    	var startbtn = Ext.ComponentQuery.query('#start')[0];
							startbtn.enable();
					    }
					      }
		
				});
		picker.setValue({zeit:10},true);	
		var countdown = function(time){
			
			if(time > 0) {
				timeZwei = setTimeout(function()
						{
					countdown(--time)
					},1000);
				Ext.get('timepanel').setHtml('' + parseTime(time));
			}
			else {
				audio.play();
				Ext.get('timepanel').setHtml('Zeit abgelaufen!');
				var setTimebtn = Ext.ComponentQuery.query('#setTime')[0];
				setTimebtn.enable();
			}
			
		};
		
		var startCountdown = function(){
			
			audio.load();
			countdown(time);
			
			var start = Ext.ComponentQuery.query('#start')[0];
			start.disable();
			
			var setTime = Ext.ComponentQuery.query('#setTime')[0];
			setTime.disable();
		};
		
		var stopCountdown = function(){
			clearTimeout(timeZwei);
			var start = Ext.ComponentQuery.query('#start')[0];
			start.enable();
			var setTime = Ext.ComponentQuery.query('#setTime')[0];
			setTime.enable();
			
			audio.pause();
			audio.currentTime=0;
		};
		
		var parseTime = function(value){

			var min = Math.floor(value/60) % 60; 

			var sec = value % 60; 
			
			min = (min<10) ? "0" + min : min; 
			sec = (sec<10) ? "0" + sec : sec; 
			
			var time = min + ":" + sec; 
			return time;
		};
			
	}
});