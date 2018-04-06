import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import contform from "views/contactsform";

export default class ContactsView extends JetView{
	config(){
        var contactsList = {
            view: "list",
            id: "contactslist",
            template: "#Name#  #Email#",
            select:true,
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
			label: "Add", 
            click: function() {
                $$("contactslist").add({Name:"Change contact", Email:"your@email.com"})
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
        this.$$("contactslist").parse(contacts);

        this.on(this.app, "saveData", (data)  => {
			var id = $$("contactslist").getSelectedId();
			$$("contactslist").updateItem(id, data);
			
		});
    }
    
    urlChange(){
		var id = this.getParam("id");
        if (id) 
            this.$$("contactslist").select(id);
        else 
            this.$$("contactslist").select(1);
    }
}