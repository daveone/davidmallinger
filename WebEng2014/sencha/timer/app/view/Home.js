Ext.define("timer.view.Home", {
    extend: "Ext.Container",
    xtype: 'welcome',
	
	config: {
	    layout: {
	        type: 'fit'
	    }
	},
	
	initialize: function () {
	    
	    var topToolbar = {
	        xtype: "toolbar",
	        title: 'David Mallinger - 5044032',
	        docked: "top",
	        items: [
	            { xtype: 'spacer' },
	        ]
	    };
	    var panel = {
	    	
	    	config: {
	    		type: 'fit',
		        align: 'middle',
		        padding: 20
	    	},	    	
	    	xtype: "panel",
			docked: "top",
			centered: true,
			html: [
                   '',
                   '<div align="center"><br>Herzlich Willkommen bei der WebApp von David Mallinger.<br><br>',
                   'Den Timer finden Sie in der unteren TabBar.</div>'
               ].join("")
			
		};
	    this.add(topToolbar, panel);
	}
});