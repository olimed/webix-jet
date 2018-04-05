import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class ContactsView extends JetView{
	config(){

        var contactsList = {
            view: "list",
            id: "contacts:list",
            template: "#Name#  #Email#",
            select:true
        };

        var contactsForm = {
            view: "form",
            width: 300,
            elements: [
                {view:"text", label:"User Name"},
                {view:"text", label:"Email"},
                {}
            ]
        };

        var ui = {
            autoheight:true,
            rows:[
                { cols: [contactsList, contactsForm]  },
                {}
            ]
        };

		return ui;
	}
	init(){
		this.$$("contacts:list").parse(contacts);
	}
}