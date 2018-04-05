import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class DataView extends JetView{
	config(){

		var list = {
			rows: [
				{
					view: "list",
					id: "datalist",
					data: ["Countries","Statuses"],
					autoheight: true,
            		width: 300,
            		scroll: false,
					select: true,
					//select:"Countries",
					on: {
						onAfterSelect: function (id) {
							$$(id).show();
						}
					}
				},
				{}
			]
		};
		
		var dataCountries = {
			rows: [
				{
					view: "datatable",
					id: "dataCountries:datatable", 
					scrollX: false,
					select: "row",
					editable: true,
					multiselect: true,
					columns: [
						{id: "id", header: "", width: 40 },
						{id: "Name", header: "Country", fillspace: true, editor:"text",}
					]
				},
				{},
				{
					cols: [
						{ view: "button", value: "Add", click:
							function () {
								var id = $$("dataCountries:datatable").getLastId() + 1;
                                $$("dataCountries:datatable").add({id: id, Name: "Change country"});
                            }
						},
						{ view: "button", value: "Delete", click:
							function () {
                                $$("dataCountries:datatable").remove($$("dataCountries:datatable").getSelectedId());
                            }
						}
					]
				}
			]
		};

		var dataStatuses ={
			rows: [
				{
					view: "datatable",
					id: "dataStatuses:datatable",
					scrollX: false,
					select: "row",
					editable: true,
					multiselect: true,
					columns: [
						{id: "id", header: "", width: 40, },
						{id: "Name", header: "Name", fillspace: true, editor:"text",},
						{id: "Icon", header: "Icon", editor:"text",}
					] 
				},
				{},
				{
					cols: [
						{ view: "button", value: "Add", click:
							function () {
								var id = $$("dataStatuses:datatable").getLastId() + 1;
                                $$("dataStatuses:datatable").add({id: id, Name: "Change name", Icon: "user"});
                            }
						},
						{ view: "button", value: "Delete", click:
							function () {
                                $$("dataStatuses:datatable").remove($$("dataStatuses:datatable").getSelectedId());
                            }
						}
					]
				}
			]
		};

		var multiviewData = {
			cells: [
				{id:"Countries", cols:[ dataCountries]},
				{id:"Statuses", cols: [dataStatuses]}
			  ]
		}

		var ui ={
			cols: [list, multiviewData]
		};

		return ui;
	}
	init(){
		this.$$("dataCountries:datatable").parse(countries);
		this.$$("dataStatuses:datatable").parse(statuses);
	}
}

