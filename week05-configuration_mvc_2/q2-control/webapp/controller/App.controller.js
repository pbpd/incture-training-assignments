sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("q2control.controller.App", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/countriesExtendedCollection.json"));
                this.getView().setModel(oModel);
            }
        });
    });
