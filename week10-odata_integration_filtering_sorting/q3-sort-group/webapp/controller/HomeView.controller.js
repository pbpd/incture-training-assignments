sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("io.pb.q3sortgroup.controller.HomeView", {
            onInit: function () {
                this.getSrvData();
            },

            getSrvData: function() {
                var oDataModel = this.getOwnerComponent().getModel();
                var jsonModel = this.getOwnerComponent().getModel("jsonModel");


                var oPath = "/Invoices";
                oDataModel.read(oPath,{
                    success: function (oSuccess) {
                        jsonModel.setSizeLimit(oSuccess.results.length);
                        jsonModel.setProperty("/results", oSuccess.results);
                    }
                });

            }
        });
    });
