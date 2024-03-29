sap.ui.define([
      "sap/ui/core/util/MockServer"
],function(MockServer){
	"use strict";
	
	return{
		init:function(){
			//creat
			var oMockServer = new MockServer({
				rootUri:"/proxy/http/services.odata.org/V2/Northwind/Northwind.svc/"
			});
			
			//configure
			MockServer.config({
				autoRespond:true,
				autoRespondAfter:1000
			});
			//simulate
			var sPath = jQuery.sap.getModulePath("dap.ui.demo.wt.test.service");
			oMockServer.simulate(sPath +"/metadata.xml",sPath);
			//start
			oMockServer.start();
		}
	};
});