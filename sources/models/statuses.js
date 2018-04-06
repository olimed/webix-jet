/*export const statuses = [
	{"id":1,"value":"Busy","Icon":"cogs"},
	{"id":2,"value":"Open","Icon":"user"}
];*/

export const statuses = new webix.DataCollection({
	url: "http://localhost:8096/api/v1/statuses/",
	save: "rest->http://localhost:8096/api/v1/statuses/"
});