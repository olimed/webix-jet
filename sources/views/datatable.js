import {JetView} from "webix-jet";

export default class DataTable extends JetView{
	config(){
		
		let table = { 
			view:"datatable", 
			gravity:4, 
			scrollX: false,
			editable:true,
			autoConfig:true,
			editaction:"dblclick",
			select:true
		};

		var buttons = {
			cols: [
				{ view: "button", value: "Add", gravity:1, click:
					function () {
						this.table.add({})
					}
				},
				{ view: "button", value: "Delete", gravity:1, click:
					function () {
						let id = this.table.getSelectedId();
						if(id) this.table.remove(id);
					}
				}
			]
		};

   		return {rows:[table, buttons]}
	}
	
	init(){
		this.table = this.getRoot().queryView({ view:"datatable"});
	}
}