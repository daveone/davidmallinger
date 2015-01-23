Ext.define("timer.controller.Controller", {
    extend: "Ext.app.Controller",
    
    config: {
        refs: {
            timer: "timerView"
        },
        control: {
            timer: {
                countdownPicker: "setCountdown",
                startTimer: "starteTimer"
            }
        }
    },
    

    
    setCountdown: function () {
    },
    
    
    starteTimer: function () {
    	
	    Ext.getCmp('timerButton').disable();
	    Ext.getCmp('startButton').disable();
		
		var begin = Date.now();
		
		var minuten = Ext.get('minutes').getHtml();
		
		var tmpSeconds = minuten*60;
		
		
		var counter=setInterval(function(){
			
			var zeitLaeuft = (Date.now()-begin)/1000;
			
			
			tmpSeconds--;
			
			var min = Math.floor(tmpSeconds/60);
			var sec = tmpSeconds-min*60;
			
			Ext.get('minutes').setHtml(min);
			Ext.get('seconds').setHtml(sec<10?'0'+sec:sec);
			

			if(zeitLaeuft >= minuten*60) 
			{
			   clearInterval(counter);
			   
			   Ext.getCmp('sound').play();
			   
			   Ext.getCmp('stopAudio').show();
			   
			   Ext.getCmp('handleCounterButton').enable();
			   Ext.getCmp('handlePickerButton').enable();
			   
			   Ext.Msg.alert("Timer abgelaufen!");
			   
			   
			   TimerTab.setBadgeText('');

			   return;
			}
			
		}, 1000); 
		 
		
	},
    
    
    
    /*,
    
    launch: function () {
        this.callParent();
        //console.log("launch");
    },
    init: function () {
        this.callParent();
        //console.log("init");
    }*/
});