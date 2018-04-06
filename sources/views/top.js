import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		var header = {
			type:"header", template:this.app.config.name
		};

		var menu = {
			view:"menu", id:"top:menu", 
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon fa-#icon#'></span> #value# ",
			data:[
				{ value: _("DashBoard"), id:"start", icon:"envelope-o" },
				{ value: _("Data"),		 id:"data",  icon:"briefcase" },
				{ value: _("Contacts"),  id:"contacts",  icon:"users"},
				{ value: _("Settings"),	 id:"settings",  icon:"cog"}
			]
		};

		var ui = {
			type:"line", cols:[
				{ type:"clean", css:"app-left-panel",
					padding:10, margin:20, borderless:true, rows: [ header, menu ]},
				{ rows:[ { height:10}, 
					{ type:"clean", css:"app-right-panel", padding:4, rows:[
						{ $subview:true } 
					]}
				]}
			]
		};


		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}