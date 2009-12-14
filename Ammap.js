Ammap = new Ext.util.Observable();

Ext.apply(Ammap, {
	map : null,

	init : function(map_id) {
		Ammap.map = document.getElementById(map_id);
	},

	// This function can be used to set only one setting on the fly.
    setSetting : function(setting, value) {
        var setting = String.format('<settings><{0}>{1}</{0}></settings>', setting, value);

        this.map.setSettings(setting);
    },

    // This function can be used for setting the maps's data on the fly.
    setData : function(data) {
        this.map.setData(data);
    },

	// SET SETTINGS //////////////////////////////////////////////////////////////////////////
	// setSettings(settings[, rebuild])
	// This function can be used to set some part or all the settings.
	// The settings should be
	// in XML format, inside <settings></settings>. The "rebuild"
	// parameter is optional and
	// can be "true" or "false". "false" means that the new settings
	// will not be applied right
	// after this function is called. They will can be applied using
	// this.map.rebuild()
	// function or by adding some more setings with the "rebuild" set to
	// "true". The default
	// value of "rebuild" is "true".
	setSettings : function(settings) {
		this.map.setSettings(settings);
	},

	// REBUILD MAP ///////////////////////////////////////////////////////////////////////////
	// This function might be used to rebuild the map after several
	// portions of settings were
	// set using setSettings(settings, rebuild) function, with the
	// rebuild set to false
	rebuild : function() {
		this.map.rebuild();
	},

	// RELOAD DATA ///////////////////////////////////////////////////////////////////////////
	// reloadData([file_name])
	// This function will reload the data. The file_name variable is
	// optional, if you do not
	// set it here, data from the original file will be reloaded.
	reloadData : function() {
		this.map.reloadData();
	},

	// RELOAD SETTINGS ///////////////////////////////////////////////////////////////////////
	// reloadSettings([file_name])
	// This function will reload the settings. The file_name variable is
	// optional, if you do
	// not set it here, settings from the original file will be
	// reloaded.
	reloadSettings : function() {
		this.map.reloadSettings();
	},

	// RELOAD ALL ////////////////////////////////////////////////////////////////////////////
	// reloadAll([data_file_name][,settings_file_name])
	// This function will reload both data and settings. The names of
	// the files are optional.
	// If you do not set them, the original file names will be used.
	reloadAll : function() {
		this.map.reloadAll();
	},

	// SET PARAM /////////////////////////////////////////////////////////////////////////////
	// This function lets you change a single setting. The parameter
	// names are formed using
	// the section name and the parameter name, separated with a period.
	// For example:
	// background.alpha or zoom.enabled
	setParam : function(param, value) {
		this.map.setParam(param, value);
	},

	// GET PARAM /////////////////////////////////////////////////////////////////////////////
	// This function will ask Flash to return the value of a setting.
	// The parameter name is
	// formed in the same way as the setParam function (described
	// above). When you call this
	// function to return the setting value, Flash will return the value
	// by calling the
	// amReturnParam(map_id, param_value) function
	getParam : function(param) {
		this.map.getParam(param);
	},

	// GET DATA //////////////////////////////////////////////////////////////////////////////
	// This function will ask Flash to return the whole data. When you
	// call this function to
	// return the data, Flash will call the amReturnData(map_id, data)
	// function.
	getData : function() {
		this.map.getData();
	},

	// GET SETTINGS //////////////////////////////////////////////////////////////////////////
	// This function will ask Flash to return the whole settings XML.
	// When you call this
	// function to return the settings, Flash will call the
	// amReturnSettings(map_id, settings) function.
	getSettings : function() {
		this.map.getSettings();
	},

	// EXPORT AS IMAGE ///////////////////////////////////////////////////////////////////////
    // flashMovie.exportImage([file_name]) 
	// This function will start the process of exporting the chart as an
	// image. The file_name
	// is a name of a file to which image data will be posted (files
	// provided in the download
	// package are export.php and export.aspx). The file_name is
	// optional and can be set in
	// the <export_as_image><file> setting.
	exportImage : function(file_name) {
		this.map.exportImage('../../ammap/export.php');
	},

	// PRINT /////////////////////////////////////////////////////////////////////////////////
	// This function will print the chart.
	print : function() {
		this.map.print();
	},

	// PRINT AS BITMAP ///////////////////////////////////////////////////////////////////////
	printAsBitmap : function() {
		this.map.printAsBitmap();
	},

	// SET ZOOM
	// This function will set the new zoom level and position for the
	// map. "instant" can be
	// "true" or "false". If set to "true", the map will change the zoom
	// position instantly,
	// without animation. The default value is "false".
	setZoom : function(zoom_level, zoom_x, zoom_y, instant) {
		this.map.setZoom(zoom_level, zoom_x, zoom_y, false);
	},

	// SET ZOOM
	// This function will set the new zoom level and position for the
	// map using longitude and
	// latitude. "instant" can be "true" or "false". If set to "true",
	// the map will change
	// the zoom position instantly, without animation. The default value
	// is "false".
	setZoomLongLat : function(zoom_level, longitude, latitude, instant) {
		this.map.setZoomLongLat(zoom_level, longitude, latitude, false);
	},

	// GET LONGITUDE AND LATITUDE OF A MOUSE POINTER
	// This function will return longitude and latitude of the mouse
	// pointer. The values will
	// be returned by calling amSetLongLat(map_id, long, lat) function
	getLongLat : function() {
		this.map.getLongLat();
	},

	// GET X a Y POSITION OF A MOUSE POINTER
	// This function will return x and y position of a mouse in pixels
	// and in percents. The
	// values will ve returned by calling amSetStageXY(map_id, x, y,
	// x_percent, y_percent)
	// function
	getStageXY : function() {
        if (arguments.length == 0) {
            this.map.getStageXY()
        } else {
            return arguments;
        }
	},

	// GET MAP ZOOM LEVEL AND POSITION
	// This function will return map zoom level and zoom position. The
	// values will be returned
	// by calling amSetZoomInfo(map_id, x, y, level) function
	getZoomInfo : function() {
		if (this.map) {
			this.map.getZoomInfo();
		}
	},

	// GET CURRENT MAP VIEWSTATE CENTER COORDINATES
	// This function will return center coordinates of the center of the
	// currently visible
	// map portion. The values will be returned by calling
	// amSetCenterCoords(map_id, long, lat, level) function
	getCenterCoords : function() {
		if (arguments.length == 0) {
			this.map.getCenterCoords()
		} else {
            return arguments;
		}
	},

	// GET CURRENT MAP VIEWSTATE BOUNDS
	// This function will return SW and NEW coordinates of the currently
	// visible
	// map portion. The values will be returned by calling
	// amSetCurrentBounds(map_id, sw_lng, sw_lat, ne_lng, ne_lat)
	// function
	getCurrentBounds : function() {
        if (arguments.length == 0) {
            this.map.getCurrentBounds()
        } else {
            return arguments;
        }
	},

	// CLICK ON OBJECT
	// this function will act as if user clicked on some object - area,
	// movie or label. The
	// Object must have oid attribute set, for example: <area oid="UK"
	// .....>
	clickObject : function(id) {
		this.map.clickObject(id);
	},

	// ZOOM-IN
	// the map will zoom-in by one step. You can call this function on
	// mouseWheel event.
	// amMap has a possibility to zoom-in and out with mouseWheel,
	// however it is not working
	// properly with wmode set to "transparent" or "opaque"
	zoomIn : function() {
		this.map.zoomIn()
	},
	// ZOOM-OUT
	// the map will zoom-in by one step. You can call this function on
	// mouseWheel event.
	// amMap has a possibility to zoom-in and out with mouseWheel,
	// however it is not working
	// properly with wmode set to "transparent" or "opaque"
	zoomOut : function() {
		this.map.zoomOut();
	},

	// SET COLOR OF THE OBJECT
	// this function sets the color of the object with the respective
	// oid
	// attribute
	setColor : function(id, color) {
		this.map.setColor(id, color);
	}
});

