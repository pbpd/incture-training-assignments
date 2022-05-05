/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"q11-icons/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
