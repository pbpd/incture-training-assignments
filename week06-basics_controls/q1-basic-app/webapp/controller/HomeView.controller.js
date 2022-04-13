sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    'sap/m/MessageBox',
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,MessageBox,JSONModel) {
        "use strict";

        return Controller.extend("io.pb.q1basicapp.controller.HomeView", {
            onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("q1/pb/q1basicapp/data/countries.json"));
			    this.getView().setModel(oModel);
            },

            

            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            },

            handleLinkPress: function (evt) {
                MessageBox.alert("Link was clicked!");
            }
        });

    });