// Subscribe to map events
Ammap.subscribe('ammapcompleted', Ammap.init);
Ammap.subscribe('amsetcentercoords', Ammap.getCenterCoords);
Ammap.subscribe('amsetcurrentbounds', Ammap.getCurrentBounds);
Ammap.subscribe('amsetstagexy', Ammap.getStageXY);

// ////////////////////////////////////////////////////////////////////////////////////////
// Functions that are called by the map
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////

// MAP COMPLETED /////////////////////////////////////////////////////////////////////////
// amMapCompleted(map_id)
// This function is called when the map is fully loaded and initialized.
function amMapCompleted(map_id) {
	Ammap.publish('ammapcompleted', map_id);
}

// PROCESS COMPLETED /////////////////////////////////////////////////////////////////////
// amProcessCompleted(map_id, process_name)
// This function is called when the map finishes doing some task triggered by
// another
// JavaScript function
function amProcessCompleted(map_id, process_name) {
	Ammap.publish('amprocesscompleted', map_id, process_name);
}

// RETURN DATA ///////////////////////////////////////////////////////////////////////////
// amReturnData(map_id, data)
// This function is called when you request data from a map
// by calling the flashMove.getData() function.
function amReturnData(map_id, data) {
	Ammap.publish('amreturndata', map_id, data);
}

