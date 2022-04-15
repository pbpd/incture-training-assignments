/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iopb/q2-search-list/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
