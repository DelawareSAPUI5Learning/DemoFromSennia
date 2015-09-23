sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"        
	],function(Controller,MessageToast){
		"use strict";
		
		return Controller.extend("sap.ui.demo.wt.controller.HelloPanel",{
			
			onShowHello: function(){
				//read msg from i8n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg",[sRecipient]);
				//show message
				MessageToast.show(sMsg);
			},
			onOpenDialog:function(){
				this.getOwnerComponent().helloDialog.open(this.getView());
			}
//21.			
//			_getDialog:function(){
//				if(!this._oDialog){
//					//create dialog via frament factory
//					this._oDialog = sap.ui.xmlfragment("sap.ui.demo.wt.view.HelloDialog",this);
//					//connect dialog to view (models,lifecycle)
//					this.getView().addDependent(this._oDialog);
//				}
//				return this._oDialog;
//			},
//			onOpenDialog:function(){
//				this._getDialog().open();
//			},
//			onCloseDialog:function(){
//				this._getDialog().close();
//			}
		});
});
