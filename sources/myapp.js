import "./styles/app.css";
import {JetApp, plugins} from "webix-jet";

webix.ready(() => {
	var app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start",
		debug: true
	});
	app.use(plugins.Locale); //, {path: "locales"}

	app.render();
	
	app.attachEvent("app:error:resolve", function(name, error){
		window.console.error(error);
	});
});