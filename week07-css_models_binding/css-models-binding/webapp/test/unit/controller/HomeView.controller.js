/*global QUnit*/

sap.ui.define([
	"iopb/css-models-binding/controller/HomeView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HomeView Controller");

	QUnit.test("I should test the HomeView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
