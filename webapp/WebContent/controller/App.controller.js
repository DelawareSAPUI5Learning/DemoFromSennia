sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"//6.
	//           5           6           
	],function(Controller,MessageToast){
		"use strict";
		
		return Controller.extend("sap.ui.demo.wt.controller.App",{

			//15.
//			onShowHello: function(){
//				//read msg from i8n model
//				var oBundle = this.getView().getModel("i18n").getResourceBundle();
////				console.log(oBundle);
//				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
////				console.log(sRecipient);
//				var sMsg = oBundle.getText("helloMsg",[sRecipient]);
//				//8.
//				MessageToast.show(sMsg);
//				//6.
////				MessageToast.show("Hello World");
//				//5.
////				alert("Hello World");
//			}
		});
});
