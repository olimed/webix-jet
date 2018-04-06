import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class ContactsForm extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let form = {
			view:"form",
			id:"ContactsForm",
			elements:[
				{view:"text", label:_("User name"), name:"Name"},
				{view:"text", label:_("Email"), name:"Email"},
				{view:"combo",  name:_("Status"),
					options:{data: statuses, body:{template:"#Icon#"}},

				},
				{view:"combo",  name:_("Country"), 
					options:{data: countries, body:{template:"#Country#"}},},
				{}
			]
		};

		let button = {
			view:"button",
			id:"saveButton",
			value:_("Save"),
			align:"right",
			click:() =>{
				let values = this.$$("ContactsForm").getValues();
				this.app.callEvent("saveData", [values]);
			}
		};

		return {rows: [form,{}, button]};

	}
	init(){
		this.on(this.app, "onContactSelected", (data) => {
			if(data){
				this.$$("ContactsForm").setValues(data);
			}
		});
	}
	ready(){}
}

