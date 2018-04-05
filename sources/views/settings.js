import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
    config(){

        var settigsSegment = {
            view:"segmented",
            options:[
                {id:"en", value:"English"},
                {id:"ru", value:"Russian"}
            ]
        };

        var ui = {
            rows:[
                settigsSegment,
                {}
            ]
        };

        return ui;
    }
}