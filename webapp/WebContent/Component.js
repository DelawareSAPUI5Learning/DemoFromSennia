//9步开始有，联系mvc

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
//9-10.
	"sap/ui/model/resource/ResourceModel",
//19-.
	"sap/ui/demo/wt/controller/HelloDialog",
//26-.	
	"sap/ui/model/odata/v2/ODataModel",
//35.
	"sap/ui/Device"

	],function(UIComponent,JSONModel,ResourceModel,HelloDialog,ODataModel,Device){
		"use strict";
		
		return UIComponent.extend("sap.ui.demo.wt.Component",{
			
			metadata:{
//9.				rootView:"sap.ui.demo.wt.view.App"
//10-.定义新的文件，做一些配置				
				manifest:"json"
			},
//9.从controller中提过来的
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
				
//9.				//set i18n model on view
//				var i18nModel = new ResourceModel({
//					bundleName:"sap.ui.demo.wt.i18n.i18n"
//				});
//				this.setModel(i18nModel,"i18n");
				
				
//20-.				//set invoice model-local	
//				var oConfig = this.getMetadata().getConfig();
//				var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
//				var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace,oConfig.invoiceLocal));
//				this.setModel(oInvoiceModel,"invoice");
				
//26.				//set invoice model-remote
//				var oConfig = this.getMetadata().getConfig();
//				var oInvoiceModel = new ODataModel(oConfig.invoiceRemote);
//				oInvoiceModel.setUseBatch(false);
//				this.setModel(oInvoiceModel,"invoice");
//27-.				
				//disable batch grouping for v2 API of the northwind service
				this.getModel("invoice").setUseBatch(false);
				
//35.
				//set device model
				var oDeviceModel = new JSONModel(Device);
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel,"device");
//19-.				
				//set dialog
				this.helloDialog = new HelloDialog();
//31-.				
				// create the views based on the url/hash
				this.getRouter().initialize();
			},
//35.
				getContentDensityClass : function(){
					if(!this._sContentDensityClass){
						if(!sap.ui.Device.support.touch){
							this._sContentDensityClass = "sapUiSizeCompact";
						}
					}
					return this._sContentDensityClass;
				}
		});
});
