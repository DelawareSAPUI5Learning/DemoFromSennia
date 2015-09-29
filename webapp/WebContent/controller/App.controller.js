sap.ui.define([
	"sap/ui/core/mvc/Controller",
//6-14.	
	"sap/m/MessageToast",
//7-8.	
	"sap/ui/model/json/JSONModel",
//8.    
	"sap/ui/model/resource/ResourceModel"
	],function(Controller,MessageToast){
		"use strict";
		
		return Controller.extend("sap.ui.demo.wt.controller.App",{
			
//7-8.定义数据，该方法在9步提到Component.js中
//			onInit : function () {
//
//				// set data model on view
//				var oData = {
//					recipient : {
//						name : "World"
//					}
//				};
//				var oModel = new JSONModel(oData);
//				this.getView().setModel(oModel);
			
//8.			// set i18n model on view
//			var i18nModel = new ResourceModel({
//				bundleName: "sap.ui.demo.wt.i18n.i18n"
//			});
//			this.getView().setModel(i18nModel, "i18n");
//			
//			},//方法之间用逗号隔开
			
//5-7.对应view中的按钮点击方法			
//			onShowHello : function(){
//5.				alert("Hello World");
//6.				MessageToast.show("Hello World");
//			}
//8-14.从常量文件中取数据	15.步开始方法移到HelloPanel.controller.js中		
//			onShowHello : function () {
//				// read msg from i18n model
//				var oBundle = this.getView().getModel("i18n").getResourceBundle();
//				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//				// show message
//				MessageToast.show(sMsg);
//			},
			
//35.
			onInit : function(){
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			},
			
//19-35.			
			onOpenDialog:function(){
				this.getOwnerComponent().helloDialog.open(this.getView());
			}
		});
});
