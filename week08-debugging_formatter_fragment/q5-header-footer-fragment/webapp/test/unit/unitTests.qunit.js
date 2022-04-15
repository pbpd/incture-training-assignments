/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"q5-header-footer-fragment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
