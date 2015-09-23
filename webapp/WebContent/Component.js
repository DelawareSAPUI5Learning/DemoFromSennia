sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	//19.
	"sap/ui/demo/wt/controller/HelloDialog"
//27.	"sap/ui/model/odata/v2/ODataModel"
	//10.
//	"sap/ui/model/resource/ResourceModel"
	],function(UIComponent,JSONModel,HelloDialog,ODataModel){
		"use strict";
		
		return UIComponent.extend("sap.ui.demo.wt.Component",{
			
			metadata:{
//				rootView:"sap.ui.demo.wt.view.App"
				manifest:"json"
			},
			init:function(){
				//call the init function of the parent
				UIComponent.prototype.init.apply(this,arguments);
				//set data model
				var oData = {
						recipient:{
							name:"World"
						}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				
//27.				//set invoice model-local	
//				var oConfig = this.getMetadata().getConfig();
//				var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
//				var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace,oConfig.invoiceLocal));
//				this.setModel(oInvoiceModel,"invoice");
////26.				
//				//set invoice model-remote
//				var oConfig = this.getMetadata().getConfig();
//				var oInvoiceModel = new ODataModel(oConfig.invoiceRemote);
//				this.setModel(oInvoiceModel,"invoice");
				
				//disable batch grouping for v2 API of the northwind service
				this.getModel("invoice").setUseBatch(false);
				
				//set dialog
				this.helloDialog = new HelloDialog();
				
				//set i18n model on view
//				var i18nModel = new ResourceModel({
//					bundleName:"sap.ui.demo.wt.i18n.i18n"
//				});
//				this.setModel(i18nModel,"i18n");
			}
		});
});
