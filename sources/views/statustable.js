import data from "views/datatable";
import {statuses} from "models/statuses";

export default class statusData extends data{
	ready(view){
		view.queryView({ view:"datatable"}).parse(statuses);
	}
}