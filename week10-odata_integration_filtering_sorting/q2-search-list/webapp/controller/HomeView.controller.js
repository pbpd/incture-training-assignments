sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("io.pb.q2searchlist.controller.HomeView", {
            onInit: function () {
                this.getSrvData();
            },
            onChnge:function(e){
                var query = e.getSource().getValue();
                var filter=[];
                var oList=this.getView().byId("CustomerList")
                 var oBinding = oList.getBinding("items");
                if(query){
                    filter.push(new Filter("CustomerID",FilterOperator.Contains,query));
                }
                oBinding.filter(filter);
            },
            getSrvData:function(){
                var oDataMdl = this.getOwnerComponent().getModel();
                var jsonModel = this.getOwnerComponent().getModel("jsonModel");
               
                var path="/Customers";
                oDataMdl.read(path,{
                    success: function(oSuccess){
                   jsonModel.setSizeLimit(oSuccess.results.length);
                   jsonModel.setProperty("/results",oSuccess.results);
                },error: function(oSuccess){debugger;}
                });
            }
        });
    });
