//21.开始
sap.ui.define([
       "sap/ui/core/mvc/Controller",
       "sap/ui/model/json/JSONModel",
//23-.       
       "sap/ui/demo/wt/model/formatter",
//24-.
       "sap/ui/model/Filter",
       "sap/ui/model/FilterOperator"
],function(Controller,JSONModel,formatter,Filter,FilterOperator){
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.InvoiceList",{
//23-.		
		formatter:formatter,
//21-.		
		onInit:function(){
			var oViewModel = new JSONModel({
				currency:"EUR"
			});
			this.getView().setModel(oViewModel,"view");
		},
//24-.		
		onFilterInvoices:function(oEvent){
			
			//build filter array
			var aFilter=[];
			var sQuery = oEvent.getParameter("query");
			if(sQuery){
				aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));
			}
			//filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
//31-.
		onPress:function(oEven){
			var oItem = oEven.getSource();//32.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail",{//32.
				invoicePath : oItem.getBindingContext("invoice").getPath().substr(1)
			});
		}
		
	});
});