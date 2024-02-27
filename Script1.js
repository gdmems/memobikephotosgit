// KAON GPON MIC
d3.csv("productionfile.txt").then(function (data) {
	var ONTs = data;
	var button = d3.select("#button");
	var form = d3.select("#form");
	button.on("click", runEnter);
	form.on("submit", runEnter);

	function runEnter() {

			d3.select("tbody").html("") 
			d3.event.preventDefault(); 

			var inputValue = d3.select("#user-input").property("value");
			var filteredONT = ONTs.filter(ONTs => ONTs.MAC.includes(inputValue));

			for (var i = 0; i < filteredONT.length; i++)
			{
				var webPWD = filteredONT[i]["SN"]
				d3.select("tbody").insert("tr").html(
					"<td>" + (filteredONT[i]["SN"])+"</a>"+"</td>" + "<td>" + (filteredONT[i]["MAC"])+"</a>"+"</td>" + "<td>" + (filteredONT[i]["SSID"])+"</a>"+"</td>" + "<td> ONT#" + (webPWD.substring(6,12))+"</a>"+"</td>"
					) 
				}
		};
});