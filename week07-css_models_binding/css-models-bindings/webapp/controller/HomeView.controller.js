sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,XMLModel) {
        "use strict";

        return Controller.extend("io.pb.cssmodelsbindings.controller.HomeView", {
            onInit: function () {
                
                // Mock JSON
                var Products = {
                    "Products":[
                        {
                            "productId": 1,
                            "productName": "Chai",
                            "unitPrice": 18
                        },
                        {
                            "productId": 2,
                            "productName": "Chang",
                            "unitPrice": 28
                        },
                        {
                            "productId": 3,
                            "productName": "Jacky",
                            "unitPrice": 15
                        }
                    ]
                };

                var productModel = new JSONModel();
                productModel.setData(Products);
                this.getView().setModel(productModel);

                // XML Binding
                var xmlModel = new XMLModel();
                xmlModel.loadData("model/customer.xml");
                this.getView().setModel(xmlModel, "cust");

            },
            onAfterRendering: function(){
                this.getView().byId('label1').addStyleClass("custom-style");
            }
        });
    });
