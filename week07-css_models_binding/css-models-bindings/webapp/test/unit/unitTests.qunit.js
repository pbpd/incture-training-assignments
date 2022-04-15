/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iopb/css-models-bindings/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
