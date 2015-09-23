/*global QUnit*/
sap.ui.require([
     "sap/ui/demo/wt/model/formatter",
     "sap/ui/model/resoutce/ResourceModel",
     "sap/ui/thirdpart/sinon",
     "sap/ui/thirdpatr/sinon-qunit"
],function(formatter,ResourceModel){
		"use strict";
		
		QUnit.module("Formatting fucntions",{
			setup:function(){
				this._oResourceModel = new ResourceModel({
					bundleUrl:jQuery.sap.getModulePath("sap.ui.demo.wt","/i18n/i18n.properties")
				});
			},
			teardowm:function(){
				this._oResourceModel.destroy();
			}
		});
		QUnit.test("Should return the translated texts",function(assert){
			//Arrange
			var oViewStub ={
				getModel:this.stub().withArgs("i18n").returns(this._oResourceModel)
			};
			var oControllerStub = {
					getView:this.stub().returns(oViewStub)
			};
			
			//System under test
			var fnlsolatedFormatter = formatter.statusText.bind(oControllerStub);
			
			//Assert
			assert.strictEqual(fnlsolatedFormatter("A"),"New","The long text for status A is correct");
			
			assert.strictEqual(fnlsolatedFormatter("B"),"In Progress","The long text for status B is correct");
			
			assert.strictEqual(fnlsolatedFormatter("C"),"Done","long text for status C is correct");
			
			assert.strictEqual(fnlsolatedFormatter("Foo"),"Foo","The long text for status Foo is correct");
		});
});
