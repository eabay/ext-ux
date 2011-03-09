Ext.ns('Ext.ux.data');

/**
 * @class Ext.ux.data.CacheStore
 * @extends Ext.data.Store
 * 
 * @constructor
 * Creates a new cache store.
 * @param {Object} config The config object.
 * @xtype cachestore
 */
Ext.ux.data.CacheStore = Ext.extend(Ext.data.Store, {
    /**
     * @cfg {Ext.util.MixedCollection} cache
     * an instance of {@link Ext.util.MixedCollection}
     */
    cache: new Ext.util.MixedCollection(),
    
    /**
     * @cfg {String} prefix
     * Text to be used in prefix for keys in {@link #cache}
     */
    prefix: '',
    
    constructor: function(config) {
        Ext.apply(this, config);
        
        Ext.ux.data.CacheStore.superclass.constructor.call(this, config);
        
        this.on('load', this.onLoad);
    },
    
    /**
     * Adds loaded data to the {@link #cache}.
     * @param {CacheStore} this
     * @param {Ext.data.Record[]} records The Records that were loaded
     * @param {Object} options The loading options that were specified (see {@link #load} for details)
     * @private
     */
    onLoad: function(store, records, options) {
        if (this.getCacheKey(options.params)) {
            this.cache.add(this.getCacheKey(options.params), store.reader.jsonData);
        }
    },
    
    /**
     * Overrides {@link Ext.data.Store#load store load method}.
     * Params are serialized and searched in {@link #cache}. If any data found
     * it is loaded from cache, else {@link Ext.data.Store#load superclass load method} called.
     * @param {Object} options See {@link Ext.data.Store#load}
     */
    load: function(options) {
        var key = this.getCacheKey(Ext.isDefined(options) ? Ext.apply(this.baseParams, options.params) : this.baseParams);
        var data = this.cache.get(key);
        
        if (Ext.isDefined(data) && data.success) {
            this.loadData(data, false);
        } else {
            Ext.ux.data.CacheStore.superclass.load.call(this, options);
        }
    },
    
    /**
     * Returns key for data stored in {@link #cache}.
     * Requires phpjs ksort function
     * @param {Object} options See {@link Ext.data.Store#load}
     * @return {String} urlencoded options object
     * @private
     */
    getCacheKey: function(params) {
    	if (!params) {
    		return false;
    	}
    	
    	Ext.iterate(params, function(key, value) {
    		if (Ext.isEmpty(value)) {
    			delete params[key];
    		}
    	});
    	
        return Ext.urlEncode(ksort(params), this.prefix);
    }
});

Ext.reg('cachestore', Ext.ux.data.CacheStore);