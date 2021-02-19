sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "shamrock.view.Customer"}).then(function (oView) {
		oView.placeAt("content");
	});
});