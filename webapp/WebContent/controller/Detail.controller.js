//32.
sap.ui.define([
        "sap/ui/core/mvc/Controller",
//33.
        "sap/ui/core/routing/History",
//34.
        "sap/m/MessageToast",
//35.
        "sap/ui/model/json/JSONModel"
],function(Controller,History,MessageToast,JSONModel){
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.Detail",{
		onInit : function(){
//35.		
			var oViewModel = new JSONModel({
				currency : "EUR"
			});
			this.getView().setModel(oViewModel,"view");
			
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched,this);
		},
		_onObjectMatched : function(oEvent){
			this.getView().bindElement({
				path : "/" + oEvent.getParameter("arguments").invoicePath,
				model : "invoice"
			});
		},
//33.		
		onNavBack : function(){
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if(sPreviousHash !== undefined){
				window.history.go(-1);
			}else{
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Overview",true);
			}
		},
//34.
		onRatingChange : function(oEvent){
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation",[fValue]));
		}
			
	});
});