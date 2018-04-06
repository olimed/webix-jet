import {JetView} from "webix-jet";

export default class DataTable extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

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
				{ 
					view: "button", value: _("Add"), gravity:1, click:() => {
						//this.table.add({})
						this.add();
					}
				},
				{ view: "button", value: _("Delete"), gravity:1, click:
					() => {
						let id = this.table.getSelectedId();
						/*if(id) this.table.remove(id);*/
						this.delete(id);
					}
				}
			]
		};
		return {rows:[table, buttons]};
	}
	
	init(){
		this.table = this.getRoot().queryView({ view:"datatable"});
	}

	/*add(){	}

	delete(id){	}*/
}