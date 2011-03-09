Ext.ux.Icon = Ext.extend(Object, {
	
	url: 'img/icons/',
    ext: 'png',
	
    constructor: function(config) {
    	Ext.apply(this, config);
    	Ext.ux.Icon.superclass.constructor.call(this, config);
    },
    
    css: function(icon) {
    	var name = icon.replace(/\//g, '-');
    	
    	if(!Ext.util.CSS.getRule('.icon-'+name)) {
    		Ext.util.CSS.createStyleSheet('.icon-'+name+' {background-image: url('+this.url+icon+'.'+this.ext+') !important;}');
    	}
        
        Ext.util.CSS.refreshCache();
        
        return 'icon-'+name;
    }
});