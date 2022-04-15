sap.ui.define([], function () {
    'use strict';
    return {
        Change: function (value) {
            if (value === "X") {
                return "React";
            }
            else {
                return "Angular";
            }



        },
        clr: function (v) {
            var idText = this.getView().byId("lbl");
            if (v == "Orders") {
                idText.addStyleClass("green");
            }
            return v;
        }
    }
});