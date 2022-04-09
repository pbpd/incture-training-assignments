/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"io/pb/ordersnorthwind/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});