import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {statuses} from "models/statuses";

export default class ContactsForm extends JetView{
	config(){

		let form = {
			view:"form",
			id:"ContactsForm",
			elements:[
				{view:"text", label:"User name", name:"Name"},
				{view:"text", label:"Email", name:"Email"},
				{view:"combo",  name:"Status", options: contacts},
				{view:"combo",  name:"Country", options: statuses},
				{}
			]
		}

		let button = {
			view:"button",
			id:"saveButton",
			value:"Save",
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

