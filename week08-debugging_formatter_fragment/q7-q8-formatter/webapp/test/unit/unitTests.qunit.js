/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"q7-q8-formatter/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
