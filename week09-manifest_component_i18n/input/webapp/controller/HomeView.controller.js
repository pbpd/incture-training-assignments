sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("io.pb.input.controller.HomeView", {
            onInit: function () {

            },
            changeLang : function(){
                var langSelect = this.byId("desireLang").getSelectedItem().getText()
                if (langSelect === "Arabic") {
                    sap.ui.getCore().getConfiguration().setLanguage("ar");
                    messagebundleLocal : "ar";
                } else if(langSelect === "French") {
                    sap.ui.getCore().getConfiguration().setLanguage("fr");
                    messagebundleLocal : "fr";
                }
                else{
                    sap.ui.getCore().getConfiguration().setLanguage("en");
                    messagebundleLocal : "en";
                }
            }
        });
    });
