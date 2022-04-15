sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "q7q8formatter/utils/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Formatter) {
        "use strict";

        return Controller.extend("q7q8formatter.controller.App", {
            formatter: Formatter,
            onInit: function () {
                // set data model on view
                var oData = [{
                    order: "X",
                    value: 20
                },
                {
                    order: "Y",
                    value: 30
                }];
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "model");
            },
        });
    });
