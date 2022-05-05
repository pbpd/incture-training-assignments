sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("assignment1.controller.listView", {
            onInit: function () {

            },
            handleNavigation: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedId = oEvent.getSource().getBindingContext("JSON").getProperty("id");
                oRouter.navTo("detailView", {
                    id: selectedId
                });
            }
        });
    });
