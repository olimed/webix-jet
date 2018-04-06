import {JetView} from "webix-jet";
import countrytable from "views/countrytable";
import statustable from "views/statustable";

export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		var list = {
			rows: [
				{
					view: "list",
					id: "datalist",
					data: [ 
						{value : _("Countries"), id: "Countries"},
						{value: _("Statuses"), id: "Statuses"}],
					autoheight: true,
					width: 300,
					scrollX: false,
					select: true,
					on: {
						onAfterSelect: function (id) {
							this.$scope.$$(id).show();
						}
					}
				},
				{}
			]
		};
		
		var multiviewData = {
			cells: [
				{id:"Countries", $subview:countrytable},
				{id:"Statuses", $subview:statustable}
			]
		};

		var ui ={
			cols: [list, multiviewData]
		};

		return ui;
	}
}