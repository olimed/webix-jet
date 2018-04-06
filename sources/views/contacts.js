import {JetView} from "webix-jet";
import {data} from "models/contacts";
import contform from "views/contactsform";

export default class ContactsView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		var contactsList = {
			view: "list",
			id: "contactslist",            
			select:true,
			template: "#Name#  #Email# <span class='webix_icon fa-times delete'></span>",
			onClick: {
				"fa-times":function(e, id) {
					data.remove(id);
				}
			},
			on:{
				onAfterSelect:(id) =>{
					this.setParam("id", id, true);
					let values = this.$$("contactslist").getSelectedItem();
					this.app.callEvent("onContactSelected", [values]);
				}	
			}
		};

		let button = { 
			view:"button",
			label: _("Add"), 
			click: function() {
				data.add({Name:"Change contact", Email:"your@email.com"});
			}

		};

		var ui = {
			autoheight:true,
			rows:[
				{ cols: [
					{rows: [contactsList, {}, button]}, {$subview:contform}]  },
				{}
			]
		};

		return ui;
	}
	init(){
		//this.$$("contactslist").parse(data);
		this.$$("contactslist").sync(data);

		this.on(this.app, "saveData", (data)  => {
			var id = this.$$("contactslist").getSelectedId();
			this.$$("contactslist").updateItem(id, data);
			
		});
	}
	
	urlChange(){
		var id = this.getParam("id");
		if (id) 
			this.$$("contactslist").select(id);
		else 
			this.$$("contactslist").select(this.$$("contactslist").getFirstId());
	}
}