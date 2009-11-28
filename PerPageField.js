Ext.ux.PerPageField = Ext.extend(Object, {

	beforeText : '',
	afterText : 'items per page',

	constructor : function(config) {
		Ext.apply(this, config);
	},

	init : function(grid) {
		this.grid = grid;

		this.grid.on({
			render : function() {
				this.grid.bottomToolbar.add(['-', '-',
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
			value : grid.bottomToolbar.pageSize,
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
		this.grid.store.baseParams = this.grid.store.baseParams || {};
		this.grid.store.baseParams['limit'] = v;
		this.grid.bottomToolbar.pageSize = v;
		this.grid.store.reload({
			params : o
		});
	}
});

Ext.preg('perpagefield', Ext.ux.PerPageField);