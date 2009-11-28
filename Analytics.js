Ext.ux.Analytics = Ext.extend(Ext.util.Observable, {

    isInitiated: false,
    
    constructor: function(config) {
        this.acct = config.acct;
        
        this.addEvents({
            'scriptload': true,
            'pagetrack': true,
            'eventtrack': true
        });
        
        this.listeners = config.listeners;
        
        this.on('scriptload', this.onScriptLoad, this);
        
        this.loadScript();
        
        Ext.ux.Analytics.superclass.constructor.call(config)
    },
    
    loadScript: function() {
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
        
        this.tag = document.createElement('script');
        this.tag.src = gaJsHost + 'google-analytics.com/ga.js';
        this.tag.type = 'text/javascript';
        
        this.tag.onload = this.onScriptLoad.createDelegate(this);
        this.tag.onreadystatechange = this.onReadyStateChange.createDelegate(this);
        
        document.getElementsByTagName('head')[0].appendChild(this.tag);
    },
    
    onReadyStateChange: function() {
        if (('loaded' === this.tag.readyState || 'complete' === this.tag.readyState) && !this.isInitiated) {
            this.fireEvent('scriptload');
        }
    },
    
    onScriptLoad: function() {
        this._tracker = _gat._getTracker(this.acct);
        this.trackPageView();
        
        this.isInitiated = true;
    },
    
    trackPageView: function(page){
        this._tracker._trackPageview(page);
        this.fireEvent('pagetrack', page);
    },
    
    trackEvent: function(category, action){
        this._tracker._trackEvent(category, action);
        this.fireEvent('eventtrack', category, action);
    }
});