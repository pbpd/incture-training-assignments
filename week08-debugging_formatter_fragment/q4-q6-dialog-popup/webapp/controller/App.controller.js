sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/library",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, coreLibrary, Dialog, Button, mobileLibrary, Text) {
        "use strict";

        // shortcut for sap.m.ButtonType
        var ButtonType = mobileLibrary.ButtonType;

        // shortcut for sap.m.DialogType
        var DialogType = mobileLibrary.DialogType;

        // shortcut for sap.ui.core.ValueState
        var ValueState = coreLibrary.ValueState;

        return Controller.extend("io.pb.controller.App", {
            onInit: function () {
                var oData = {
                    recipient : {
                       name : "",
                       number : ""
                    }
                };

                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onSuccessMessageDialogPress: function () {
                
                if (!this.oSuccessMessageDialog) {
                    this.oSuccessMessageDialog = new Dialog({
                        type: DialogType.Message,
                        title: "Success",
                        state: ValueState.Success,
                        content: new Text({ text: "Success" }),
                        beginButton: new Button({
                            type: ButtonType.Emphasized,
                            text: "OK",
                            press: function () {
                                this.oSuccessMessageDialog.close();
                            }.bind(this)
                        })
                    });
                }
    
                this.oSuccessMessageDialog.open();
            },
            onPress: function(){
                if(!this.dialog){
                    this.dialog = sap.ui.xmlfragment("frag","io.pb.utils.frag1",this);
                    this.getView().addDependent(this.dialog);
                }
                this.dialog.open();
                

            },
            onPressClose: function(){
                this.dialog.close();
            },
        });
    });
