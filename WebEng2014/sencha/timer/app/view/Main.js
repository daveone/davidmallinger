Ext.define('timer.view.Main', {
	extend: "Ext.tab.Panel",
	requires: ['timer.view.Home',
	           'timer.view.Impressum',
	           'timer.view.Timer'
	],
	
	config: {
		fullscreen: true,
        tabBarPosition: 'bottom',
        id: 'tabBar',
        items: [{
        	
            title: 'Home',
            iconCls: 'home',
            items: {xtype: 'welcome'}
            
        }, {
            title: 'Timer',
            iconCls: 'time',
            items: {xtype: 'timerpanel'}
            
        }, {
            title: 'Impressum',
            iconCls: 'info',
            scrollable: true,
            items: {xtype: 'impressum'}
            
        }] // items
	}

});