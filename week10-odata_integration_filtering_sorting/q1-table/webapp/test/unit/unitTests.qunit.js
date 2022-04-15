/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iopb/q1-table/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