// RETURN PARAM //////////////////////////////////////////////////////////////////////////
// amReturnParam(map_id, param)
// This function is called when you request a setting from a map
// by calling the this.map.getParam(param) function.
function amReturnParam(map_id, param) {
	Ammap.publish('amreturnparam', map_id, param);
}

// RETURN SETTINGS ///////////////////////////////////////////////////////////////////////
// amReturnSettings(map_id, settings)
// This function is called when you request settings from a map
// by calling this.map.getSettings() function.
function amReturnSettings(map_id, settings) {
	Ammap.publish('amreturnsettings', map_id, settings);
}

// RETURN IMAGE DATA /////////////////////////////////////////////////////////////////////
// amReturnImageData(map_id, data)
// This function is called when the export to image process is finished and
// might be used
// as alternative way to get image data (instead of posting it to some file)
function amReturnImageData(map_id, data) {
	Ammap.publish('amreturnimagedata', map_id, data);
}

// ERROR /////////////////////////////////////////////////////////////////////////////////
// amError(map_id, message)
// This function is called when an error occurs, such as no data, or file not
// found.
function amError(map_id, message) {
	Ammap.publish('amerror', map_id, message);
}

// RETURN LONGITUDE AND LATITUDE OF A MOUSE POINTER
// amSetLongLat(map_id, long, lat)
// This function is called by the chart when you request this information by
// calling
// getLongLat() function
function amSetLongLat(map_id, long, lat) {
	Ammap.publish('amsetlonglat', map_id, long, lat);
}

// RETURN X AND Y OF A MOUSE POINTER
// amSetStageXY(map_id, x, y, x_percent, y_percent)
// This function is called by the chart when you request this information by
// calling
// getStageXY() function
function amSetStageXY(map_id, x, y, x_percent, y_percent) {
	Ammap.publish('amsetstagexy', map_id, x, y, x_percent, y_percent);
}

// RETURN ZOOM LEVEL AND POSITION
// amSetZoomInfo(map_id, x, y, level)
// This function is called by the chart when you request this information by
// calling
// getZoomInfo() function
function amSetZoomInfo(map_id, x, y, level) {
	Ammap.publish('amsetzoominfo', map_id, x, y, level);
}

// RETURN CURRENT CENTER COORDINATES
// amSetCenterCoords(map_id, long, lat, zoom)
// This function is called by the chart when you request this information by
// calling
// getCenterCoords() function
function amSetCenterCoords(map_id, long, lat, zoom) {
	Ammap.publish('amsetcentercoords', map_id, long, lat, zoom);
}

// RETURN CURRENT MAP BOUNDS
// amSetCurrentBounds (map_id, sw_lng, sw_lat, ne_lng, ne_lat)
// This function is called by the chart when you request this information by
// calling
// getCurrentBounds() function
function amSetCurrentBounds(map_id, sw_lng, sw_lat, ne_lng, ne_lat) {
	Ammap.publish('amsetcurrentbounds', map_id, sw_lng, sw_lat, ne_lng, ne_lat);
}

// REGISTER MOUSE CLICK ON AN OBJECT
// amRegisterClick(map_id, object_id, title, value)
// This function is called when user clicks on some object - area, movie or
// label.
function amRegisterClick(map_id, object_id, title, value) {
	Ammap.publish('amregisterclick', map_id, object_id, title, value);
}

// REGISTER MOUSE CLICK ANYWHERE ON THE MAP
// amRegisterClickAnywhere(map_id, object_id, title, value)
// This function is called when user clicks on some object - area, movie or
// label.
function amRegisterClickAnywhere(map_id, object_id, title, value) {
	Ammap.publish('amregisterclickanywhere', map_id, object_id, title, value);
}

// REGISTER ROLL-OVER THE OBJECT
// amRegisterHover(map_id, object_id, title, value)
// This function is called when user rolls-over on some object - area, movie or
// label.
function amRegisterHover(map_id, object_id, title, value) {
	Ammap.publish('amregisterhover', map_id, object_id, title, value);
}