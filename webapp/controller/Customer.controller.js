sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("shamrock.controller.Customer", {
		/*onPress : function () {
			MessageToast.show("Hello UI5!");
			this.byId("app").to(this.byId("intro"));
		},*/

		onInit : function () {
			this.getView().setModel(new JSONModel({
					customers: [
						{
							fname: "Aleksandr",
							lname: "Ivanov",
							age: 28
						},
						{
							fname: "Julia",
							lname: "Litvyakova",
							age: 28
						}
					]
				})
			);
		},

		onCreateCustomer : function () {
			this.byId("customer-app").to(this.byId("cust-create"));
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				var oRouter = this.getRouter();
				oRouter.navTo("cust-list", true);
			}
		},

		onChange: function (oEvent) {
			var bState = oEvent.getParameter("state");
			this.byId("ready").setVisible(bState);
		}
	});

});