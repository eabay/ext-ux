Ext.ux.Icon = Ext.extend(Object, {
	
	url: 'img/icons/',
    ext: 'png',
	
    constructor: function(config) {
    	Ext.apply(this, config);
    	Ext.ux.Icon.superclass.constructor.call(this, config);
    },
    
    css: function(icon) {
    	if(!Ext.util.CSS.getRule('.icon-'+icon))
    	    Ext.util.CSS.createStyleSheet('.icon-'+icon+' {background-image: url('+this.url+icon+'.'+this.ext+') !important;}');
        
        Ext.util.CSS.refreshCache();
        
        return 'icon-'+icon;
    }
});