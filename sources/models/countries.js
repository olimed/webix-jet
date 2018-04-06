/*export const countries = [
	{"id":1,"value":"USA"},
	{"id":2,"value":"Canada"},
	{"id":3,"value":"Italy"}
];*/

export const countries = new webix.DataCollection({
	url: "http://localhost:8096/api/v1/countries/",
	save: "rest->http://localhost:8096/api/v1/countries/"
});