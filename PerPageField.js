/**
 * ExtJS component to display number of items per page
 * 
 * @copyright       2010 Erhan Abay
 * @author          Erhan Abay
 */
Ext.ux.PerPageField = Ext.extend(Object, {

	beforeText : '',
	afterText : 'items per page',

	constructor : function(config) {
		Ext.apply(this, config);
	},

	init : function(toolbar) {
		this.toolbar = toolbar;

		this.toolbar.on({
			render : function() {
				this.toolbar.add(['-', '-',
						this.beforeText, this.combo,
						this.afterText]);
			},
			scope : this
		});

		this.combo = new Ext.form.ComboBox({
			store : ['5', '10', '20', '50', '100', '200'],
			mode : 'local',
			triggerAction : 'all',
			width : 50,
			listClass : 'x-combo-list-small',
			maskRe : /^[0-9]$/,
			value : toolbar.pageSize,
			listeners : {
				'collapse' : function(f) {
					this.triggerEvent(f);
				},

				'specialkey' : function(f, e) {
					if (e.getKey() == e.ENTER) {
						this.triggerEvent(f);
					}
				},
				scope : this
			}
		});
	},

	triggerEvent : function(f) {
		var o = {
			start : 0
		};
		var v = parseInt(f.getRawValue());
		this.toolbar.store.baseParams = this.toolbar.store.baseParams || {};
		this.toolbar.store.baseParams['limit'] = v;
		this.toolbar.pageSize = v;
		this.toolbar.store.reload({
			params : o
		});
	}
});

Ext.preg('perpagefield', Ext.ux.PerPageField);