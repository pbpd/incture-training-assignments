sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("assignment1.controller.detailView", {
        onInit: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detailView").attachMatched(this._onRouteMatched,this);
        },
        _onRouteMatched: function(oEvent){
            var oArgs;
            oArgs=oEvent.getParameter("arguments");
            var empData = this.getOwnerComponent().getModel("JSON").getData();           
            var additionalData;
            var oModel = new sap.ui.model.json.JSONModel();

            for(var i=0;i<empData.length;i++)
            {
                if(empData[i]["id"]==oArgs.id)
                {
                    additionalData=empData[i];
                    console.log(additionalData)
                }
            }
            oModel.setData(additionalData);        
            console.log(oModel)        
            this.getView().setModel(oModel,"empAdditionalData");
        },

        onNavBack: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Routeview1");
        }
	});
});